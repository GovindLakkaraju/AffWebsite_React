import { React, useState } from "react";
import Card from "react-bootstrap/Card";

import "./Widget.css";
import LineChart from "../LineChart/LineChart";

const Widget = ({ data }) => {
  const [widgetData, setWidgetData] = useState([
    {
      name: "Clicks",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 123456,
      color: "#000000",
    },
    {
      name: "Impresions",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 1234,
      color: "#000000",
    },
    {
      name: "Registrations ",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 2321,
      color: "#000000",
    },
    {
      name: "Sports NGR",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 19082,
      color: "#000000",
    },
    {
      name: "Casino NGR",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 5000,
      color: "#000000",
    },
    {
      name: "Poker NGR",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 2000,
      color: "#000000",
    },
    {
      name: "Total NGR",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 324,
      color: "#000000",
    },
    {
      name: "First Impressions",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 234,
      color: "#000000",
    },
    {
      name: "Qualified Players",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 212,
      color: "#000000",
    },
    {
      name: "Est Commission",
      // class: 'fa fa-users',
      // img: "https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png",
      count: 1234,
      color: "#000000",
    },
    // {
    //   name: "Drivers",
    //   //   class: 'fa fa-car',
    //   img: "https://cdn-icons-png.flaticon.com/128/4900/4900915.png",
    //   count: 5000,
    //   color: "blue",
    // },
    // {
    //   name: "Orders In Progress",
    //   //   class: 'fa fa-cog',
    //   img: "https://cdn.iconscout.com/icon/premium/png-256-thumb/order-in-progress-3397327-2834007.png?f=webp&w=256",
    //   count: 1200,
    //   color: "orange",
    // },
    // {
    //   name: "Completed Orders",
    //   //   class: 'fa fa-cog',
    //   img: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
    //   count: 1000,
    //   color: "green",
    // },
    // {
    //   name: "Failed Orders",
    //   //   class: 'fa fa-cog',
    //   img: "https://cdn.iconscout.com/icon/free/png-256/disc-error-2889073-2464079.png",
    //   count: 300,
    //   color: "red",
    // },
  ]);

  return (
    <div
      className="container mt-4"
      style={{ backgroundColor: "rgb(243, 243, 243)", padding: "12px" }}
    >
      <div className="row widgets">
        {widgetData &&
          widgetData.map((item) => {
            return (
              <div className="col-md-2" style={{ paddingLeft: "0px" }}>
                <Card>
                  <Card.Body className="">
                    <Card.Text>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            color: item.color,
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                        >
                          {item.name}
                        </span>
                        {/* <br /> */}
                        <span className="countname">{item.count}</span>
                      </div>
                    </Card.Text>
                    {/* <Card.Text> */}
                    {/* <img
                        src={item.img}
                        alt="img"
                        style={{
                          width: "40px",
                          marginBottom: "20px",
                          alignSelf: "center",
                        }}
                      /> */}
                    {/* <br />
                      <span className="countname">{item.count}</span>
                      <br />
                    </Card.Text> */}

                    {/* <Card.Text> */}
                    {/* </Card.Text> */}
                    <LineChart />
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Widget;
