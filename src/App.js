import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/pages/home/home.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Menu from './components/pages/menu/menu.component';
import DonationsPage from './components/pages/donations/donations';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig)


function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/donations" component={DonationsPage} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
