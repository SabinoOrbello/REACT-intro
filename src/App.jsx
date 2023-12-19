import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

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
        <ImageComponent
          src="https://static.kodami.it/wp-content/uploads/sites/31/2020/12/iStock-108226626.jpg"
          alt="gatto"
          style={{ width: "100px", marginTop: "1.5rem" }}
        />
      </header>
    </div>
  );
}

export default App;
