import { useState } from 'react';

function AddIncomeModal({ onClose, onAdd }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    onAdd({
      amount: Number(amount),
      category,
      date,
    });
    onClose();
  };

  return (
    <div className="modal">
      <h3>Add Income</h3>
      <div className="modal-form">
        <label>Amount</label>
        <input
          type="number"
          placeholder="₹ Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Category</label>
        <select onChange={(e) => setCategory(e.target.value)}>
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

        <label>Date</label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="btn-blue" onClick={handleSubmit}>Add</button>
        <button className="btn-red" onClick={onClose}>Close</button>

      </div>
    </div>
  );
}

export default AddIncomeModal;
