import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SimpleModal from "./UserModal";

const useStyles = makeStyles({
  table: {
    display: "flex",
  },
});

export default function BasicTable({ ra }) {
  const classes = useStyles();
  console.log(ra);

  if (ra.length === 0) {
    return <h2>LOADING</h2>;
  } else {
    return (
      <TableContainer component={Paper} pageSize={10}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className={classes.table}>
              <TableCell>PROFILE IMAGE</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>CITY</TableCell>
              <TableCell>STATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ra.map((row) => (
              <TableRow key={row.login.uuid}>
                <SimpleModal row={row}>
                  <TableCell component="th" scope="row">
                    <img src={row.picture.thumbnail} alt=""></img>
                  </TableCell>
                  <TableCell align="right">{row.name.first}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.location.city}</TableCell>
                  <TableCell align="right">{row.location.state}</TableCell>
                </SimpleModal>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
