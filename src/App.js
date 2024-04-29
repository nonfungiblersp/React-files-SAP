//import logo from './logo.svg';
import './App.css'; //to link App.css with this file  
import Hello from './Hello'; 
import MenuBar from './MenuBar';
import Hello2 from './hello2';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Hello/>
      <Hello2/>
      <Footer/>
    </div>
  );
}

export default App;
