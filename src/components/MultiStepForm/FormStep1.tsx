import React from "react";
import WalletIcon from "../../assets/wallet.svg";
import FootIcon from "../../assets/foot.svg";
import { VolumeWrapper } from './styles';
const FormStep1 = () => {
	return (
		<>
			<VolumeWrapper>
				<span>
					<img
						src={WalletIcon}
						alt="wallet"
						height="fit-content"
						width="fit-content"
					/>
					<p>Chcem finančne prispieť konkrétnemu útulku</p>
				</span>
				<span>
					<img src={FootIcon} height="fit-content"
						width="fit-content"
					/>
					<p>Chcem finančne prispieť celej nadácií</p>
				</span>
			</VolumeWrapper>
		</>
	);
};

export default FormStep1;
