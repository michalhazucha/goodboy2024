import styled from "styled-components";

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px 24px;
	border: 1px solid #dfdfdf;
	border-radius: 8px;
	margin-bottom: 19px;
	label {
		font-weight: 800;
	}
	input {
		border: none;
		&:focus-visible {
			border-bottom: 1px solid #dfdfdf;
			outline: none !important;
		}
		&::placeholder {
			color: #9f9f9f;
			font-weight: 400;
		}
	}
	&:focus-within {
		border: 1px solid #cd8b65;
	}
`;
