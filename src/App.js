import './App.css';
import { Winner, DealHand, Loser } from './components';

function App() {
  return (
    <div className="App">
      <DealHand />
      <Winner />
      <Loser />
    </div>
  );
}

export default App;
