import "./NewExpense.css";
import ExpenseForm from "../NewExpense/ExpenseForm";

export default function NewExpense(props){

    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={handleSaveExpenseData}/>
        </div>
    )
}