import logo from './logo.svg';
import './App.css';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscribers from './components/ViewSubscribers';
import SearchSubscribers from './components/SearchSubscribers';
import DeleteSubscribers from './components/DeleteSubscribers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddSubscribers />} />
        <Route path='/view' element={<ViewSubscribers />} />
        <Route path='/search' element={<SearchSubscribers />} />
        <Route path='/delete' element={<DeleteSubscribers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
