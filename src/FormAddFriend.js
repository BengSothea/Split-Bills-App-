import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';
const FormAddFriend = ({addFriendHandle,setAddFriend}) => {
  const [name,setName] = useState();
  const [image,setImage]= useState("https://i.pravatar.cc/48?u=499476");

  function onSubmitHandle(event){
    event.preventDefault()
    const id = crypto.randomUUID();
    const newFriend ={
      id,
      name,
      image: `${image}=${id}` ,
      balance: 0,
    }
    addFriendHandle(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=499476");
    setAddFriend(false);
  }

  return (
      <form className='form-add-friend' onSubmit={onSubmitHandle}>
        <label>👭Friend name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} value={name}/>

        <label>🌆URL Image:</label>
        <input type='url' onChange={(e) => setImage(e.target.value)} value={image} />
        <Button type="submit"  >Submit</Button>
      </form>
  );
};

export default FormAddFriend;