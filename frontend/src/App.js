import { Route, Routes } from 'react-router-dom';
import './App.css';
import { List } from './pages/List';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<List/>}/>
      </Routes>
    </div>
  );
}

export default App;
