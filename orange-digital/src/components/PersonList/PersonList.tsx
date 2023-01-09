import './PersonList.scss';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const PersonList = (props: any) => {
    const hidden = props.hidden;
    const array: Array<any> = props.UserDetails;
    return <div className='personList' hidden={!hidden}>
        {array === undefined ? 'Cargando...' : array.map(item =>
            <div className='row'>
                <img src={item.image} alt=""></img>
                <div>
                    <h4>{item.name}</h4>
                    <h5>{item.description}</h5>
                    <h6>
                        <WatchLaterIcon className='clock' fontSize="inherit"></WatchLaterIcon> 10 minuts ago
                        <FavoriteIcon className='favorite' fontSize="inherit"></FavoriteIcon> 4.5K
                        <ChatBubbleIcon className='comment' fontSize="inherit"></ChatBubbleIcon> 1.1K
                    </h6>
                </div>
            </div>
        )}
    </div>
}

export default PersonList;