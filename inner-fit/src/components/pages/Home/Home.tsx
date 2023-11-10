import { useEffect, useState } from 'react';
import { Header } from '../Header'
import { Navbar } from '../Navbar'
import { StyledDiv, StyledHeader } from './styles'
import HomeContent from './HomeContent';

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
    <StyledDiv mobile={isMobile}>
      <StyledHeader mobile={isMobile}>
        <Header />
        <Navbar isMobile={isMobile} />
      </StyledHeader>
      <HomeContent isMobile={isMobile} />
    </StyledDiv>
  )
}

export default Home