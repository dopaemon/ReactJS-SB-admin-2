import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import SiderBar from './components/Navigation/SiderBar';

function App() {
  return (
    <div id="wrapper">
        <SiderBar />
        <Home />
    </div>
  );
}

export default App;
