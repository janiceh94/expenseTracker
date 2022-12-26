import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";

export default function Expenses(props){

    const expenseElements = props.items.map(expense => {
        return (
            <ExpenseItem
                key={expense.id}
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