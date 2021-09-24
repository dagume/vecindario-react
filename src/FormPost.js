import { Avatar, Button } from '@material-ui/core'
import './FormPost.css'
import React from 'react'

function FormPost() {
  return (
    <div className="formpost">
      <form>
        <div className="form_input" >
          <Avatar />
          <input type="text" placeholder="Escribe el nombre"></input>
        </div>
          <textarea className="form_textarea" type="text" rows="5" placeholder="Escribe un comentario"></textarea>
          <input className="form_input_mail" type="email" placeholder="Escribe el correo"></input>
        <Button className="form_button">Publicar post</Button>
      </form>
    </div>
  )
}

export default FormPost
