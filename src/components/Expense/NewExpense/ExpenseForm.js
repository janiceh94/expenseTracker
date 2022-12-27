import "./ExpenseForm.css";
import {useState} from "react";

export default function ExpenseForm(){
    
    const[formData, setFormData] = useState({
        title: "",
        amount: "",
        date: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="new-expense-controls">
                    <div className="new-expense-control">
                        <label>Title</label>
                        <input 
                            type="text"
                            onChange={handleChange}
                            name="title"
                            value={formData.title}
                        />
                    </div>
                    <div className="new-expense-control">
                        <label>Amount</label>
                        <input 
                            type="number" 
                            min="0.01/" 
                            step="0.01"
                            onChange={handleChange}
                            name="amount"
                            value={formData.amount}
                        />
                    </div>
                    <div className="new-expense-control">
                        <label>Date</label>
                        <input 
                            type="date" 
                            min="2019-01-01" 
                            max="2022-12-31"
                            onChange={handleChange}
                            name="date"
                            value={formData.date}
                        />
                    </div>
                </div>
                <div className="new-expense-actions">
                    <button>Add Expense</button>
                </div>
            </form>
        </div>
    )
}