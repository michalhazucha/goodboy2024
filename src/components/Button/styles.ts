import styled from "styled-components";

export const Button = styled.button<{variant?:string}>`
border-radius: 100px;
border: none;
padding: 20px 24px;
font-weight: 700;
background: ${(props) => {
  switch (props.variant) {
    case 'primary':
      return 'linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%)';
    case 'secondary':
      return '#9F9F9F';
    case 'light':
      return '#F3E2D9';
    default:
      return 'linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%)';
  }
}};
color: ${(props) => {
  switch (props.variant) {
    case 'primary':
    case 'secondary':
      return '#FFFFFF';
    case 'light':
      return '#2F2F2F';
    default:
      return '#FFFFFF';
  }
}};
`;

