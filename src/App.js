
import {Switch, Route} from 'react-router-dom'
import Nav from './components/Nav/nav'
import './App.css'
import axios from 'axios'

//pages
import Home from './pages/home'
import BookASeat from './pages/BookaSeat'
import Hirecar from './pages/Hirecar'
import OneWay from './pages/Oneway'
import Signup from './pages/signup'
import Login from './pages/login'
import Booking from './pages/booking'
//redux
import store from './redux/store'
import {Provider} from 'react-redux'

axios.defaults.baseURL="https://api-miracle.herokuapp.com"
function App() {
  return (
    <>
    <Provider store={store}>

      <main>
         <Nav />
     </main>
       <Switch>
        

           <Route exact path='/' component={Home} />
           <Route exact path='/book_a_seat' component={BookASeat} />
           <Route exact path="/hire_car" component={Hirecar} />
           <Route exact path='/book_a_seat/one_way' component={OneWay} />
           <Route exact path='/login' component={Login} />
           <Route exact path='/signup' component={Signup} />
            <Route exact path ="/book_a_seat/one_Way/passenger_details" component={Booking} />
      </Switch>
    </Provider>
   </>
  );
}

export default App;
