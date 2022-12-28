import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

export default function ExpenseItem(props) {

    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item-description'>
          <h2>{props.title}</h2>
          <div className='expense-item-price'>${props.amount}</div>
        </div>
      </Card>
    );
  }
  