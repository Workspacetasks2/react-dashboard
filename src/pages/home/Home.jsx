import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbr from "../../components/Navbar/Navbr";
import Sidebar from "../../components/Sidebar/Sidebar";
import List from "../../components/table/Table";
import Widgets from "../../components/widgets/Widgets";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="Home">
        <Sidebar />
        <div className="homeContainer">
          <Navbr />
          <div className="widgets">
            <Widgets type="order" />
            <Widgets type="user" />
            <Widgets type="earnings" />
            <Widgets type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart />
          </div>
          <div className="listContainer">
            <div className="listitle">Latest Transactions</div>
            <List />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
