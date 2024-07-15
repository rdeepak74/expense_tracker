import { useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './components/expenseData'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  // const [expense, setExpense] = useState([])
  const [expense, setExpense] = useLocalStorage('expense', expenseData)
  const [expensevalue, setExpenseValue] = useState({
    title: '',
    category: '',
    amount: '',
  })
  const [edit, setEdit] = useState('')
  // console.log(expense)

  // useEffect(() => {
  //   const expense1 = JSON.parse(localStorage.getItem('expense'))
  //   if (expense1 && expense1.length > 0) {
  //     // alert(1)
  //     setExpense(expense1)
  //   } else {
  //     localStorage.setItem('expense', JSON.stringify(expenseData))
  //     setExpense(expenseData)
  //   }
  // }, [])

  // useEffect(() => {
  //   // alert(2)
  //   if (expense.length > 0) {
  //     localStorage.setItem('expense', JSON.stringify(expense))
  //   }
  // }, [expense])

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            expense={expense}
            setExpense={setExpense}
            expensevalue={expensevalue}
            setExpenseValue={setExpenseValue}
            edit={edit}
            setEdit={setEdit}
          />
          <ExpenseTable
            expense={expense}
            setExpense={setExpense}
            expensevalue={expensevalue}
            setExpenseValue={setExpenseValue}
            setEdit={setEdit}
          />
        </div>
      </main>
    </>
  )
}

export default App
