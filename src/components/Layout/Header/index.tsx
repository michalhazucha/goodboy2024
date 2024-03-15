import React from "react";
import IconFacebook from "../../../assets/facbook.svg";
import IconInstagram from "../../../assets/ig.svg";
import { HeaderWrapper } from "./styles";
const Header = () => {
	return (
		<HeaderWrapper>
			<span>Nadácia GoodBoy</span>
			<span>
        <img src={IconFacebook} alt="" />{" "}
        <img src={IconInstagram} alt="" />{" "}
			</span>
		</HeaderWrapper>
	);
};

export default Header;
