
import ReactPlayer from 'react-player';
import { useChannelContext } from '../context/ChannelContext';

const ChannelCard = ({channel}) => {

    const {volume, mute}=useChannelContext();
  return (
   <div className='card'>


    <div className='card-body'>
        <h4 className='card-title'>{channel.name}</h4>
        <h5  className='card-title'>{channel.url}</h5>
        <ReactPlayer
        url={channel.url}  
        controls
        volume={volume}
        muted={mute}
        width='100%'
        height='200px'
        
        />

    </div>

   </div>
  )
}

export default ChannelCard