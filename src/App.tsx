import { LoginHandler } from "./pages/Login";
import styles from "./app.module.css";
import { Services } from "./services";

function App() {
  return (
    <Services>
      <div className={styles.container}>
        <LoginHandler />
      </div>
    </Services>
  );
}

export default App;
