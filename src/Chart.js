import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import WarningOutlinedIcon from '@material-ui/icons/WarningOutlined';
import Grid from "@material-ui/core/Grid";

import DateRangeIcon from '@material-ui/icons/DateRange';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import UpdateIcon from '@material-ui/icons/Update';
import StoreIcon from '@material-ui/icons/Store';
import InfoIcon from '@material-ui/icons/Info';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Chart } from 'react-charts'
import ChartistGraph from "react-chartist";


import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color:'#9E42B0',
    textColor:'#9E42B0',
  },
  pos: {
    marginBottom: 12,
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
  ,
  cardCategoryWhite: {
    color: "#ffffff",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: '#000000',
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "200",
    fontSize:17,
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: '#666666',
      fontWeight: "200",
      lineHeight: "1",
      fontSize:17,
    }
  },
  cardCategory:{
    color: '#666666',
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "200",
    fontSize:13,
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: '#666666',
      fontWeight: "200",
      lineHeight: "1",
      fontSize:13,
    }
  },
  cardTitleWhite: {
    color: '#ffffff',
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: '#666666',
      fontWeight: "400",
      lineHeight: "1"
    }
  }
});

export default function CustomChart() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;
  const Chartist = require("chartist");
  const dailySalesChart = {
    data: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      series: [[10, 15, 20, 25, 27, 30, 35]]
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
        showArea: true,
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    // for animation
    animation: {
      draw: function(data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                .clone()
                .scale(1, 0)
                .translate(0, data.chartRect.height())
                .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };


const emailsSubscriptionChart = {
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
    },
    options: {
      axisX: {
        showGrid: true
      },
      low: 0,
      high: 1000,
      chartPadding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 0
      }
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }
      ]
    ],
    animation: {
      draw: function(data) {
        if (data.type === "bar") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };
  
  // ##############################
  // // // Completed Tasks
  // #############################
  
  const completedTasksChart = {
    data: {
      labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
      series: [[230, 750, 450, 300, 280, 240, 200, 190]]
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    animation: {
      draw: function(data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                .clone()
                .scale(1, 0)
                .translate(0, data.chartRect.height())
                .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };

  return (

    <Grid style={{paddingBottom:10,marginTop:10}} container spacing={3} >
        <Grid  item xs>
        
        <Card chart className={classes.root} variant="outlined">

        <div style={{paddingLeft:20,paddingTop:10,paddingRight:20,
        flexDirection:'coloumn',display:'flex',
                }}>
            <div style={{padding:10,background:"green"}} >
                <ChartistGraph
                    style={{color:'white', fontSize: '10px',
                    fontFamily:'sans-serif',stroke:'#EEEEEE',strokeWidth: '1',
                    strokeDasharray: '1px 1px',
                    }}
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                />

            </div>
        </div>    
        <div style={{paddingTop:20,
                    paddingLeft:15,flexDirection:'column'}}>

                    <p  style={{fontSize:16,marginLeft:10,color:'black'}}>Daily Sales</p>
                    <div style={{display:'flex',marginLeft:3,flex:1,flexDirection:'row'}}>
                        <ArrowUpwardIcon style={{ color: "green",paddingBottom:2 }} fontSize="small" ></ArrowUpwardIcon>
                        <h3 style={{paddingTop:2,marginLeft:5,fontSize:14,color:'green'}}>55%</h3>
                        <h3 style={{paddingTop:2,marginLeft:5,fontSize:14,color:"#666666"}}>increase in today sales</h3>
                    </div>
                    
                </div>

        <Divider/>
        <CardContent style={{paddingLeft:15}}>
            <UpdateIcon size="small" style={{ color: "#666666" }}  ></UpdateIcon>
                <text style={{marginLeft:10,marginTop:5,fontSize:13,color:"#666666"}} >
                updated 4 minutes ago
                </text>
            </CardContent>
        </Card>
        </Grid>

        <Grid  item xs>
        
        <Card chart className={classes.root} variant="outlined">
        <div style={{paddingRight:20,paddingLeft:20,paddingTop:10,
        flexDirection:'coloumn',display:'flex',
                }}>
            <div style={{padding:10,background:"#F39231"}} >
            <ChartistGraph
             style={{color:'white', fontSize: '10px',
             fontFamily:'sans-serif',stroke:'white',strokeWidth:5,
             
             }}
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </div>
        </div>    
        <div style={{paddingTop:20,
                    paddingLeft:15,flexDirection:'column'}}>

                    <p  style={{fontSize:16,marginLeft:10,color:'black'}}>Email Subscriptions</p>
                    <div style={{display:'flex',marginLeft:3,flex:1,flexDirection:'row'}}>
                        <h3 style={{paddingTop:2,marginLeft:5,fontSize:14,color:"#666666"}}>Last Campaign Performance</h3>
                    </div>
                    
                </div>

        <Divider/>
        <CardContent style={{paddingLeft:15}}>
            <UpdateIcon size="small" style={{ color: "#666666" }}  ></UpdateIcon>
                <text style={{marginLeft:10,marginTop:5,fontSize:13,color:"#666666"}} >
                campaign sent 2 days ago
                </text>
            </CardContent>
        </Card>
        </Grid>

        <Grid  item xs>
        
        <Card chart className={classes.root} variant="outlined">

        <div style={{paddingRight:20,paddingLeft:20,paddingTop:10,
        flexDirection:'coloumn',display:'flex',
                }}>
            <div style={{padding:10,background:"#E8453A"}} >
            <ChartistGraph
             style={{color:'white', fontSize: '10px',
             fontFamily:'sans-serif'
             }}
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />

            </div>
        </div>    
        <div style={{paddingTop:20,
                    paddingLeft:15,flexDirection:'column'}}>

                    <p  style={{fontSize:16,marginLeft:10,color:'black'}}>Completed Task</p>
                    <div style={{display:'flex',marginLeft:3,flex:1,flexDirection:'row'}}>
                        
                        <h3 style={{paddingTop:2,marginLeft:5,fontSize:14,color:'green'}}></h3>
                        <h3 style={{paddingTop:2,marginLeft:5,fontSize:14,color:"#666666"}}>Last Compaign Performance</h3>
                    </div>
                    
                </div>

        <Divider/>
        <CardContent style={{paddingLeft:15}}>
            <UpdateIcon size="small" style={{ color: "#666666" }}  ></UpdateIcon>
                <text style={{marginLeft:10,marginTop:5,fontSize:13,color:"#666666"}} >
                campaign sent 2 days ago
                </text>
            </CardContent>
        </Card>
        </Grid>
        </Grid>
   
  );
}