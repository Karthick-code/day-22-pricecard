import logo from './logo.svg';
import './App.css';
import { Card } from './Card';

function App() {
  return (
  <div>
    <div className="text-center">
      <h2 className="title">Price Card</h2>
    </div>

    <div className="row" >
      <Card amt="0" name="free"/>
      <Card amt="9" name="plus"/>
      <Card amt="49" name="pro"/>
    </div>
  </div>

  );
}

export default App;
