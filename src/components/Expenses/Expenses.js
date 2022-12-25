import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export default function Expenses(props){

    const expenseElements = props.items.map(expense => {
        return (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
    })

    return (
        <div className="expenses">
            {expenseElements}
        </div>
    )
}