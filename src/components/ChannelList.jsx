import { useState } from "react";
import ChannelCard from "./ChannelCard"



const ChannelList = ({channels}) => {
  const [chan, setChan] = useState({channels: channels});
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  console.log(channels)
  const searcher = (e) => {
    const searchTerm= e.target.value.toLowerCase();
    setSearch(searchTerm);
  
    const chanfiltered= chan.filter(cha=> 
    cha.name.toLowerCase().includes(searchTerm)||
    cha.pentaNumber.toString().includes(searchTerm)
  

    );
    setResults(searchTerm.trim === ""? channels: chanfiltered)
    console.log(results)
  };

  return (
    <div className='row'>
        <div>
        <input style={{textAlign:"center"}} value={search} onChange={searcher} type="text" placeholder='Buscar Canal' className='form-control' />
      </div>
    {channels.map(channel => (

     <div key={channel._id} className='col-md-4'>
        <ChannelCard channel={channel}/>
     </div>

    ))}
    
        </div>
  )
}

export default ChannelList

