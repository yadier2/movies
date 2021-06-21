import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'

import { Navbar } from './componets/Navbar';
import {Landing} from './componets/home/Landing'
import {Movie} from './componets/home/Movie'
import { InfinityScroll } from './infinityScroll/InfinityScroll';

function App() {
  return (
    <Router>

     <div>
      <Navbar/>
      <Route exact path="/home" component={InfinityScroll}/>
      <Route exact path="/search" component={Landing}/>

      <Route exact path="/movie/:id" component={Movie}/>
 
       </div>
    </Router>
 
  );
}

export default App;
