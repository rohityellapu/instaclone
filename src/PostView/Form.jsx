import React from 'react'
import { useState } from 'react'
import './Form.css'
import axios from "axios";

const apiURL = "https://instaclone-backend-rndh.onrender.com/post";
function Form({ setForm, postAdded }) {
    let [formData, setFormData] = useState({ name: '', location: '', description: '' })
    let [file, setFile] = useState(null);
    let [validater, setValidator] = useState({ name: false, location: false, description: false, file: false });
    function handleChange(e) {
        const { name, value } = e.target
        if (value === '') {
            setValidator(prev => {
                return { ...prev, [name]: true }
            })
        } else {
            setValidator(prev => {
                return { ...prev, [name]: false }
            })
        }
        setFormData(prev => {
            return { ...prev, [name]: value }
        })
    }
    function handleFile(e) {
        const { files } = e.target;
        if (!files[0]) {
            setValidator(prev => {
                return { ...prev, file: true }
            })
        }
        else {
            setValidator(prev => {
                return { ...prev, file: false }
            })
        }
        setFile(files[0])
    }


    async function handleSubmit(e) {
        e.preventDefault()
        setForm(prev => !prev)
        
        const formDat = new FormData();
        formDat.append('file', file);
        formDat.append('name', formData.name);
        formDat.append('location', formData.location);
        formDat.append('description', formData.description);
        try {
            const response = await axios({
                method: "post",
                url: apiURL,
                data: formDat,
                headers: { "Content-Type": "multipart/form-data" },
            });
            postAdded(prev => prev + 1)
            console.log(response);
        } catch (error) {
            console.log(error)
        }
        


    }
    return (
        <div className='container'>

            <form className='form-container' action="/post" onSubmit={ handleSubmit } method='POST' enctype="multipart/form-data">
                <h2>Let's Post </h2>

                <input className='image m' type="file" onChange={ handleFile } name="image" id="image" required />
                { validater.file && <i>Image is required</i> }
                <div className="name-location">

                    <input className='name m p' onChange={ handleChange } type="text" value={ formData.name } name="name" id="" placeholder='Author' required />
                    { validater.name && <i>Author name is required</i> }
                    <input className='location m p' onChange={ handleChange } type="text" value={ formData.location } name='location' placeholder='Location' required />
                    { validater.location && <i>Location is required</i> }
                </div>

                <input className='description m p' onChange={ handleChange } type="text" value={ formData.description } name='description' placeholder='Description' required />
                { validater.description && <i>Tell us something about it</i> }
                <button className='btn m p'>Post</button>

            </form>
        </div>
    )
}

export default Form