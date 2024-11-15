package com.example.demo.domain;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Entity
@Table(name="ANSWER")
@NoArgsConstructor
@AllArgsConstructor
public class Answer {
	@Id
	@SequenceGenerator(
				name="SEQ_ANSWER_NO",
				sequenceName="SEQ_ANSWER_NO",
				allocationSize=1
			)
	@GeneratedValue(generator="SEQ_ANSWER_NO")
	@Column(name="ANSWER_NO")
	private Long answerNo;
	
	@NonNull
	@Column(name="INQUIRY_NO")
	private Long inquiryNo;
	
	@NonNull
	@Column(name="USER_ID")
	private String userId;
	
	@NonNull
	@Column(name="ANSWER", length = 4000)
	private String answer;
	
	@NonNull
	@CreatedDate
	@Column(name="CREATED_DATE", insertable=false, updatable=false, columnDefinition="DATE DEFAULT SYSDATE")
	private LocalDateTime createdDate;

	@NonNull
	@LastModifiedDate
	@Column(name="MODIFIED_DATE", columnDefinition="DATE DEFAULT SYSDATE")
	private LocalDateTime modifiedDate;
	
	// 오라클에선 Boolean 타입 JPA 매핑 시, 자동으로 NUMBER(1)로 지정한다고 함
	@Column(name="IS_DELETED", insertable=false, columnDefinition="NUMBER DEFAULT 0")
	private boolean deleted;
	
	@Column(name="DELETED_DATE")
	private LocalDateTime deletedDate;
}