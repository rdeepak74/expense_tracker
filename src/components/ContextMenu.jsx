import React from 'react'

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpense,
  rowId,
  expense,
  setExpenseValue,
  setEdit,
}) {
  if (!menuPosition.left) {
    return
  }
  const handleDeleteRow = (id) => {
    setExpense((prev) => prev.filter((expense) => expense.id !== id))
  }

  const handleEdit = (id) => {
    const { title, category, amount } = expense.find((data) => data.id === id)
    // console.log(editdata)
    setEdit(id)
    setExpenseValue({ title, category, amount })
  }
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          handleEdit(rowId)
          setMenuPosition({})
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          handleDeleteRow(rowId)
          setMenuPosition({})
        }}
      >
        Delete
      </div>
    </div>
  )
}
