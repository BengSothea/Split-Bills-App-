import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import InitialFriends from './InitialFriends'
import FriendsList from './FriendsList';
import Button from './Button';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';

const App = () => {
  const [friends,setFriend] = useState(InitialFriends); 
  const [addFriend,setAddFriend] = useState(false);
  const [isSelect,setIselect] = useState(null);
  const [bill,setBill]=useState();
  const [whoPay,setWhoPay] = useState("user");
  const [yourExpanse, setYourExpanse] = useState();
  const friExpanse = bill?  bill - yourExpanse :"";
  


  function isAddFriendClickHandel(){
    setAddFriend( add => !addFriend);
    setIselect(null);
  }
  
  function isSelectHandle(friend){
    setIselect(curFri => curFri?.id === friend.id ? null : friend);
  }

  function addFriendHandle(friend){
    setFriend( prevFri => [...friends,friend]);
  }
   
  function splitBillsHandle(value){
    setFriend((friends) => friends.map((friend) =>
       friend.id === isSelect.id ? {...friend,balance:friend.balance + value} : friend));
    setBill("");
    setYourExpanse("");
    setIselect(null);
  }

  function deleteFriend(id){
    setFriend(friends => {
      return friends.filter(friend => friend.id !== id);
    })
  }
  
   function nowEven(){
    setFriend((friends) => friends.map((friend) => friend.id === isSelect.id ? {...friend,balance:0} : friend));
    setIselect(null);
    setBill("");
    setYourExpanse("");
   }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} isSelectHandle={isSelectHandle} isSelect={isSelect} setAddFriend={setAddFriend} deleteFriend={deleteFriend}/>
        {addFriend ? <FormAddFriend addFriendHandle={addFriendHandle} setAddFriend={setAddFriend}/> : null}
        <Button onClick={isAddFriendClickHandel}>{addFriend ?'Close':'Add Friend'}</Button>
      </div>
      <div>
        {isSelect && <FormSplitBill isSelect={isSelect} bill={bill} setBill={setBill} setWhoPay={setWhoPay} 
        whoPay={whoPay}
        setYourExpanse={setYourExpanse}
        friExpanse={friExpanse}
        yourExpanse={yourExpanse}
        splitBillsHandle={splitBillsHandle}
        nowEven={nowEven}
        />}
      </div>
    </div>
  );
};

export default App;
