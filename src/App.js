import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект для 6 лабораторной работы";
  const rel = "Added semantic-release"
  const vers = 'Version - 1.0.1'

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
      </header>
      <div>
       
      </div>
    </div>
  );
}

export default App;