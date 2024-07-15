import React, { useRef, useState } from 'react'

export default function ExpenseForm({ setExpense }) {
  const [expensevalue, setExpenseValue] = useState({
    title: '',
    category: '',
    amount: '',
  })

  // const handlesubmit = (e) => {
  //   e.preventDefault()
  //   // let form = e.target
  //   // let formData = new FormData(form)
  //   // let formObj = Object.fromEntries(formData.entries())
  //   // // setExpense([...expense, { ...formObj, id: crypto.randomUUID() }])
  //   // setExpense((prev) => [...prev, { ...formObj, id: crypto.randomUUID() }])

  //   // e.target.reset()
  // }
  const titleRef = useRef(null)
  const categoryRef = useRef(null)
  const amountRef = useRef(null)

  const handleChange = (e) => {
    // setExpenseValue({...expensevalue,[e.target.name]:e.target.value})
    setExpenseValue({ ...expensevalue, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()

    const dataexpense = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
    }
    console.log(dataexpense)

    setExpense((prev) => [...prev, { ...dataexpense, id: crypto.randomUUID() }])
    titleRef.current.value = ''
    categoryRef.current.value = ''
    amountRef.current.value = ''

    // setExpense((prev) => [
    //   ...prev,
    //   { ...expensevalue, id: crypto.randomUUID() },
    // ])
    // setExpenseValue({
    //   title: '',
    //   category: '',
    //   amount: '',
    // })
  }
  // console.log(expensevalue)

  return (
    <form className="expense-form" onSubmit={handlesubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // value={expensevalue.title}
          // onChange={handleChange}
          ref={titleRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          // value={expensevalue.category}
          // onChange={handleChange}
          ref={categoryRef}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          // value={expensevalue.amount}
          // onChange={handleChange}
          ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  )
}
