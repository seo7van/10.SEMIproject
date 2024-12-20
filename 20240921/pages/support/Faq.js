import axios from 'axios';
import { useEffect, useState } from 'react';
import * as FaqStyle from '../styles/FaqStyle';
import { useNavigate } from 'react-router-dom';

const userPermissions = ["user"];
const userData = {userId: 'admin2', permissions: userPermissions}
const isAdmin = userData.permissions.includes("admin");
const userId = userData.userId;

function Faq() {
	const [faqList, setFaqList] = useState([])
	const [isOpen, setIsOpen] = useState(false);
	const [modalType, setModalType] = useState('');
	const [faq, setFaq] = useState({});
	const [headType, setHeadType] = useState('');
	
	const navigate = useNavigate();
	
	const openModalHandler = () => {
		setIsOpen(!isOpen);
	}
	
	const modalTypeHandler = (type) => {
		setModalType(type);
	}
	
	const faqHandler = (faq) => {
		setFaq(faq);
	}
	
	const headTypeHandler = (headType) => {
		setHeadType(headType)
	}
	
	useEffect(() => {
		axios.get(`/faqs`).then(result => {
			setFaqList(result.data);
		});
	}, [])

  return (
    <div>
    	<h1 align='center' style={{fontSize: "32px"}}>❓ F A Q ❗
			{
				isAdmin &&
				(<FaqStyle.RightFloatSpan>
					<button onClick={() => {
						openModalHandler(); 
						modalTypeHandler('new'); 
						faqHandler({})
						headTypeHandler('추가')}
						}>FAQ 추가</button>
				</FaqStyle.RightFloatSpan>)
			}
    	</h1>
    	<section>
    		<article>
					<ShowFaq faqList={faqList}/>
    		</article>
    		<article>
    			<FaqStyle.FaqH3>
    				 ❓❓❓ 찾으시는 내용이 없나요? 
						<FaqStyle.RightFloatSpan>
							<button onClick={() => {navigate('/supports/usersupport')}}>고객지원 문의하기</button>
						</FaqStyle.RightFloatSpan>
    			</FaqStyle.FaqH3>
    		</article>
    	</section>
			{
				isOpen && (<Modal isOpen={isOpen} modalType={modalType} faq={faq} onClose={openModalHandler} headType={headType}/>)
			}

    </div>
  );

	/**
	 * ShowFaq는 모든 faq 리스트를 보여줍니다.
	 * 관리자의 경우, 수정과 삭제 버튼이 보여지게 됩니다.
	 */
	function ShowFaq({ faqList }) {
		return ( 
			<span>
			{faqList.map((faq, i) => (
					<FaqStyle.FaqDetails key={i}>
						<summary style={{
							fontSize: "24px",
							
						}}>{faq.question}</summary>
						<p>
							{faq.answer} &emsp; 
							{
								isAdmin && 
								(<FaqStyle.RightFloatSpan><button onClick={() => {
									openModalHandler(); 
									modalTypeHandler('edit'); 
									faqHandler(faq)
									headTypeHandler('수정')}
									}>수정</button>&emsp;
								<button onClick={() => (DeleteFaq(faq.faqNo))}>삭제</button></FaqStyle.RightFloatSpan>)
							}
						</p>
					</FaqStyle.FaqDetails>
			))}
			</span>
		)
	}
	
	/**
	 * newFaq 
	 */
	function NewFaq({question, answer, onQuestionChange, onAnswerChange}) {
		return (
			<FaqStyle.ModalFormContentArea>
				<FaqStyle.FormLabel>질문: <FaqStyle.FormInput 
													name="question" 
													type="text" 
													placeholder='질문을 입력해주세요.'
													value={question}
													onChange={(e) => {onQuestionChange(e.target.value)}} 
												/></FaqStyle.FormLabel><br /><br />
        <FaqStyle.FormLabel>답변: <FaqStyle.FormTextArea 
        									name="answer" 
        									placeholder='답변을 입력해주세요.'
        									value={answer}
        									onChange={(e) => {onAnswerChange(e.target.value)}}
      									></FaqStyle.FormTextArea></FaqStyle.FormLabel>
      </FaqStyle.ModalFormContentArea>
		);
	}
	
	function EditFaq({faq, onQuestionChange, onAnswerChange}) {
		return (
			<FaqStyle.ModalFormContentArea>
				<FaqStyle.FormLabel>질문: <FaqStyle.FormInput 
													name="question" 
													type="text" 
													defaultValue={faq.question}
													onChange = {(e) => {onQuestionChange(e.target.value)}} 
												/></FaqStyle.FormLabel><br /><br />
        <FaqStyle.FormLabel>답변: <FaqStyle.FormTextArea 
        									name="answer" 
        									defaultValue={faq.answer}
        									onChange = {(e) => {onAnswerChange(e.target.value)}}
      									></FaqStyle.FormTextArea></FaqStyle.FormLabel>
      </FaqStyle.ModalFormContentArea>
		);
	}
	
	function DeleteFaq(faqNo) {
		console.log(faqNo);
		if(window.confirm('등록된 FQA 항목을 삭제하시겠습니까?')) {
			axios.delete(`/faqs/${faqNo}`)
					 .then(() => {
						 	alert('삭제되었습니다.');
						 	window.location.reload();
						 });
		}
		//todo 지웠을 때 생성 시 렌더링 안되는 상황 발생
	}
	
	function Modal({modalType, faq, onClose, headType}) {
		
		const [question, setQuestion] = useState(faq.question || '');
		const [answer, setAnswer] = useState(faq.answer || '');
		
		const doSubmit = (e) => {
			e.preventDefault();
			const formData = {
				question,
				answer,
				userId
			};
			
		if(modalType === 'new') {
			axios.post('/faqs/new', formData)
					 .then(
						 axios.get(`/faqs`)
						 			.then(
										result => {
										 	setFaqList(result.data);
										}
									)
					 )
		} else if(modalType === 'edit'){
			axios.put(`/faqs/${faq.faqNo}`, formData)
					 .then(
						 axios.get(`/faqs`)
						 			.then(
										result => {
										 	setFaqList(result.data);
										}
									)
					 )
		}
			
			onClose();
		}
		
		return (
			<FaqStyle.ModalBackgroundArea onClick={onClose}>
        <FaqStyle.ModalContentArea onClick={e => e.stopPropagation()}>
        	<FaqStyle.ModalHeadArea>
        		<FaqStyle.ModalHeadH2>FAQ {headType}</FaqStyle.ModalHeadH2>
	          <FaqStyle.ModalCloseButton onClick={onClose}>✖️</FaqStyle.ModalCloseButton>
        	</FaqStyle.ModalHeadArea>
					<form name="faqForm" onSubmit={doSubmit}>
	          {
	            modalType === 'new' && 
	            <NewFaq
	            	question={question}
	            	answer={answer}
	            	onQuestionChange={setQuestion}
	            	onAnswerChange={setAnswer} 
	            />
	          }
	          {
	            modalType === 'edit' && 
	            <EditFaq 
	            	faq={faq}
	            	onQuestionChange={setQuestion}
	            	onAnswerChange={setAnswer} 
            	/>
	          }
	          <br/>
	          <FaqStyle.FormButtonArea>
	          	<FaqStyle.FormSubmitButton type='submit'>등록</FaqStyle.FormSubmitButton>
	          	<FaqStyle.FormResetButton type='reset' onClick={onClose}>취소</FaqStyle.FormResetButton>
	          </FaqStyle.FormButtonArea>
					</form>
        </FaqStyle.ModalContentArea>
			{/* 버튼 만들고 axios으로 API 통신해서 나머지 만들기 */}
      </FaqStyle.ModalBackgroundArea>
		)
	}
}

export default Faq;