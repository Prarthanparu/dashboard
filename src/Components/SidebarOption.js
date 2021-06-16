import React from 'react';
import styled from 'styled-components';


function SidebarOption({Icon, title, id}) {
   

   
    return (
        <SidebarOptionContainer>
            {Icon && <Icon fontsize="small"  style={{padding:10}}/>} {title}
        </SidebarOptionContainer>
        
    );
}

export default SidebarOption;
const SidebarOptionContainer = styled.div`
display:flex;
font-size:10px;
align-items:center;
padding-left:4px;
cursor:pointer;
color:#DBE6FD;

:hover {
    opacity:0.7 transparent;
    background-color:#DBE6FD;
    color:black;
}
`;

