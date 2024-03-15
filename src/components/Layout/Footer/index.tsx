import React from "react";
import { FooterWraper, FooterContent } from "./styles";
import GoodBoyLogo from "../../../assets/logo-goodboy.svg";
const Footer = () => {
	return (
		<FooterWraper>
			<FooterContent>
				<img src={GoodBoyLogo} alt="goodBoyLogo" />
				<div>
					<h3>Nadácia Good boy</h3>
				</div>
				<div>
					<h3>Nadácia Good boy</h3>
				</div>
				<div>
					<h3>Nadácia Good boy</h3>
				</div>
			</FooterContent>
		</FooterWraper>
	);
};

export default Footer;
