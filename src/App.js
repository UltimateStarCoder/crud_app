import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="title">
          <p>
            Login/Signup Page
          </p>
        </header>
        <div className="box">
          <form action="/loginPage">
          <label for="Username">Username:
            <input type="text" id="Username" name="Username" required />
          </label>
          <label for="Password">Password:
            <input type="password" id="Password" name="Password" required />
          </label>
          <div></div>
            <button type="submit" className="btn">Login</button>
            <button type="submit" className="btn">Create Account</button>
            <button type="submit" className="btn">Forgot Password</button>

          </form>
        </div>
      </div>
    </div>
  );
}


export default App;
