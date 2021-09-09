
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GlobalStyle from "./globalStyles";
import './FiraCode.css'


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <Navbar/>
     <Footer/>
    </div>
  );
}

export default App;
