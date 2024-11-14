
import './App.css'
import ChannelProvider from './context/ChannelContext'

import HomePage from './pages/HomePage'

function App() {


  return (
    <ChannelProvider>
    <div className='App'>

     
        <HomePage />

    </div>






    </ChannelProvider>
  )
}

export default App
