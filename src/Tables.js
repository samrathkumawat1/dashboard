import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import SimpleTable from "./SimpleTable";

export default function Tables(props){
  const { container } = props;
  return (
      <div style={{display:'flex',flexDirection:'column',flex:'1',background:"#EEEEEE"}}>
        <SimpleTable/>
        </div>

  );
}
