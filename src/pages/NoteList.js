import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import ModeEdit from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Swal from 'sweetalert2';

function NoteList() {
  const navigate = useNavigate();
  // Get notelist from Local storage
  var notelistdata = JSON.parse(localStorage.getItem("notelist")) || [];
  const [task1, setTask1] = useState(notelistdata?.length > 0 ? notelistdata : []);
  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    arr.splice(objWithIdIndex, 1);

    return arr;
  }
  const deleteclick = (id) => {
    var finaldata = removeObjectWithId(notelistdata, id)
    localStorage.setItem("notelist", JSON.stringify([...finaldata]))
    setTask1([...finaldata]);
    alert('delete');
  };

  const View = (item) => {
    navigate('/note/viewmode', { state: item });
  };
  const handleEdit = (item) => {
    navigate('/note/editmode', { state: item });
  };
  const updateStatus = (id) => {
    var findIndex = notelistdata.findIndex((item) => item.id === id)
    notelistdata[findIndex].status = 'done';
    setTask1([...notelistdata])
    localStorage.setItem("notelist", JSON.stringify([...notelistdata]))
    Swal.fire('Good job!', 'Your Task is done !', 'success');

  }
  return (
    <div>
      <div className="plus">
        <AddCircleIcon
          onClick={() => {
            navigate('/note/addmode');
          }}
        ></AddCircleIcon>
        <span style={{ color: '#918f8d', display: 'block' }}>Add Your Note</span>
      </div>
      <div className="listed">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#cbade6' }}>
                <TableCell style={{ color: '#000', width: 150, fontWeight: 'bold' }}>
                  ID
                </TableCell>
                <TableCell style={{ color: '#000', width: 150, fontWeight: 'bold' }}>
                  Title
                </TableCell>
                <TableCell style={{ color: '#000', width: 150, fontWeight: 'bold' }}>
                  Details
                </TableCell>
                <TableCell style={{ color: '#000', fontWeight: 'bold' }} colSpan={2}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {task1?.length > 0 ?
                task1.map((item, index) => {
                  return (
                    <TableRow key={index} >
                      <TableCell onClick={() => View(item)}>
                        {item.id}
                      </TableCell> <TableCell onClick={() => View(item)}>
                        {item.title}
                      </TableCell>
                      <TableCell onClick={() => View(item)}>
                        {item.status === 'todo' ? item.description : <s>{item.description}</s>}
                      </TableCell>
                      <TableCell colSpan={2}>
                        <ModeEdit onClick={() => handleEdit(item)} />
                        <DeleteIcon onClick={() => deleteclick(item.id)} />

                        {item.status === 'todo' ? <PublishedWithChangesIcon onClick={() => updateStatus(item.id)} /> : <TaskAltIcon />}
                      </TableCell>
                    </TableRow>);
                }) :
                <TableRow colSpan={4} style={{ textAlign: 'center' }}>
                  <center>No Data, Click + Button to add data</center></TableRow>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </div>
  );
}

export default NoteList;
