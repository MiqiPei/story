import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index.js';
import store from './store/index.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path='/' exact render={()=><div>home</div>}></Route>
              <Route path='/detail' render={()=><div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );  
  }
}

export default App;
