import logo from './logo.svg';
import './App.css';
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js'
import Header from './components/Header'
import MainBody from './components/MainBody'
import Footer from './components/Footer'

// React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';


function App() {
  return (
    <div className="content">
      <Header/>
      <br></br>
      <MainBody/>
      <Footer/>
      <NotificationContainer/>
     
    </div>
  );
}

export default App;
