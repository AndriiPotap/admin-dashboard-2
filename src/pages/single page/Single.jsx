import React from 'react';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidevar/Sidebar';
import Tables from '../../components/table/Tables';
import './single.scss';

const Single = () => {
  return (
    <div className='single'>
    <Sidebar/>
    <div className="singleContainer">
      <Navbar/>

      {/* TOP */}
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://i.pinimg.com/474x/c6/5c/10/c65c108c2cf9383960406b93d58ed396.jpg" alt="" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>

              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue"> janedoe@gmail.com</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue"> +38 099 455 2345</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Adress:</span>
                <span className="itemValue"> Vasylkinska St. 5, Kyiv</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue"> Ukraine</span>
              </div>

            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title ='User Spending (Last 6 Mounths)'/>
        </div>
      </div>

{/* BOTTOM */}
      <div className="bottom">
      <h1 className="title">Last transactions</h1>
        <Tables/>
      </div>
    </div>
    </div>
  )
}

export default Single