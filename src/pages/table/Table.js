import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import {
    deleteFormData, setEditFormData, setFormMode,
} from "../../redux/Slice"
import "./Table.css"


function BasicTable(props) {
  const dispatch = useDispatch();
  const tableData = useSelector(state=>state.form.data)
    console.log(tableData)
  const handleEdit = (data) => {
    dispatch(setEditFormData(data))
    dispatch(setFormMode('edit'))
  }
  const handleDelete = (id) => {
    dispatch(deleteFormData(id));
  }

  
  return (
    <Box className="table-container">
    
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Name</TableCell>
            {/* <TableCell align="center">Password</TableCell> */}
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Height</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">Favourite Food</TableCell>
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.height}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center">{Array.isArray(row.favouriteFood) ? row.favouriteFood.join(', ') : row.favouriteFood }</TableCell>
              <TableCell align="center">
                <EditIcon onClick={()=> handleEdit(row)}></EditIcon>&nbsp;
                <DeleteIcon onClick={()=> handleDelete(row.id)}></DeleteIcon>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className="button">

      <Button  variant="contained" onClick={()=> {
        dispatch(setEditFormData(null));
        dispatch(setFormMode('add'))
        }}>Add Data</Button>
        </Box>
    </Box>
  );
}

export default BasicTable;
