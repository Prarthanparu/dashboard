import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import MapIcon from '@material-ui/icons/Map';
import ReceiptIcon from '@material-ui/icons/Receipt';
import YouTubeIcon from '@material-ui/icons/YouTube';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ContactsIcon from '@material-ui/icons/Contacts';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import TimelineIcon from '@material-ui/icons/Timeline';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import EcoIcon from '@material-ui/icons/Eco';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';
import FeedbackIcon from '@material-ui/icons/Feedback';
import TableChartIcon from '@material-ui/icons/TableChart';
import SidebarOption from './SidebarOption';


function Sidebar() {
    return (
        
    <>
           <SidebarContainer>
           
            <SidebarOption Icon={EmailIcon} title="Threads" />
            <SidebarOption Icon={ChatIcon} title="Chat" />
            <SidebarOption Icon={ChildCareIcon} title="Ecommerce" />
            <SidebarOption Icon={MapIcon} title="Maps" />
            <SidebarOption Icon={ReceiptIcon } title="Invoice" />
            <SidebarOption Icon={YouTubeIcon} title="Youtube Search" />
            <SidebarOption Icon={CalendarTodayIcon} title="Calender" />
            <SidebarOption Icon={NoteAddIcon} title="Notes" />
            <SidebarOption Icon={FormatListBulletedIcon} title="Todos" />
            <SidebarOption Icon={WhatshotIcon} title="Firestore CRUD" />
            <SidebarOption Icon={ContactsIcon} title="Contacts" />
            <SidebarOption Icon={ShuffleIcon} title="Shuffle" />
            <SidebarOption Icon={ TimelineIcon} title="Charts" />
            <SidebarOption Icon={FormatAlignCenterIcon} title="Forms" />
            <SidebarOption Icon={EcoIcon} title="UI Elements" />
            <SidebarOption Icon={FlashAutoIcon} title="Advanced Elements" />
            <SidebarOption Icon={FeedbackIcon} title="Feedback" />
            <SidebarOption Icon={TableChartIcon} title="Tables" />
           
            <hr />
        </SidebarContainer>
      
    </>
   
        
    );
}

export default Sidebar;

const SidebarContainer = styled.div`
background-color:#47597E;
color:white;
flex:0.3;
padding-top:20px;
max-width: 252px;
margin-top:0px;
height:100%;
padding-bottom:650px;
justify-content:center;

>hr{
    margin-top: 10px;
    margin-bottom:10px;
    border: 1px solid whitesmoke;
}

`;


