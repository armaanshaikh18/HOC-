import "./App.css";
import Counter1 from "./components/HOC/counter1";
import Counter2 from "./components/HOC/counter2";
import Render from "./components/RenderClass/dynamicClass";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./components/userContext";
function App() {
  return (
    <div className="App">
      <UserProvider value="Armaan">
        <Counter1 />
        <br />
        <Counter2 />
      </UserProvider>
      <br />
      <Render />
    </div>
  );
}

export default App;
