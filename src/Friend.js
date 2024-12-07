import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';

const Friend = ({friend,isSelectHandle,isSelect,setAddFriend,deleteFriend}) => {
  const isSelected = isSelect?.id === friend.id;

  function onClickHandle(){
    isSelectHandle(friend);
    setAddFriend(false);
  }

  function onDeleteHandle(){
     deleteFriend(friend.id);
  }

  return (
    <li key={friend.id} className={isSelected ? 'selected':""}>
      <img src={friend.image} alt={friend.name}/>
      <h3>{friend.name}</h3>
      {friend.balance === 0 &&  <p>You and {friend.name} are even</p>}
      {friend.balance > 0 &&   <p className='green'>{friend.name} own you {friend.balance}$</p>}
      {friend.balance < 0 &&  <p className='red'>You own {friend.name} {Math.abs(friend.balance)}$</p>}
      <Button onClick={onClickHandle}>{isSelected?'Close':'Select'}</Button>
      <Button onClick={onDeleteHandle}>Delete</Button>
   </li>
  );
};

export default Friend;