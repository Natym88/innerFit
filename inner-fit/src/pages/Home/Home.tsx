import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import LanguageProvider from "../../context/LanguageContext";
import { StyledDiv, StyledHeader } from "./styles";
import HomeContent from "../../components/Home/HomeContent";

const Home = () => {

  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  const updateIsMobile = () => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, [isMobile]); 
  
  return (
    <LanguageProvider>
        <StyledDiv mobile={isMobile}>
      <StyledHeader mobile={isMobile}>
        <Header />
        <Navbar isMobile={isMobile} />
      </StyledHeader>
      <HomeContent isMobile={isMobile} />
    </StyledDiv>
    </LanguageProvider>
  )
}

export default Home