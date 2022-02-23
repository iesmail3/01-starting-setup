import ExpenseItem from './ExpenseItem';
function Expenses(props) {
    const expenses = props.expenses;
    return (
        <div className="expenses">
          {expenses.map((exp,i) => (
            <ExpenseItem key={i}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />
          ))}
        </div>
      );
}

export default Expenses;