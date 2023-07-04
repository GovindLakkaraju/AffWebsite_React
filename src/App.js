import React from "react";
import "./App.css";
import AppHeader from "./components-1/AppHeader/HeadIndex";
import SideMenu from "./components-1/SideMenu/SideIndex";
import PageContent from "./components-1/PageContent/PageIndex";
import AppFooter from "./components-1/AppFooter/FooterInedx";
import BarChart from "./components-1/Charts/BarChart";
import Widget from "./components-1/Widgets/Widget";
import LineChart from "./components-1/LineChart/LineChart";
import { DonutCharts } from "./components-1/Donutcharts/DonutCharts";

import { HorizontalBar } from "./components-1/HorizontalBar/HorizontalBar";

import { MyResponsiveLine } from "./components-1/Clicks/Clicks";
import { VerticalBar } from "./components-1/VeticalBar/VerticalBar";
import ClicksImp from "./components-1/LineChart/ClicksImp";
import { TopProducts } from "./components-1/Donutcharts/TopProducts";
import { NGRChart } from "./components-1/HorizontalBar/NGRChart";
import { EstComm } from "./components-1/VeticalBar/EstComm";
import RegLine from "./components-1/LineChart/RegLine";
import KPIWidget from "./components-1/KPIWidget";
import { KPIOptions } from "./components-1/KPI/KPIOptions";
import DropDown from "./components-1/KPI/DropDown";

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="row">
        <div id="left-content">
          {/* <SideMenu></SideMenu> */}
        </div>
        <div id="right-content" className="right-cls">
          <Widget></Widget>
          <div className="container mt-4"><h1>Insights By KPI:</h1></div>
          <div className="container mt-4"
      style={{ backgroundColor: "rgb(243, 243, 243)", padding: "12px" }}>
            <KPIWidget/>
            </div>
            <div className="container mt-4"><h1>Estimated Commissions:</h1></div>
          
          
            <div className="container mt-4" style={{ backgroundColor: "rgb(243, 243, 243)", padding: "12px" }}> 
            <div className="container mt-4" style={{ backgroundColor: "rgb(243, 243, 243)", padding: "12px" }}>   
          <div className="row">
            <div classname="container mt-4" style={{  backgroundColor: "#FFFFFF",width: "400px" , height:"400px", padding: "12px"}}>
              <DonutCharts />
              {/* <BarChart></BarChart> */}
              
            </div>
            <div className="container mt-4" style={{ backgroundColor: "#FFFFFF",width: "600px" , height:"400px", padding: "12px"}}>
              <EstComm/>
            </div>
          </div>
        </div>
          </div>
          <div className="container mt-4"><h1>Clicks & Impressions:</h1></div>
          <div className="container mt-4" style={{ backgroundColor: "rgb(243, 243, 243)", padding: "12px" }}> 
          
          <div className="container mt-4" style={{ backgroundColor: "#FFFFFF"}}>{ <ClicksImp /> }</div>
          </div>

          <div className="container mt-4" style={{ backgroundColor: "rgb(243, 243, 243)", padding: "12px" }}>  
          <div className="container mt-4" style={{ backgroundColor: "rgb(243, 243, 243)", padding: "12px" }}>   
            <div className="row">
            <div classname="container mt-4" style={{ backgroundColor: "#FFFFFF",width: "500px" }}>
           
              {/* <BarChart></BarChart> */}
              <NGRChart />
            </div>
            <div className="container mt-4" style={{ backgroundColor: "#FFFFFF",width: "500px" }}>
              <VerticalBar/>
              {/* <KPIOptions/> */}
              
            </div>
          </div>
          </div>
          </div>
          
        </div>
      </div>
      
      <AppFooter />
    </div>
  );
}
