import logo from './logo.svg';
import './App.css';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscribers from './components/ViewSubscribers';
import SearchSubscribers from './components/SearchSubscribers';
import DeleteSubscribers from './components/DeleteSubscribers';

function App() {
  return (
    <div>
      <AddSubscribers />
      <ViewSubscribers />
      <SearchSubscribers/>
      <DeleteSubscribers/>
    </div>
  );
}

export default App;
