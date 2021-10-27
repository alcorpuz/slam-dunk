import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/pages/home/home.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
