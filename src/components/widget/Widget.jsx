import React from 'react';
import './widget.scss';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {

    let data;

    const amount = 100;
    const diff =20;

    switch(type) {

        case "user": 
        data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: <PersonOutlineIcon className='icon icon-user'/>
        };
        break;

        case "order": 
        data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: <ShoppingCartIcon className='icon icon-order'/>
        };
        break;

        case "earning": 
        data = {
            title: "EARNING",
            isMoney: true,
            link: "View net earnings",
            icon: <MonetizationOnIcon className='icon icon-earning'/>
        };
        break;

        case "balance": 
        data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: <AccountBalanceWalletIcon className='icon icon-balance'/>
        };
        break;

        default:
            break;
    }


  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage negative">
            <KeyboardArrowUpIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget