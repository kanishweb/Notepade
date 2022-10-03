import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

function Note() {
	const { state } = useLocation();
	//Get Params
	const { mode } = useParams();
	const [title, setTitle] = useState(state?.title ? state.title : '');
	const [description, setDescription] = useState(state?.description ? state.description : '');
	const navigate = useNavigate();

	const inputchange = (e) => {
		setTitle(e.target.value);
	};

	const inputmail = (e) => {
		setDescription(e.target.value);
	};
	

	const submit = () => {
		if (title === '') {
			Swal.fire('The Internet?', 'Enter your Title', 'question');
		} else if (description === '') {
			Swal.fire('The Internet?', 'Enter your Description', 'question');
		} else {
			// Get Stored data
			let notelistdata = JSON.parse(localStorage.getItem("notelist"))

			if (mode === "addmode") {
				// Check for existance
				if (notelistdata?.length > 0) {
					// Store append data with previous value
					localStorage.setItem("notelist", JSON.stringify([...notelistdata, { id: notelistdata.length + 1, title: title, description: description, status: 'todo' }]))
				}
				else {
					// Store first append data 
					localStorage.setItem("notelist", JSON.stringify([{ id: 1, title: title, description: description, status: 'todo' }]))
				}
				// const tempre = [{ id: listed.length + 1, title: title, description: description }];
				Swal.fire('Good job!', 'Your Entry is Success!', 'success');
				navigate('/home');
			}
			else if (mode === "editmode") {
				var findIndex = notelistdata.findIndex((item) => item.id === state.id)
				notelistdata[findIndex].title = title;
				notelistdata[findIndex].description = description;
				localStorage.setItem("notelist", JSON.stringify([...notelistdata]))
				Swal.fire('Good job!', 'Your Entry is updated Success!', 'success');
				navigate('/home');
			}
			else if (mode === "viewmode") {
				navigate('/home');
				
			}
		}

		setTitle('');
		setDescription('');
	};

	return (
		<div>
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
						disabled={{
							'viewmode': true,
							'addmode': false,
							'editmode': false
						}[mode]}
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
						cols="42"
						rows="5"
						tabindex="101"
						data-min-length=""
						disabled={{
							'viewmode': true,
							'addmode': false,
							'editmode': false
						}[mode]}
					></textarea>
					<br />
					<br />
					{console.log(mode + "888")}
					<button className="exbtn" onClick={() => submit()}>
						{/* Switch for params */}
						{{
							'viewmode': 'Close',
							'addmode': 'Add',
							'editmode': 'Update'
						}[mode]}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Note;
