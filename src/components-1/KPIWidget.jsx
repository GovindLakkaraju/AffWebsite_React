import React from 'react'
import RegLine from './LineChart/RegLine'
import { TopProducts } from './Donutcharts/TopProducts'
import { HorizontalBar } from './HorizontalBar/HorizontalBar'
import Card from "react-bootstrap/Card";
import { KPIOptions } from './KPI/KPIOptions';
import DropDown from './KPI/DropDown';

function KPIWidget() {
  return (
    <div >
        
       <DropDown/>
      
     <div className="container mt-4" style={{ backgroundColor: "rgb(243, 243, 243)", padding: "12px" }}>

     
        <div className="row" style={{  backgroundColor: "#FFFFFF" }}>
        
           <RegLine/>
          
        </div>
      <div className="row">
         
            <div className="container mt-4" style={{ width: "600px" ,height:"400px", backgroundColor: "#FFFFFF" }}>
              {/* <BarChart></BarChart> */}
             
              <HorizontalBar />
              
            </div>
            
        
            <div className="container mt-4" style={{ width: "400px",height:"400px",backgroundColor: "#FFFFFF" }}>
              {/* <BarChart></BarChart> */}
            
              <TopProducts />
             
            </div>
           
            </div>
            </div>
    </div>
  )
}

export default KPIWidget
