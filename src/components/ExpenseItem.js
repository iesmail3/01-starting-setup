import './ExpenseItem.css'; 

function ExpenseItem() {
  const date = new Date(); 
  const expenseAmount = 12.3; 
  const expenseItem = 'Shoes'; 
  return (
    <div className='expense-item'>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseItem}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
