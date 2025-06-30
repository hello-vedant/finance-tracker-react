import { useState } from 'react';

function AddTransactionModal({ onClose, onAdd }) {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [label, setLabel] = useState('');

  const handleSubmit = () => {
    const iconMap = {
      Electricity: '💡',
      Mobile: '📱',
      Internet: '📶',
      Water: '💧',
      Gas: '⛽',
      'Credit Card': '💳',
      Rent: '🏠',
      Insurance: '🛡️',
    };

    onAdd({
      icon: iconMap[label] || '💸',
      label,
      amount: Number(amount),
      type,
    });
    onClose();
  };

  return (
    <div className="modal">
      <h3>Add Transaction</h3>
      <div className="modal-form">
        <label>Amount</label>
        <input
          type="number"
          placeholder="₹ Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Type</label>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <label>Category</label>
        <select onChange={(e) => setLabel(e.target.value)}>
          <option value="">Select</option>
          <option value="Electricity">Electricity</option>
          <option value="Mobile">Mobile</option>
          <option value="Internet">Internet</option>
          <option value="Water">Water</option>
          <option value="Gas">Gas</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Rent">Rent</option>
          <option value="Insurance">Insurance</option>
        </select>

      <button className="btn-blue" onClick={handleSubmit}>Add</button>
      <button className="btn-red" onClick={onClose}>Close</button>

      </div>
    </div>
  );
}

export default AddTransactionModal;
