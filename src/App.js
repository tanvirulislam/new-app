import logo from './logo.svg';
import './App.css';
import Hello from './Mycomponents/Hello';
import Welcome from './Mycomponents/Welcome';

function App() {
  return (
    <div className="app">
      <Hello age="20" name="mizan"></Hello>
      <Welcome class="1"></Welcome>

      <Hello age="21" name="sohan"></Hello>
      <Welcome class="2"></Welcome>

      <Hello age="22" name="kisor"></Hello>
      <Welcome class="3"></Welcome>
    </div>
  );
}

export default App;
