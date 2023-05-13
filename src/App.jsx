import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import P5Background from "./particles";

function App() {
  return (
    <>
      <Menu />

      <P5Background />
      <Home />
      <div>
        {" "}
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          {" "}
          Pixel perfect{" "}
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com'
        </a>
      </div>
    </>
  );
}

export default App;
