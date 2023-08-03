import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const ContactSection = styled.div`
	height: 100vh;
	scroll-snap-align: center;
`;

const ContactContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 50px;
`;

const ContactLeft = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
`;

const ContactRight = styled.div`
	flex: 1;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const ContactTitle = styled.h1`
	font-weight: 200;
`;

const ContactForm = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 25px;

	@media only screen and (max-width: 768px) {
		width: 300px;
	}
`;

const ContactInput = styled.input`
	padding: 20px;
	background-color: lightgray;
	border: none;
	border-radius: 5px;
`;

const ContactTextArea = styled.textarea`
	padding: 20px;
	background-color: lightgray;
	border: none;
	border-radius: 5px;
`;

const ContactButton = styled.button`
	background-color: #da4ea2;
	color: white;
	font-size: 20px;
	font-weight: bold;
	border-radius: 5px;
	cursor: pointer;
	padding: 20px;
`;

const Contact = () => {
	const ref = useRef<HTMLFormElement>(null);
	const [success, setSuccess] = useState(false);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		if (ref.current) {
			emailjs
				.sendForm(
					"service_4pasqyi",
					"template_k7bv08d",
					ref.current,
					"AU1p_xj5N1oAy9WJO"
				)
				.then(
					(result) => {
						console.log(result.text);
						setSuccess(true);
					},
					(error) => {
						console.log(error.text);
						setSuccess(false);
					}
				);
		}
	};

	return (
		<ContactSection>
			<ContactContainer>
				<ContactLeft>
					<ContactForm ref={ref} onSubmit={handleSubmit}>
						<ContactTitle>Contact Me</ContactTitle>
						<ContactInput type="text" placeholder="Name" name="name" />
						<ContactInput type="text" placeholder="Email" name="email" />
						<ContactTextArea
							placeholder="Enquiry"
							name="message"
							rows={10}
						></ContactTextArea>
						<ContactButton type="submit">Send</ContactButton>
						{success &&
							"Your message has been sent. I will get back to you soon"}
					</ContactForm>
				</ContactLeft>
				<ContactRight>
					<Map />
				</ContactRight>
			</ContactContainer>
		</ContactSection>
	);
};

export default Contact;
