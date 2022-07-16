import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  // Set the selected year
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // Filter and Display items
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
