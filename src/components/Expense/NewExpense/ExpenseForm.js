import "./ExpenseForm.css";
import {useState} from "react";

export default function ExpenseForm(props){
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value);
        };

    const handleAmount = (e) => {
        setAmount(e.target.value);
        };

    const handleDate = (e) => {
        setDate(e.target.value);
        };

    const handleSubmit = (e) => {
        e.preventDefault();

    const expenseData = {
        title: title,
        amount: amount,
        date: new Date(date),
    };

        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="new-expense-controls">
                    <div className="new-expense-control">
                        <label>Title</label>
                        <input 
                            type="text"
                            onChange={handleTitle}
                            value={title}
                        />
                    </div>
                    <div className="new-expense-control">
                        <label>Amount</label>
                        <input 
                            type="number" 
                            min="0.01" 
                            step="0.01"
                            onChange={handleAmount}
                            value={amount}
                        />
                    </div>
                    <div className="new-expense-control">
                        <label>Date</label>
                        <input 
                            type="date" 
                            min="2019-01-01" 
                            max="2022-12-31"
                            onChange={handleDate}
                            value={date}
                        />
                    </div>
                </div>
                <div className="new-expense-actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button>Add Expense</button>
                </div>
            </form>
        </div>
    )
}