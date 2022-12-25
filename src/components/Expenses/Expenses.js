import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

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
        <Card className="expenses">
            {expenseElements}
        </Card>
    )
}