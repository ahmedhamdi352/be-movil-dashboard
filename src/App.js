// import React from 'react'
// import './App.css'
import LoginForm from './components/LoginForm'
import MenuComponent from './components/menu';
// import Configration from './components/configrations'
// import { Router, Route, Switch, Redirect  } from "react-router-dom";
// import history from './config/history'
// import { connect } from "react-redux";
// import Plan from './components/plan';
// import Edit from './components/edit'
// import AddNew from './components/newAdd'
// import Install from './components/install'
// import SignIp from './components/signup'
// function App ({currentUser}) {
//   const tk=localStorage.getItem('tk')
//   console.log(currentUser)
//   return (
//     <Router history={history}>
//        {/* <MenuComponent/> */}
//        <Switch>
//        {
//            currentUser !==null|| tk ? <div>
//              <Route  path="/" exact  component={MenuComponent} />
//              <Route  path="/edit"  component={Edit} />
//              <Route  path="/new-add"  component={AddNew} />
//              <Route  path="/install"  component={Install} />
//              <Route  path="/plan"  component={Plan} />


//            </div>
//            :<div>
//            <Route path="/" component={LoginForm} />
          
//            </div>
//          }

//           </Switch>
//     </Router>

//   )
// }
// const mapStateToProps = ({user})=>({
//   currentUser: user.currentUser,
// });
// export default connect(mapStateToProps,null) (App);


import React from 'react'
import './App.css'
import Nav from './components/NavBar';
import Configration from './components/configrations'
import { Router, Route, Switch } from "react-router-dom";
import history from './config/history'
import { connect } from "react-redux";
import Plan from './components/plan';
function App ({currentUser}) {
  const tk=localStorage.getItem('tk')
  return (
    <Router history={history}>
       <Switch>
         {
           currentUser|| tk ? <div>
             <Route  path="/home" exact component={MenuComponent} />

           </div>
           :<Route path="/"  component={LoginForm} />
         }
          </Switch>
    </Router>

  )
}
const mapStateToProps = ({user})=>({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps,null) (App);