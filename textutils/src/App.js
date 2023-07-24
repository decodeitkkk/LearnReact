import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';



function App() {
  return (
   <>
      <Navbar title={"TextUtils"} name={"Home"} />    
      <Form />
   </>
  );
}

export default App;
