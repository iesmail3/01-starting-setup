import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  
  //OPTION 1: manage state independently 

  const [enteredTitle,setEnteredTitle] = useState(''); 
  const [enteredDate,setEnteredDate] = useState(''); 
  const [enteredAmount,setEnteredAmount] = useState(''); 
  
    const titleChangeHandler= (event) => { 
        console.log(event.target.value); 
        setEnteredTitle(event.target.value); 
    }

    const dateChangeHandler= (event) => { 
      console.log(event.target.value); 
      // event.target.value always returns String. You have to cast appropriately. 
      setEnteredDate(newDate(event.target.value)); 
  }

  const amountChangeHandler= (event) => { 
    console.log(event.target.value); 
    setEnteredAmount(event.target.value); 


    //OPTION 2 of managing the state is to use a single state like below 

  //   const [userInput,setUserInput] = useState({
  //     enteredTitle:'', 
  //     enteredAmount:'',
  //     eneteredDate:''
  //   }); 

  //   const titleChangeHandler= (event) => { 
  //     setUserInput((prevState)=> {
          //copy the prevstate but override title 
            //return (...prevState,enteredTitle:event.target.value); 
 // })
  // }

    
     


}
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          {/* On change event listens to user's inputs and stores it  */}
          <input type='text' onChange={titleChangeHandler} />
        </div> 
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;