import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/pages/home/home.component';
import Header from './components/header/header.component'

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
