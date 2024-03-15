import styled from "styled-components";

export const PaginationWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5px;
`;

export const StyledPaginationItem = styled.span`
  content: "";
  background: ${props => props.active ? 'linear-gradient(0deg, #cd8b65, #cd8b65), linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%)' : 'rgba(159, 159, 159, .36)'};
  border-radius: 10px;
  height: 0.375rem;
  width: ${props => props.active ? '2.688rem' : '1.25rem'};
`;
