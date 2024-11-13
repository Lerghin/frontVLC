import  { createContext, useContext, useState } from 'react'

const ChannelContext = createContext()
export const useChannelContext= () => useContext(ChannelContext);

const ChannelProvider = ({ children }) => {
    const [channels, setChannels] = useState([]);
    const [volume, setVolume] = useState(0.1);
    const [mute, setMute] = useState(true);
    return (

     <ChannelContext.Provider value={{channels,setChannels,volume,setVolume, mute, setMute}}>
    {children} 

     </ChannelContext.Provider>
     
    )
}

export default ChannelProvider;