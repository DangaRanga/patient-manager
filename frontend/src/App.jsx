import logo from "./logo.svg";
import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <header className={styles.Appheader}>
        <img src={logo} className={styles.Applogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.Applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
