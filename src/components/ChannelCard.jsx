import ReactPlayer from 'react-player';
import { useChannelContext } from '../context/ChannelContext';

const ChannelCard = ({ channel }) => {
  const { volume, mute } = useChannelContext();

  return (
    <div className="card shadow-lg rounded-3 mb-4">
      <div className="card-body">
        <h4 className="card-title text-center">{channel.name}</h4>
        <p className="card-text text-muted text-center">{channel.url}</p>
        
        {/* ReactPlayer for streaming the channel */}
        <div className="player-wrapper">
          <ReactPlayer
            url={channel.url}
            controls
            volume={volume}
            muted={mute}
            width="100%"
            height="200px"
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload', // Disable download controls if desired
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
