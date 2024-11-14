import ChannelCard from "./ChannelCard"



const ChannelList = ({channels}) => {

  return (
    <div className='row'>
        
    {channels.map(channel => (

     <div key={channel._id} className='col-md-4'>
        <ChannelCard channel={channel}/>
     </div>

    ))}
    
        </div>
  )
}

export default ChannelList

