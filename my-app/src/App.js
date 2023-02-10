import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/* import NavBar from "./Components/NavBar"; */
import NavBar from "./Components/NavBar";
import UnderNavBar from "./Components/UnderNavBar";
import FirstRow from "./Components/FirstRow";
import SecondRow from "./Components/SecondRow";
import ThirdRow from "./Components/ThirdRow";
import Row1Title from "./Components/Row1Title";
import Row2Title from "./Components/Row2Title";
import Row3Title from "./Components/Row3Title";
function App() {
  return (
    <>
      <NavBar />
      <UnderNavBar />
      <Row1Title />
      <FirstRow />
      <Row2Title />
      <SecondRow />
      <Row3Title />
      <ThirdRow />
    </>
  );
}

export default App;
