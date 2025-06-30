import Navbar from '../components/navbar';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import AddTransactionModal from '../components/AddTransactionModal';
import AddIncomeModal from '../components/AddIncomeModal';
import SetReminderModal from '../components/SetReminderModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Dashboard() {

  useEffect(() => {
    AOS.init({
      duration: 1000,      // animation duration (ms)
      once: false,         // allow animation every scroll
      mirror: true         // animate on scroll up
    });
  }, []);

  const [budgetGoal, setBudgetGoal] = useState(5000);
  const [editingGoal, setEditingGoal] = useState(false);

  const transactionRef = useRef();
  const incomeRef = useRef();
  const reminderRef = useRef();

  const categories = [
    'All',
    'Electricity',
    'Mobile',
    'Internet',
    'Water',
    'Gas',
    'Credit Card',
    'Rent',
    'Insurance',
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);


  const toggleTip = () => {
    const tip = document.getElementById('ai-tip-text');
    if (tip) {
      tip.style.display = tip.style.display === 'none' ? 'block' : 'none';
    }
  };

    const [totalBalance, setTotalBalance] = useState(8200);
    const [income, setIncome] = useState(10000);
    const [expenses, setExpenses] = useState(1800);

    const [transactions, setTransactions] = useState([
      { icon: '🧾', label: 'Fees (Cash - Today)', amount: 1500, type: 'income' },
      { icon: '💡', label: 'Bills (Cash - Yesterday)', amount: 1500, type: 'expense' },
    ]);

    const [activeModal, setActiveModal] = useState(null); // 'transaction' | 'income' | 'reminder' | null


    const searchTransaction = () => {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.transactions li');
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(input) ? 'flex' : 'none';
    });
  };

      const filteredTransactions = transactions.filter(txn =>
      selectedCategory === 'All' || txn.label === selectedCategory
    );

    const displayedTransactions = showAll
      ? filteredTransactions
      : filteredTransactions.slice(0, 4);

    const budgetUsed = ((expenses / budgetGoal) * 100).toFixed(0);
    const isOverBudget = expenses > budgetGoal;

    useEffect(() => {
      const handleOutsideClickOrScroll = (e) => {
        if (
          activeModal === 'transaction' &&
          transactionRef.current &&
          !transactionRef.current.contains(e.target)
        ) {
          setActiveModal(null);
        }

        if (
          activeModal === 'income' &&
          incomeRef.current &&
          !incomeRef.current.contains(e.target)
        ) {
          setActiveModal(null);
        }

        if (
          activeModal === 'reminder' &&
          reminderRef.current &&
          !reminderRef.current.contains(e.target)
        ) {
          setActiveModal(null);
        }
      };

      document.addEventListener('mousedown', handleOutsideClickOrScroll);
      // window.addEventListener('scroll', handleOutsideClickOrScroll);

      return () => {
        document.removeEventListener('mousedown', handleOutsideClickOrScroll);
        window.removeEventListener('scroll', handleOutsideClickOrScroll);
      };
    }, [activeModal]);


  return (
    <>
      <Navbar />
      <main className="page-content">

      <div className="dashboard">
        <div className="top-bar" data-aos="fade-down">
          <h2>Hi User, here’s your financial snapshot</h2>
        </div>

        <div className="snapshot" data-aos="fade-down">
          <div className="box"data-aos="fade-down">
            <h3>Total Balance</h3>
            ₹ {totalBalance}
          </div>
          <div className="box"data-aos="fade-down">
            <h3>Income</h3>
            ₹ {income}  
          </div>
          <div className="box"data-aos="fade-down">
            <h3>Expenses</h3>
            ₹ {expenses}
          </div>
        </div>

        <div className="tip" onClick={toggleTip} data-aos="fade-left">
          <span>💡 Smart AI Tip</span>
          <span>➤</span>
        </div>

        <div id="ai-tip-text" className="tip-text" style={{ display: 'none' }} >
          Track daily expenses to better manage your budget goals!
        </div>

        <div className="budget" data-aos="zoom-in-up">
          <strong>🎯 Budget Goal</strong>
          <div>
            ₹{expenses} of&nbsp;
            {editingGoal ? (
              <input
                type="number"
                value={budgetGoal}
                onChange={(e) => setBudgetGoal(Number(e.target.value))}
                onBlur={() => setEditingGoal(false)}
                autoFocus
                style={{ width: '80px' }}
              />
            ) : (
              <span onClick={() => setEditingGoal(true)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                ₹{budgetGoal}
              </span>
            )}
            &nbsp;({Math.min(budgetUsed, 100)}%)
          </div>

          <div className="budget-bar" data-aos="fade-down">
            <div
              className="budget-progress"
              style={{
                width: `${Math.min(budgetUsed, 100)}%`,
                backgroundColor: isOverBudget ? '#dc3545' : '#64748b'
              }}
            ></div>
          </div>
        </div>


        <div className="filter-row" data-aos="fade-down">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

          <input type="text" placeholder="Search" id="searchInput" />
          <button onClick={searchTransaction}>Search</button>
        </div>

        <div className="transactions" id="transactionList">
            <ul>
              {displayedTransactions.map((txn, index) => (
                <li key={index}>
                  <span>{txn.icon} {txn.label}</span>
                  <span style={{ color: txn.type === 'expense' ? 'red' : 'green' }}>
                    {txn.type === 'expense' ? '-' : '+'} ₹{txn.amount}
                  </span>
                </li>
              ))}
            </ul>

          {filteredTransactions.length > 4 && (
            <button
              className="see-more"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'See More'}
            </button>
          )}
        </div>

        <div className="quick-actions"data-aos="fade-up">
          <button onClick={() => setActiveModal('transaction')}>➕ Add Transaction</button>
          <button onClick={() => setActiveModal('reminder')}>🔔 Set Reminder</button>
          <button onClick={() => setActiveModal('income')}>💰 Add Income</button>
          <button onClick={() => alert('This feature is coming soon!')}>
            📄 Export PDF/CSV
          </button>

        </div>
          {activeModal === 'transaction' && (
            <div ref={transactionRef}>
              <AddTransactionModal
                onClose={() => setActiveModal(null)}
                onAdd={(txn) => {
                  setTransactions([txn, ...transactions]);
                  if (txn.type === 'income') {
                    setIncome(income + txn.amount);
                    setTotalBalance(totalBalance + txn.amount);
                  } else {
                    setExpenses(expenses + txn.amount);
                    setTotalBalance(totalBalance - txn.amount);
                  }
                }}
              />
            </div>
          )}

          {activeModal === 'income' && (
            <div ref={incomeRef}>
              <AddIncomeModal
                onClose={() => setActiveModal(null)}
                onAdd={(txn) => {
                  setIncome(income + txn.amount);
                  setTotalBalance(totalBalance + txn.amount);
                }}
              />
            </div>
          )}

          {activeModal === 'reminder' && (
            <div ref={reminderRef}>
              <SetReminderModal onClose={() => setActiveModal(null)} />
            </div>
          )}

      </div>
      </main>
    </>
  );
}

export default Dashboard;
