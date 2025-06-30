import Navbar from '../components/navbar';

function Signup() {
  return (
    <>
      <Navbar />
<main className="page-content">
      <div className="signup-container">
        <h2>Create an Account</h2>

        <button className="google-btn" onClick={() => window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile'}>
          <img src="https://www.google.com/favicon.ico" alt="Google Icon" />
          Sign up with Google
        </button>

        <div className="or-divider">OR</div>

        <form className="signup-form" onSubmit={(e) => {
          e.preventDefault();
          alert('Sign Up clicked!');
        }}>
          <input type="text" placeholder="First Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="password" id="password" placeholder="Password*" required />
          <input type="password" id="confirmPassword" placeholder="Confirm Password*" required />

          <div className="show-password">
            <input
              type="checkbox"
              id="showPassword"
              onChange={(e) => {
                const type = e.target.checked ? 'text' : 'password';
                document.getElementById('password').type = type;
                document.getElementById('confirmPassword').type = type;
              }}
            />
            <label htmlFor="showPassword">Show password</label>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>

          <button type="submit" className="sign-up-btn">Sign Up</button>

          <a href="/login" className="sign-in-link">Already have an account? Sign in</a>
        </form>
      </div>
      </main>
    </>
  );
}

export default Signup;
