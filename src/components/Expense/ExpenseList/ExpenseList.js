import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export default function ExpenseList(props){

    if(props.items.length === 0){
            return (
                <h2 className="expenses-list-fallback">
                    Found no expenses
                </h2>
            )
        }


    return (
        <div>
            <ul className='expenses-list'>
                {props.items.map(expense => (
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                ))}
             </ul>
        </div>
    )
}