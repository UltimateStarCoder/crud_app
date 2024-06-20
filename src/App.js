import './App.css';

function SignInPage() {
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
            <button type="submit" className="btn" onClick = {Dashboard}>Login</button>
            <button type="submit" className="btn">Create Account</button>
            <button type="submit" className="btn">Forgot Password</button>

          </form>
        </div>
      </div>
    </div>
  );
}

function Dashboard(){
  return (
    <div className= "App">
      <div className = "mainPage">
        <header className="title">
          <p>
            Dashboard
          </p>
        </header>
        <div className="box1">
          < p> Welcom $Username! </p>
        </div>
        <div className="box1">
          <button type="submit" className="btn">My Inventory</button>
          <button type="submit" className="btn" onClick={CreateNewItemPage}>Create New Item</button>
          <button type="submit" className="btn"onClick={EditItemPage}>Edit Item</button>
          <button type="submit" className="btn"onClick={Logout}>Logout</button>
        </div>

      </div>

    </div>
  );

}

function CreateNewItemPage(){
  return (
    <div className="App">
      <div className="mainPage">
        <header className="title">
          <div className = "pageBox">
            <p>
              Create New Item
            </p>
          </div>
        </header>

      </div>
    </div>
  );

}


function EditItemPage(){

}
/*
function MyInventoryPage(){

}

function SingleItemView_AuthenticatedInventoryManager(){

}

function PublicItemPage(){

}

function SingleItemView_UnauthenticatedVisitor(){

}*/

function Logout(){

}
export default SignInPage;
