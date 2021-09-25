import { Avatar, Button } from '@material-ui/core'
import React, { useState } from "react";
import './FormPost.css'


function FormPost() {

  const [data, setData] = useState({});

  const handleChange = ({value, name}) => {
    setData({...data, [name]:value})
  }
  function handleSubmit(){
    fetch('https://dry-dusk-90160.herokuapp.com/api/post',{
      method:'POST',
      headers:{'Content-Type' : 'application/json'},
      body:JSON.stringify(data)
    })
    .then(response => { 
      response.json()
      window.location.reload();
    })
  }

  return (
    <div className="formpost">
      <form >
        <div className="form_input" >
          <Avatar />
          <input onChange={({target})=>handleChange(target)} name="name" type="text" placeholder="Escribe el titulo" ></input>
        </div>
          <textarea onChange={({target})=>handleChange(target)} name="content" className="form_textarea" type="text" rows="5" placeholder="Escribe un comentario" ></textarea>
          <input onChange={({target})=>handleChange(target)} name="owner_email" className="form_input_mail" type="email" placeholder="Escribe el correo" ></input>
        <Button type="button" onClick={handleSubmit} className="form_button">Publicar</Button>
      </form>
    </div>
  )
}

export default FormPost
