import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';

const FormSplitBill= ({isSelect,bill,setBill,setYourExpanse,friExpanse,yourExpanse,splitBillsHandle,setWhoPay,whoPay,nowEven}) => {
  
 function onChangeYourExspanse(event){
  const value = event.target.value;
  if(Number(value) <= bill){
    setYourExpanse(value);
  }
 } 

 function handleOnSubmit(event){
  event.preventDefault();
  if(!bill || !yourExpanse) return;
  splitBillsHandle(whoPay === "user" ? friExpanse : -yourExpanse);
  
 }


  return (
     <form className='form-split-bill' onSubmit={handleOnSubmit}> 
       <h2>split a bill with {isSelect.name}</h2>
       <label>🤑Bills Value</label>
       <input type='text' onChange={(e) => Number(setBill(e.target.value))} value={bill}/>

       <label>🧍Your expense</label>
       <input type='text' onChange={onChangeYourExspanse}  value={yourExpanse}/>

       <label>👭{isSelect.name} expense</label>
       <input type='text' disabled value={friExpanse ? friExpanse : bill}/>
       
       <label>🤑Who is paying the bill ?</label>
       <select onChange={(e) => setWhoPay(e.target.value)}>
         <option value="user">You</option>
         <option value={isSelect.name}>{isSelect.name}</option>
       </select>
       <Button onClick={nowEven}>Now Even</Button>
       <Button type="submit">Split Bills</Button>
     </form>
  );
};

export default FormSplitBill;