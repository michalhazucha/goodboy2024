import React, { useState } from "react";
import Input from "../Input";
import { Button } from "../Button/styles.ts";
import { ButtonsWrapper } from "./styles.ts";
import Pagination from "../Pagination/index.tsx";
import FormStep2 from "./FormStep2.tsx";
import FormStep1 from "./FormStep1.tsx";
import FormStep3 from './FormStep3.tsx';

const MultiStepForm = () => {
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<div>
			<Pagination currentPage={currentPage} totalPages={3} />
			<h1 style={{ fontSize: "46px" }}>Potrebujeme od Vás zopár informácií</h1>
			<form style={{ display: "flex", flexDirection: "column" }}>
				{/* STEP 2*/}
				{currentPage === 1 && <FormStep1></FormStep1>}
				{currentPage === 2 && <FormStep2></FormStep2>}
				{currentPage === 3 && <FormStep3></FormStep3>}
				<ButtonsWrapper>
					{currentPage>1 &&<Button
						variant="light"
						onClick={(e) => {
							e.preventDefault();
							setCurrentPage((curr) => curr - 1);
						}}
					>
						Spať
					</Button>}
					<Button
						type="submit"
						variant="secondary"
						onClick={(e) => {
							e.preventDefault();
							setCurrentPage((curr) => curr + 1);
						}}
					>
						Pokračovať
					</Button>
				</ButtonsWrapper>
			</form>
		</div>
	);
};

export default MultiStepForm;
