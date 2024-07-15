import React, { useRef, useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function ExpenseForm({
  setExpense,
  expensevalue,
  setExpenseValue,
  edit,
  setEdit,
  expense,
}) {
  // const handlesubmit = (e) => {
  //   e.preventDefault()
  //   // let form = e.target
  //   // let formData = new FormData(form)
  //   // let formObj = Object.fromEntries(formData.entries())
  //   // // setExpense([...expense, { ...formObj, id: crypto.randomUUID() }])
  //   // setExpense((prev) => [...prev, { ...formObj, id: crypto.randomUUID() }])

  //   // e.target.reset()
  // }

  // const handleChange = (e) => {
  //   // setExpenseValue({...expensevalue,[e.target.name]:e.target.value})
  //   setExpenseValue({ ...expensevalue, [e.target.name]: e.target.value })
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setExpenseValue((prev) => ({ ...prev, [name]: value }))
    setErrors({})
  }

  const [errors, setErrors] = useState({})

  const validationConfig = {
    title: [
      {
        required: true,
        message: 'Title is required',
      },
      {
        minLength: 3,
        message: 'Title must be at least 3 characters long',
      },
    ],
    category: [
      {
        required: true,
        message: 'Category is required',
      },
    ],
    amount: [
      {
        required: true,
        message: 'Amount is required',
      },
      {
        pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
        message: 'Please enter a valid amount number',
      },
    ],
  }

  const validate = (formdata) => {
    const errorsData = {}

    // if (!formdata.title) {
    //   errorsData.title = 'Please enter title'
    // }

    // if (!formdata.category) {
    //   errorsData.category = 'Please select a category'
    // }

    // if (!formdata.amount) {
    //   errorsData.amount = 'Please enter amount'
    // }
    Object.entries(formdata).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message
          return true
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message
          return true
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message
          return true
        }
      })
    })

    setErrors(errorsData)
    return errorsData
  }

  const handlesubmit = (e) => {
    e.preventDefault()

    const validateData = validate(expensevalue)
    if (Object.keys(validateData).length) {
      return
    }

    if (edit) {
      // setExpense((prevState) =>
      //   prevState.map((prevExpense) => {
      //     if (prevExpense.id === editingRowId) {
      //       return { ...expense, id: editingRowId }
      //     }
      //     return prevExpense
      //   })
      // )
      const editData = expense.map((data) =>
        data.id === edit ? { ...data, ...expensevalue } : { ...data }
      )

      setExpense(editData)
      setExpenseValue({
        title: '',
        category: '',
        amount: '',
      })
      setEdit('')
      return
    }

    setExpense((prev) => [
      ...prev,
      { ...expensevalue, id: crypto.randomUUID() },
    ])
    setExpenseValue({
      title: '',
      category: '',
      amount: '',
    })
  }
  // console.log(errors)

  return (
    <form className="expense-form" onSubmit={handlesubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expensevalue.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={expensevalue.category}
        onChange={handleChange}
        options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
        error={errors.category}
        defaultOptions="Select Category"
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expensevalue.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn">{edit ? 'Save' : 'Add'}</button>
    </form>
  )
}
