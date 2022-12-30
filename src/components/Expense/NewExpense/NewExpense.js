import "./NewExpense.css";
import {useState} from "react";
import ExpenseForm from "../NewExpense/ExpenseForm";

export default function NewExpense(props){

    const[isEditing, setIsEditing] = useState(false);

    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const handleEditing = () => {
        setIsEditing(true);
    }
    const handleStopEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={handleEditing}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm 
                    onSaveExpenseData={handleSaveExpenseData}
                    onCancel={handleStopEditing}
                />
            )}
        </div>
    )
}