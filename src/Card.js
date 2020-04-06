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

export default function CustomCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Grid style={{marginTop:5,paddingBottom:10}} container spacing={4} >
        <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root} variant="outlined">

            <div style={{display:'flex',paddingLeft:10,position:'relative',
            paddingTop:10,paddingBottom:10,flexDirection:'row',textAlign:'justify'}} >
                
                <div style={{width:50,textAlign: 'left',display: "flex",
                justifyContent:"center",
                            alignItems: "center",height:50,background:"#F39231"}}>
                <FileCopyOutlinedIcon style={{ color:"#ffffff"}} fontSize="medium"></FileCopyOutlinedIcon>
                </div>
    
                <div style={{background:'#ffffff',
                position:'absolute',bottom:10,right:25}}>
                    <p className={classes.cardCategory}>Used Space</p>
                    <h3 className={classes.cardTitle}>
                        49/50 <small>GB</small>
                    </h3>
                </div>
            </div>
            <Divider/>
            <CardContent style={{paddingLeft:20}}>
                <WarningOutlinedIcon size="small" color="secondary" ></WarningOutlinedIcon>
                <text style={{marginLeft:5,marginTop:5,fontSize:12,color:"#9E42B0"}} >
                    Get More Space
                </text>
            </CardContent>
        </Card>
        </Grid>

        <Grid  item xs={12} sm={6} md={3}>
        <Card className={classes.root} variant="outlined">

            <div style={{display:'flex',paddingLeft:10,position:'relative',
            paddingTop:10,paddingBottom:10,flexDirection:'row',textAlign:'justify'}} >
                
                <div style={{width:50,textAlign: 'left',display: "flex",
                justifyContent:"center",
                            alignItems: "center",height:50,background:"green"}}>
                <StoreIcon style={{ color: "white" }} fontSize="medium"></StoreIcon>
                </div>
    
                <div style={{background:'#ffffff',
                position:'absolute',bottom:10,right:25
            }}>
                    <p className={classes.cardCategory}>Revenue</p>
                    <h3 className={classes.cardTitle}>
                    $34,245
                    </h3>
                </div>
            </div>
            <Divider/>
            <CardContent style={{paddingLeft:20}}>
            <DateRangeIcon size="small" style={{ color: "#666666" }} ></DateRangeIcon>
                <text style={{marginLeft:5,marginTop:5,fontSize:12,color:"#666666"}} >
                Last 24 Hours
                </text>
            </CardContent>
        </Card>
        </Grid>

        <Grid  item xs={12} sm={6} md={3}>
        <Card className={classes.root} variant="outlined">

            <div style={{display:'flex',paddingLeft:10,position:'relative',
            paddingTop:10,paddingBottom:10,flexDirection:'row',textAlign:'justify'}} >
                
                <div style={{width:50,textAlign: 'left',display: "flex",
                justifyContent:"center",
                            alignItems: "center",height:50,background:"#E8453A"}}>
                <InfoIcon style={{ color: "white" }} fontSize="medium"></InfoIcon>
                </div>
    
                <div style={{background:'#ffffff',
                position:'absolute',bottom:10,right:25
            }}>
                    <p className={classes.cardCategory}>Fixed Issues</p>
                    <h3 className={classes.cardTitle}>
                    75
                    </h3>
                </div>
            </div>
            <Divider/>
            <CardContent style={{paddingLeft:20}}>
            <LocalOfferIcon size="small" style={{ color: "#666666" }} ></LocalOfferIcon>
                <text style={{marginLeft:5,marginTop:5,fontSize:13,color:"#666666"}} >
                Tracked from Github
                </text>
            </CardContent>
        </Card>
        </Grid>

        <Grid  item xs={12} sm={6} md={3}>
        <Card className={classes.root} variant="outlined">

            <div style={{display:'flex',paddingLeft:10,position:'relative',
            paddingTop:10,paddingBottom:10,flexDirection:'row',textAlign:'justify'}} >
                
                <div style={{width:50,textAlign: 'left',display: "flex",
                justifyContent:"center",
                            alignItems: "center",height:50,background:"#4AB4C8"}}>
                 <TwitterIcon style={{ color: "white" }} fontSize="medium"></TwitterIcon>
                </div>
    
                <div style={{background:'#ffffff',
                position:'absolute',bottom:10,right:25}}>
                    <p className={classes.cardCategory}>Followers</p>
                    <h3 className={classes.cardTitle}>
                    +275
                    </h3>
                </div>
            </div>
            <Divider/>
            <CardContent style={{paddingLeft:20}}>
            <UpdateIcon size="small" style={{ color: "#666666" }}  ></UpdateIcon>
                <text style={{marginLeft:5,marginTop:5,fontSize:13,color:"#666666"}} >
                Just Updated
                </text>
            </CardContent>
        </Card>
        </Grid>
        
        </Grid>
   
  );
}