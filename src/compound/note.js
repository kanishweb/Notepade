import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Navbar from "./MenuAppBar";
import Swal from "sweetalert2";
import Footer from "./footer";

function Add() {
  const { state } = useLocation();
  const { mode } = useParams();
  

  const [title, setTitle] = useState(state?.title ? state.title : "");
  const [description, setDescription] = useState(
    state?.description ? state.description : ""
  );

  const navigate = useNavigate();

  const [listed] = useState([]);

  let disabledmode=false;
  let name ='';
  


  const inputchange = (e) => {
    setTitle(e.target.value);
  };

  const inputmail = (e) => {
    setDescription(e.target.value);
  };

  if(mode ==='viewmode'){
    disabledmode=true;
    name="Close"
  }
  else if(mode==='editmode'){
    name="Save"
  }

  else {
    disabledmode=false;
    name="Add"
  }

  const addclick = (e) => {

    if(mode ==="editmode"){
      const update = [{ id: listed.length + 1,title: title, description: description }];
      navigate('/home',{state:update});
      name="Save"
      disabledmode='false';

    }else if(mode==='viewmode'){
      const view = [{ id: listed.length + 1,title: title, description: description }];
      navigate('/home',{state:view});
      name="Close"
      disabledmode='true';

    }else if(mode ==='addmode'){
      if (title === "") {
        Swal.fire({ icon: "warning", text: "Enter Title" });
      } else if (description === "") {
        Swal.fire({ icon: "warning", text: "Enter Description" });
      } else {
        const added = [{ id: listed.length + 1,title: title, description: description}];
  
        Swal.fire("Thank You!", "Your Entry is Success!", "success");
        navigate('/home', { state:added });
      }
      setTitle('');
      setDescription('');

    }else{

    }

   
  
  };


  const add = (e) => {
    addclick();
  };
 

  return (
    <div>
      <Navbar />
      <div className="slide1">
        <h3 className="h3tx"> CLG School Notepade</h3>
        <div>
          <input
            className="textview2"
            name="title"
            type="text"
            value={title}
            onChange={(e) => inputchange(e)}
            placeholder="Enter your Titel"
            disabled={disabledmode}
            required
          />
          <br />
          <br />
          <textarea
            className="textview2"
            name="description"
            type="text"
            value={description}
            onChange={(e) => inputmail(e)}
            placeholder="Enter your Description"
            required
            data-editor-type="wmd"
            disabled={disabledmode}
            cols="42"
            rows="5"
            tabindex="101"
            data-min-length=""
          ></textarea>
          <br />
          <br />

          <button
            className="exbtn"
            disabled={disabledmode}
            onClick={() => add()}
          >
            {name}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Add;
