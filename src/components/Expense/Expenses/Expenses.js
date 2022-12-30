import "./Expenses.css";
import {useState} from "react";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

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

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilter} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}