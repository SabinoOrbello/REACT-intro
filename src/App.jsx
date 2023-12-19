import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://i.ytimg.com/vi/J8rG8IbAptg/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLCP1d4g_xQuur7Zd4SYEo6A9mRKzg"
          className="App-logo"
          alt="logo"
        />
        <p>Ciao amici</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent content="Premi il tasto" style={{ padding: "1rem", borderRadius: "50px" }} className="" />
      </header>
    </div>
  );
}

export default App;
