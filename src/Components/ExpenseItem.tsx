import "./ExpenseItem.css"

export type ExpenseItemProp = {
    title: string;
    amount: number;
} & ExpenseDateProps

function ExpenseItem(props: ExpenseItemProp): JSX.Element {
    return (
        <div className="expense-item">
            <div>DATE:   </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">
                {props.amount}
            </div>
        </div>
    );
}

type ExpenseDateProps = {
    day : number;
    month :number;
    year : number;
}
function ExpenseDate (props: ExpenseDateProps) {
    const today = new Date();
    today.toLocaleString('da', {year: 'numeric', month: '2-digit', day: '2-digit'})


}

export default ExpenseItem;


