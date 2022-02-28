import './App.css';
import image from './shopping.jpg';
import imageTwo from './man.jpg'
import { Grocerylist } from './Grocerylist';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src = { image } alt='shopping' width="200px"/>
      </div>

      <div className="container">
        <h1>Grocery List</h1>
      </div>

      <Grocerylist/>

      <div className="container">
        <img src = { imageTwo } alt='man' width="200px"/>
      </div>
    </div>
  );
}

export default App;
