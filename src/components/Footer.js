import footerLogo from '../assets/images/footer-logo.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <img src={footerLogo} alt="footer-logo" />
          <p>At Finance Tracker, we’re on a mission to make personal finance simple...</p>
                <p>That’s where we come in.</p>
                <p>Our tool helps users:</p>
                <ul className="bulleted">
                    <li>Automatically sync payments from popular apps</li>
                    <li>Track expenses by category like food, bills, rent, etc.</li>
                    <li>Set budgets and receive smart alerts</li>
                    <li>Manage recurring payments and bills</li>
                    <li>Export their data for safekeeping</li>
                </ul>
                <p>Whether you’re a student, a professional, or just someone who wants to save better – Finance Tracker helps you take charge of your finances from one simple dashboard.</p>
                <p>We’re still learning, growing, and improving every day – just like you.</p>
            </div>
            <div className="footer-column">
              <h2 className="icon-heading">Features</h2>
              <ul className="no-bullets">
                <li><span>Spending Insights</span></li>
                <li><span>Budget Tracker</span></li>
                <li><span>Bill Reminders</span></li>
                <li><span>Manual Expense Entry</span></li>
                <li><span>Digital Payment Sync</span></li>
                <li><span>Export & Cloud Backup</span></li>
              </ul>
            </div>

            <div className="footer-column">
              <h2 className="icon-heading">Support</h2>
              <ul className="no-bullets">
                <li><span>Help Center / FAQs</span></li>
                <li><span>Contact Us</span></li>
                <li><span>Feedback/Suggestions</span></li>
                <li><span>How To Guides</span></li>
                <li><span>App Walkthrough</span></li>
              </ul>
            </div>

            <div className="footer-column">
              <h2 className="icon-heading">About Us</h2>
              <ul className="no-bullets">
                <li><span>Our Mission</span></li>
                <li><span>Meet The Team</span></li>
                <li><span>Terms of Service</span></li>
                <li><span>Privacy Policy</span></li>
                <li><span>Data Usage Policy</span></li>
              </ul>
            </div>
        </div>
      <div className="centered-section">
        <h2>Let’s build financial freedom together !!</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
