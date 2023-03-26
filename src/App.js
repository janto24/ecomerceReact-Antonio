import logo from './logo.svg';
import './App.css';
import Navigator from './components/navbar/navBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <Navigator />
      <ItemListConteiner gretting={'Bienvenidos'}/>

    </div>
  );
}

export default App;
