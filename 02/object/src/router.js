import React from 'react';
import { Router, Route, Switch,MemoryRouter } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Etable from './components/Etable/Etable'
import niming from './components/vivew/niming'
import xueyuan from './components/vivew/xueyuan'
import xiangmu from './components/vivew/xiangmu'
import Vip from './components/vivew/Vip'

function RouterConfig({ history }) {
  return (
    <MemoryRouter>
    <Router history={history}>
      <Switch>
     
        <Route path="/" exact component={IndexPage} />
        <Route path="/Etable" component={Etable}/>
        <Route path="/niming/:id" component={niming}/>
        <Route path="/xueyuan" component={xueyuan}/>
        <Route path="/xiangmu" component={xiangmu}/>
        <Route path="/Vip" component={Vip}/>
       
        {/* <Redirect
            to={{
              pathname: "/Vip",
            }}
          /> */}
      </Switch>
      
    </Router>
    </MemoryRouter>
  );
}

export default RouterConfig;
