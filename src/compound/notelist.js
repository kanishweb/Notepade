import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import ModeEdit from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';


function NoteList() {
  const navigate = useNavigate();
  const notelistdata = JSON.parse(localStorage.getItem("notelist")) || [];
  const [task1, setTask1] = useState(notelistdata?.length > 0 ? notelistdata : []);

  const deleteclick = (index) => {
    task1.splice(index, 1);
    setTask1([...task1]);
    alert('delete');
  };

  const View = (item) => {
    navigate('/note/viewmode', { state: item });
  };
  const handleEdit = (item) => {
    navigate('/note/editmode', { state: item });
  };

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
                        {item.title}
                      </TableCell>
                      <TableCell onClick={() => View(item)}>
                        {item.description}
                      </TableCell>
                      <TableCell colSpan={2}>
                        <ModeEdit onClick={() => handleEdit(item)} />
                        <DeleteIcon onClick={() => deleteclick(index)} />
                      </TableCell>
                    </TableRow>);
                }) : <p>No Data, Click + Button to add data</p>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </div>
  );
}

export default NoteList;
