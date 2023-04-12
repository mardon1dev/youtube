import Header from './assets/components/Header/Header';
import Main from './assets/components/Main/Main';
import MenuBar from './assets/components/MenuBar/MenuBar';
import Shorts from './assets/components/Shorts/Shorts';
import Subscription from './assets/components/Subscription/Subscription';
import Library from './assets/components/Library/Library';
import Functions from './assets/Functions/Functions';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import History from './assets/components/History/History';
import Watchlater from './assets/components/WatchLater/Watchlater';
import Liked from './assets/components/Liked/Liked';

function App() {

  return (
    <div className='app'>
      <Header/>
      <div className='container' style={{paddingTop: "80px"}}>
          <div className='d-flex'>
            <MenuBar/>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/:title' element={<Functions/>}/>
              <Route path='/shorts' element={<Shorts/>}/>
              <Route path='/subscription' element={<Subscription/>}/>
              <Route path='/library' element={<Library/>}/>
              <Route path='/history' element={<History/>}/>
              <Route path='/watchlater' element={<Watchlater/>}/>
              <Route path='/liked' element={<Liked/>}/>
            </Routes>
          </div>
      </div>
    </div>
  )
}

export default App;
