import { Route, Routes } from 'react-router-dom';
import './App.css';
import { FileBrowser } from './pages/FileBrowser/FileBrowser';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<FileBrowser/>}/>
      </Routes>
    </div>
  );
}

export default App;
