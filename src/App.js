import React from "react";
import styled from 'styled-components';
import Logo from './Components/Logo';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';

function App() {
  return (
    <MainContainer>
      
      <Logo/>  
      <Sidebar/>
     <Dashboard/>
     <Footer/>
   </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
position: relative;
`;