import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import  {Avatar} from '@material-ui/core';



function Logo() {
    return (
    <>
        <Navbar>
        <LogoWrapper>
            <Title>
                isomorphic
            </Title>
        </LogoWrapper>
        <>
            <MenuLogo>
            <MenuIcon style={{cursor: 'pointer'}}/>
        </MenuLogo>
        <MenuItems>
            <SearchIcon fontSize="small" style={{cursor: 'pointer'}}/>
            <NotificationsNoneRoundedIcon fontSize="small" style={{cursor: 'pointer', marginLeft: 25}}/>
            <ForumRoundedIcon fontSize="small" style={{cursor: 'pointer', marginLeft: 25}}/>
            <ShoppingCartRoundedIcon fontSize="small" style={{cursor: 'pointer', marginLeft: 25}}/>
            <HeaderAvatar
                    src="https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
                />
        </MenuItems>
    
        </>
        
     </Navbar>
     
    
    </>
    )
}

export default Logo;

const Navbar = styled.div`
display:flex;

`;


const LogoWrapper = styled.div`
background-color: #293B5F;
color:white;
flex:0.3;
padding: 1px;
max-width: 250px;
margin-top:0;
`;
const Title = styled.h1`
  font-size: 1.4em;
  opacity:0.7;
  text-align: center;
  color: white;
  text-transform:uppercase;
`;
const MenuLogo = styled.div`
flex:0.8;
align-items:center;
background-color:whitesmoke;
align-items: center;
padding-top:13px;
padding-left:10px;
`;
const MenuItems= styled.div`
flex:0.2;
display:flex;
align-items:center;
background-color:whitesmoke;
align-items:space-between;
padding-top:13px;
padding-left:10px;
`;
const HeaderAvatar = styled(Avatar)`
cursor:pointer;
margin-left:25px;

:hover{
    opacity:0.8;
}
`;
