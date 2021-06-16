import React, { Component } from 'react'
import styled from 'styled-components';
import {Bar,Doughnut,Line} from 'react-chartjs-2';

function Charts(){
   
    const data={
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
}]
}  
   
        return (
             <>
                <MainBox>
                    <FirstBox>
                        <Bar data={data} />
                    </FirstBox>
                    <FirstBox>
                        <Line data={data}/>
                    </FirstBox>
                    
                </MainBox>
           
            
        </>
        )
    }


export default Charts;

const MainBox = styled.div`
display:flex;
flex-direction:row;
width:85%;
top:800px;
position:absolute;
margin-left:260px;

justified-content:space-around;
`;

const FirstBox = styled.section`
display:flex;
margin:auto;
z-index:1;
width:780px;
height:450px;
border-radius:15px;
box-shadow: 7px 14px 14px rgba(0, 0, 0, 0.25);

`;

