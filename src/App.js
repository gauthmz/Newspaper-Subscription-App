import logo from './logo.svg';
import './App.css';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscribers from './components/ViewSubscribers';
import SearchSubscribers from './components/SearchSubscribers';

function App() {
  return (
    <div>
      <AddSubscribers />
      <ViewSubscribers />
      <SearchSubscribers/>
    </div>
  );
}

export default App;
