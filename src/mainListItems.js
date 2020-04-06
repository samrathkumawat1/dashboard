import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import React from 'react';

export const mainListItems=(
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText disableTypography style={{fontFamily:'sans-serif',
                        fontSize:14,color:'#666666'}} primary="Dashboard" />
      </ListItem>

      <ListItem button
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText disableTypography style={{fontFamily:'sans-serif',
                        fontSize:14,color:'#666666'}} primary="Orders" />
      </ListItem>
      <ListItem button
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText disableTypography style={{fontFamily:'sans-serif',
                        fontSize:14,color:'#666666'}} primary="Customers" />
      </ListItem>
      <ListItem button 
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText disableTypography style={{fontFamily:'sans-serif',
                        fontSize:14,color:'#666666'}} primary="Reports" />
      </ListItem>
      <ListItem button
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText disableTypography style={{fontFamily:'sans-serif',
                        fontSize:14,color:'#666666'}} primary="Integrations" />
      </ListItem>
    </div>
);
