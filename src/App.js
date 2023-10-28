import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Protected from './components/Protected';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="App">
     
     <Login/>
     <h1>Protected Section Only visible when the user Is logged In</h1>
     <Protected/>
     <FileUpload/>
    </div>
  );
}

export default App;
