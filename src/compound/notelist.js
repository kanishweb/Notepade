import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import ModeEdit from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
// import { AddModerator } from "@mui/icons-material";
// import Add from "./compound/add";

function Addlist() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [task1, setTask1] = useState(state);

 

  

  const deleteclick = (index) => {
    task1.splice(index, 1);
    setTask1([...task1]);


    alert("delete");
  };
 


  const View = (item) => {
    navigate("/view", { state: item });
  };
  const handleEdit = (item) => {
    // setName(allData[i])
    // setEditIndex(i)
    navigate("/note", { state: item });
  };


  return (
    <div>
      <div className="plus">
        <AddCircleIcon
          onClick={() => {
            navigate("/note");
          }}
        ></AddCircleIcon>
        <span style={{ color: "#918f8d", display: "block" }}>
          Add Your Note
        </span>
      </div>

      {task1?.length > 0 &&
        task1.map((item, index) => {
          return (
            <div className="listed">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 50 }} aria-label="simple table">
                  <TableHead>
                    <TableRow style={{ backgroundColor: "#cbade6" }}>
                      <TableCell
                        style={{
                          color: "#000",
                          width: 150,
                          fontWeight: "bold",
                        }}
                      >
                        Title
                      </TableCell>
                      <TableCell style={{ color: "#000", fontWeight: "bold" }}>
                        Delete
                      </TableCell>
                      <TableCell style={{ color: "#000", fontWeight: "bold" }}>
                        Edit
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      key={item.title}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        onClick={() => View(item)}
                        component="th"
                        scope="row"
                      >
                        {item.title}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        <Button
                          className="delete"
                          variant="outlined"
                          onClick={() => deleteclick(index)}
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      </TableCell>

                      <TableCell component="th" scope="row">
                        <Button
                          className="edit"
                          variant="outlined"
                          startIcon={<ModeEdit />}
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          );
        })}
    </div>
  );
}

export default Addlist;
