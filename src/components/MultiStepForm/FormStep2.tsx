import React from "react";
import Input from "../Input";

const FormStep2 = () => {
	return (
		<>
			<Input label="Meno" name="firstName" placeholder="Zadajte Vaše meno" />
			<Input
				label="Priezvisko:"
				name="lastName"
				placeholder="Zadajte Vaše priezvisko"
			/>
			<Input
				label="E-mailová adresa"
				name="email"
				placeholder="Zadajte Váš e-mail"
			/>
			<Input label="Telefónne číslo" name="phone" placeholder="+421" />
		</>
	);
};

export default FormStep2;
