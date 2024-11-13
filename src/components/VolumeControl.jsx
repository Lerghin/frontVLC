import { useChannelContext } from "../context/ChannelContext";


const VolumeControl = () => {

    const { volume, setVolume, mute, setMute } = useChannelContext();
    const handleVolumeChange = (volume)=> {
        setVolume(volume.target.value);
    }

    const handleMuteToggle = () => {
        setMute(!mute);
    }
  
    return (
    <div className="volume-control">
        <button onClick={handleMuteToggle}>
        {mute ? "Desmutear" : "Mutear"}

        </button>
        <input type="range" 
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
        disabled={mute}        
        
        />






    </div>
  )
}

export default VolumeControl