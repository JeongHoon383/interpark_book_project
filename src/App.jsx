import './App.css';
import './fonts/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Navbar_logo from './components/Navbar_logo';
import Navbar_footer from './components/Navbar_footer';


function App() {
  return (
    <div>
        <Navbar/>
        <Navbar_logo/>
        <Navbar_footer/>
    </div>
  );
}

export default App;
