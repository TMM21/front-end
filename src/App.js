
import {Switch, Route} from 'react-router-dom'
import Nav from './components/Nav/nav'
import './App.css'

//pages
import Home from './pages/home'
import BookASeat from './pages/BookaSeat'
import Hirecar from './pages/Hirecar'
import OneWay from './pages/Oneway'
import Signup from './pages/signup'
import Login from './pages/login'
//redux
import store from './redux/store'
import {Provider} from 'react-redux'
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
     
      </Switch>
    </Provider>
   </>
  );
}

export default App;
