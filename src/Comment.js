import { Avatar, Button } from '@material-ui/core'
import React from 'react'

function Comment() {

  return (
    <div className="formpost">
      <form >
        <div className="form_input" >
          <Avatar />
          <input name="name" type="text" placeholder="Escribe el titulo" disabled></input>
        </div>
          <textarea name="content" className="form_textarea" type="text" rows="5" placeholder="Escribe un comentario" disabled></textarea>
          <input name="owner_email" className="form_input_mail" type="email" placeholder="Escribe el correo" disabled></input>
        <Button type="button" className="form_button" disabled>Publicar comentario</Button>
      </form>
    </div>
  )
}

export default Comment
