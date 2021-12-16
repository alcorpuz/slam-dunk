import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/home/home.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Menu from './components/pages/menu/menu.component';
import Login from './components/pages/login/login.component';
import DonationsPage from './components/pages/donations/donations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { listFoods } from './graphql/queries';
import { useState, useEffect } from 'react';


Amplify.configure(awsconfig)


function App() {

  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetchFoods();
  }, []);


  const fetchFoods = async () => {
    try {
        const foodData = await API.graphql(graphqlOperation(listFoods));
        const foodList = foodData.data.listFoods.items;
        console.log('food list', foodList)

    } catch (error) {
        console.log('error on fetching foods', error)
    }
  }

  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/donations" component={DonationsPage} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
