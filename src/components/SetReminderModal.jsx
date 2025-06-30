import { useState } from 'react';

function SetReminderModal({ onClose }) {
  const [selected, setSelected] = useState('');

  const handleSelect = (label) => {
    setSelected(label);
  };

  const handleSave = () => {
    console.log('Reminder set for:', selected); // backend will use this
    onClose();
  };

  const options = [
    { label: 'Electricity', icon: '💡' },
    { label: 'Mobile', icon: '📱' },
    { label: 'Internet', icon: '📶' },
    { label: 'Water', icon: '💧' },
    { label: 'Gas', icon: '⛽' },
    { label: 'Credit Card', icon: '💳' },
    { label: 'Rent', icon: '🏠' },
    { label: 'Insurance', icon: '🛡️' },
  ];

  return (
    <div className="modal">
      <h3>Set Bill Reminder</h3>
      <div className="reminder-grid">
        {options.map((item) => (
          <div
            key={item.label}
            className={`reminder-option ${selected === item.label ? 'selected' : ''}`}
            onClick={() => handleSelect(item.label)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="reminder-buttons">
        <button className="btn-blue" onClick={handleSave}>Save</button>
        <button className="btn-red" onClick={onClose}>Close</button>
      </div>


    </div>
  );
}

export default SetReminderModal;
