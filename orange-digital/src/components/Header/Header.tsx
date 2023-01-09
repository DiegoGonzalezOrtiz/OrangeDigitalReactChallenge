import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonList from "../PersonList/PersonList";
import './Header.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Header = ({ UserDetails }: any) => {

    const [menuState, setMenuState] = useState<boolean>(false);

    const openDetail = () => {
        setMenuState(!menuState);
    }
    return <div className="barraContainer">
        <div className="barra">

            <MenuIcon onClick={openDetail}>

            </MenuIcon>
            <p>{menuState ? 'DETAIL PAGE' : 'GALLERY'}</p>
            <MoreVertIcon>

            </MoreVertIcon>

        </div>
        <div className="message" hidden={!menuState}>
            <h2>Lost on the Road to the mountains</h2>
            <div className="info">
                <h5>By:Alan tiger At: Paris,France</h5>
                <div className="div-icons">
                <FavoriteIcon></FavoriteIcon> 4.5k
                <ChatBubbleIcon className="bubble"></ChatBubbleIcon> 1.1k
                </div>
                
            </div>
    <h5>On: March 31st,2016</h5>
          
        </div>
        <PersonList hidden={menuState} UserDetails={UserDetails}></PersonList>
    </div>
}

export default Header;