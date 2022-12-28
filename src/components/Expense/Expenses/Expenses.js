import "./Expenses.css";
import {useState} from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

export default function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const handleFilter = selectedYear => {
        setFilteredYear(selectedYear);
      };

    const filteredExpenses = props.items.filter(expense => {
        return (
            expense.date.getFullYear().toString() === filteredYear
        )
    })

    const expenseElements = filteredExpenses.map(expense => {
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
            <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilter} />
            {expenseElements}
        </Card>
    )
}