import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { NavBarComponent } from './components/NavBarComponent';
import './App.css';

function App() {
  return (
    <div>
      <NavBarComponent />
      <Counter />
      <Login />
    </div>
  );
}

export default App;
