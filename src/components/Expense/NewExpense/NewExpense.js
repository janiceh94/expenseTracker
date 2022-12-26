import "./NewExpense.css";

export default function NewExpense(){

    const titleHandleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="new-expense">
            <form>
                <div className="new-expense-controls">
                    <div className="new-expense-control">
                        <label>Title</label>
                        <input 
                            type="text"
                            onChange={titleHandleChange}
                        />
                    </div>
                    <div className="new-expense-control">
                        <label>Amount</label>
                        <input 
                            type="number" 
                            min="0.01/" 
                            step="0.01"
                        />
                    </div>
                    <div className="new-expense-control">
                        <label>Date</label>
                        <input 
                            type="date" 
                            min="2019-01-01" 
                            max="2022-12-31"
                        />
                    </div>
                </div>
                <div className="new-expense-actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}