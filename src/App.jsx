
import './App.css'
import ChannelProvider from './context/ChannelContext'
import VolumeControl from './components/VolumeControl'
import HomePage from './pages/HomePage'

function App() {


  return (
    <ChannelProvider>
    <div className='App'>

        <VolumeControl/>
        <HomePage />

    </div>






    </ChannelProvider>
  )
}

export default App
