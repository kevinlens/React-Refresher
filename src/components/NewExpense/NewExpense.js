import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // Save newly added item
  const saveExpenseDataHandler = (eventData) => {
    const expenseData = {
      ...eventData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  // Open Form
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // Close Form
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
