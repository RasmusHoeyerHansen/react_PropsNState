import ExpenseItem, {ExpenseItemProp} from "./Components/ExpenseItem";

function App() {
    const today = new Date();

    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const itemProps: ExpenseItemProp[] = [
        {
            title: "bøh",
            amount: 4,
            day: today.getDate(),
            year: today.getFullYear(),
            month: today.getMonth()
        },
        {
            title: "æv",
            amount: 0,
            day: today.getDate(),
            year: today.getFullYear(),
            month: today.getMonth()
        },
        {
            title: "banan",
            amount: 1,
            day: today.getDate(),
            year: today.getFullYear(),
            month: today.getMonth()
        }
    ]


    return (
        <div>
            <h2>Let's get started!</h2>

            <ExpenseItem  }/>
        </div>
    );
}

export default App;
