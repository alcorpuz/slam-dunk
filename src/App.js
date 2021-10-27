import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/pages/home/home.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Menu from './components/pages/menu/menu.component';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />

        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
