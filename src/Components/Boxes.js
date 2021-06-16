import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';

function Boxes() {
    return (
        <>
        <MainBox>
             <FirstBox>
                    <BoxImage>
                        <EmailIcon fontSize="large" style={{color: 'black'}}/>
                    </BoxImage>
                    <BoxInfo>
                        <h1>210</h1>
                        <p>Unread Messages</p>
                    </BoxInfo>
            </FirstBox>
            <FirstBox>
                    <BoxImage>
                        <EmailIcon fontSize="large" style={{color: 'black'}}/>
                    </BoxImage>
                    <BoxInfo>
                        <h1>210</h1>
                        <p>Unread Messages</p>
                    </BoxInfo>
            </FirstBox>
            <FirstBox>
                    <BoxImage>
                        <EmailIcon fontSize="large" style={{color: 'black'}}/>
                    </BoxImage>
                    <BoxInfo>
                        <h1>210</h1>
                        <p>Unread Messages</p>
                    </BoxInfo>
            </FirstBox>
            <FirstBox>
                    <BoxImage>
                        <EmailIcon fontSize="large" style={{color: 'black'}}/>
                    </BoxImage>
                    <BoxInfo >
                        <h1>210</h1>
                        <p>Unread Messages</p>
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
top:500px;
position:absolute;
margin-left:260px;
justified-content:space-around;
`;

const FirstBox = styled.section`
display:flex;
margin:auto;
width:380px;
height:60px;
border-radius:15px;
box-shadow: 7px 14px 14px rgba(0, 0, 0, 0.25);

`;

const BoxInfo = styled.section`
display:flex;
flex-direction:column;
box-sizing:border-box;
background-color:#7952B3;
color:white;
border-radius:0px 15px 15px 0px;
flex:1;

>p{
    font-weight:100;
    fontSize:15px;
    margin-top:0;
    padding:0;
    margin-left:5px;
}
>h1{
    font-size:20px;
    font-weight:bolder;
    margin-bottom:0;
    margin-top:10px;
    margin-left:5px;

}


`;
const BoxImage = styled.div`
width:75px;
margin-left:15px;
margin-top:10px;
align-items:center;
`;