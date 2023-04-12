import { BiHome } from 'react-icons/bi';
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from  "react-icons/md";
import { AiOutlineHistory } from 'react-icons/ai';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './menubar.scss'
import { YoutubeContext } from '../../useCustoms/useData';

const MenuBar = () => {

  const {burger} = useContext(YoutubeContext);

  const [find, setFind]= useState("");

  const findPath = ()=>{
    console.log();
  }

  return (
      <div className='menubar'>
        <div className='d-sm-block d-none'>
          {
            !burger ? 
            (<ul className='menu'>
              <NavLink to="/">
                <BiHome/>
                <span>Home</span>
              </NavLink>
              <NavLink to="/shorts">
                <AiOutlineFire/>
                <span>Trending</span>
              </NavLink>
              <NavLink to="/subscription">
                <MdOutlineSubscriptions/>
                <span>Subscriptions</span>
              </NavLink>
              <NavLink to="/library">
                <MdOutlineVideoLibrary/>
                <span>Library</span>
              </NavLink>
            </ul>) : 
            (<ul className='menu2'>
              <NavLink to="/">
                <BiHome/> <span>Home</span>
              </NavLink>
              <NavLink to="/shorts">
                <AiOutlineFire/>
                <span>Trending</span>
              </NavLink>
              <NavLink to="/subscription">
                <MdOutlineSubscriptions/>
                <span>Subscriptions</span>
              </NavLink>
              <hr />
              <NavLink to="/library">
                <MdOutlineVideoLibrary/>
                <span>Library</span>
              </NavLink>
              <NavLink to="/history">
                <AiOutlineHistory/>
                <span>History</span>
              </NavLink>
              <NavLink to="/watchlater">
                <MdOutlineWatchLater/>
                <span>Watch Later</span>
              </NavLink>
              <NavLink to="/liked">
                <AiOutlineLike/>
                <span>Liked</span>
              </NavLink>
          </ul>)
          } 
        </div>
          <ul className='menu3 d-sm-none d-flex'>
              <NavLink to="/">
                <BiHome/>
                <span>Home</span>
              </NavLink>
              <NavLink to="/shorts">
                <AiOutlineFire/>
                <span>Trending</span>
              </NavLink>
              <NavLink to="/subscription">
                <MdOutlineSubscriptions/>
                <span>Subscriptions</span>
              </NavLink>
              <NavLink to="/library">
                <MdOutlineVideoLibrary/>
                <span>Library</span>
              </NavLink>
          </ul>
      </div>
  )
}

export default MenuBar;