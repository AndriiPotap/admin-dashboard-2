import React from 'react';
import './sidebar.scss';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top"><span className="logo">drewadmin</span></div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                <p className="title">LISTS</p>
                <li><PersonOutlineIcon className="icon"/><span>Users</span></li>
                <li><StoreIcon className="icon"/><span>Products</span></li>
                <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
                <p className="title">USEFUL</p>
                <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
                <li><NotificationsNoneIcon className="icon"/><span>Notification</span></li>
                <p className="title">SERVICE</p>
                <li><SettingsSystemDaydreamIcon className="icon"/><span>System Health</span></li>
                <li><PsychologyIcon className="icon"/><span>Logs</span></li>
                <li><SettingsApplicationsIcon className="icon"/><span>Setings</span></li>
                <p className="title">USER</p>
                <li><AccountBoxIcon className="icon"/><span>Profile</span></li>
                <li><ExitToAppIcon className="icon"/><span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>

    </div>
  )
}

export default Sidebar