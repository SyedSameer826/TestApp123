import {Fragment} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Form from './Components/layout/form';
import List from './Components/layout/list';
import {Provider} from 'react-redux';
import store from './store'; 
const App=()=>(
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route  path='/' element={<List/>} />
        <Route  path='/form' element={<Form/>} /> 
      </Routes>
    </Fragment>
  </Router>
  </Provider>
)
  

export default App;
