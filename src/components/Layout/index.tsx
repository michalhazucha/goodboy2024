import { ReactNode } from "react";
import { AppLayout } from "../../styles";
import Header from './Header';
import Footer from './Footer';
import coverPicture from "../../assets/Mask Group.png"
const Layout = ({children}: ReactNode) => {
  return (
		<AppLayout>
      <Header />
        <div style={{display:"flex",flexDirection:"row"}}>{children}  <img src={coverPicture} alt="coverpicture" height="fit-content" width="fit-content" style={{paddingLeft:'6.4rem'}}/></div>
      
			<Footer />
		</AppLayout>
	);
};

export default Layout;
