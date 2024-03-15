import { PaginationWrapper, StyledPaginationItem } from "./styles";

const Pagination = ({ currentPage, totalPages }) => {
	const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<>
			<PaginationWrapper>
				{pagesArray.map((page) => (
					<StyledPaginationItem key={page} active={currentPage === page} />
				))}
			</PaginationWrapper>
		</>
	);
};

export default Pagination;
