import React from 'react';
import './navbar.scss';

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ViewListIcon from '@mui/icons-material/ViewList';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>

        <div className="items">

          <div className="item">
          <LanguageIcon className='icon'/>
          English
          </div>

          <div className="item">
          <ModeNightIcon className='icon'/>
          </div>

          <div className="item">
          <FullscreenExitIcon className='icon'/>
          </div>

          <div className="item">
          <NotificationsIcon className='icon'/>
          <div className="counter">1</div>
          </div>

          <div className="item">
          <ChatIcon className='icon'/>
          <div className="counter">2</div>

          </div>

          <div className="item">
          <ViewListIcon className='icon'/>
          </div>

          <div className="item">
          <img className='avatar'
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DLuBDtz2945mZR71wAT0WSkktlbwpF3chZ8omSwo5km6q6NfxZDKtx5TXWcrWz-rZDA&usqp=CAU" 
           alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar