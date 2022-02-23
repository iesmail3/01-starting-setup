import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){ 
    return  (<div>
                <div className='expense-item'>
                     {/* the date value comes from App.js */}
                     <ExpenseDate date={props.date}/>
                </div>
                <div className='expense-item__description'><h2 className='expense-item__description'>{props.title}</h2>
                <div className='expense_item__price'>${props.amount}</div>
                </div> 
    </div>);
}

export default ExpenseItem; 