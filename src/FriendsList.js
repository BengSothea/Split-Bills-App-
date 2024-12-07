import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';
import Friend from './Friend';

const FriendsList= ({friends,isSelectHandle,isSelect,setAddFriend,deleteFriend}) => {
  return (
    <div >
       <ul>
          {friends.map(friend =>{
            return (
              <Friend friend={friend} isSelectHandle={isSelectHandle} isSelect={isSelect} setAddFriend={setAddFriend} deleteFriend={deleteFriend}/>
            )
          })}
       </ul>
    </div>
  );
};

export default FriendsList;