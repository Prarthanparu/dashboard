import React from 'react';
import styled from 'styled-components';

function Boxes() {
    return (
        <>
        <MainBox>
             <FirstBox>
                    <BoxInfo>
                        <h3>INCOME</h3>
                        <h1>$15000</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur  Aspernatur, sapiente?</p>
                    </BoxInfo>
            </FirstBox>
            <FirstBox>
                    <BoxInfo>
                        <h3>INCOME</h3>
                        <h1>$15000</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur  Aspernatur, sapiente?</p>
                    </BoxInfo>
            </FirstBox>
            <FirstBox>
                    <BoxInfo>
                        <h3>INCOME</h3>
                        <h1>$15000</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur  Aspernatur, sapiente?</p>
                    </BoxInfo>
            </FirstBox>
            <FirstBox>
                    <BoxInfo>
                        <h3>INCOME</h3>
                        <h1>$15000</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur  Aspernatur, sapiente?</p>
                    </BoxInfo>
            </FirstBox>
        </MainBox>
           
            
        </>
        
    )
}

export default Boxes;
const MainBox = styled.div`
display:flex;
flex-direction:row;
width:85%;
top:600px;
position:absolute;
margin-left:260px;

justified-content:space-around;
`;

const FirstBox = styled.section`
display:flex;
margin:auto;
width:380px;
height:175px;
border-radius:15px;
box-shadow: 7px 14px 14px rgba(0, 0, 0, 0.25);

`;

const BoxInfo = styled.section`
${'' /* display:flex;
flex-direction:column; */}
box-sizing:border-box;
justify-content:left;
padding:15px 15px 15px 15px;


>p{
    font-weight:100;
    font-size:14px;
}
>h1{
    font-size:20px;
    font-weight:300;
    color:#810000;
}
>h3{
    font-size:13px;
}   
`;
