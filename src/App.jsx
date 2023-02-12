import Cuerpo from "./components/cuerpo/Cuerpo";
import Nav from './components/header/Navegador';
import GetFooter from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Cuerpo />
      <GetFooter/>
    </div>
  );
}

export default App;
