import React, { Fragment } from 'react';
 
import './App.css';

function Comments() {

  const [ description, setDescription] = React.useState("");

  const onSubmitForm = async () => {
  try {
    const body = { description };
    const response = await fetch(`http://localhost:4000/api/v1/add_comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body)
    });

    console.log(response);

  } catch (err) {
    console.error(err)
  }
};


  return (

    <div>
    

    <Fragment>

    <form className='form'>
        <input type='text' placeholder='comment' className='form--input' onChange={(e:any)=> {
          setDescription(e.target.value)
          console.log({description})
        }}/>
        <button className='form--button' onClick={onSubmitForm} >Send</button>


    </form>

    </Fragment>

    </div>

  );

}

export default Comments;




