import React from 'react'
// Routing
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// Components
import Header from '../Screens/Header'
import PostIndex from '../Posts/PostIndex'
import NewPost from '../Posts/NewPost'
import ShowPost from '../Posts/ShowPost'
import EditPost from '../Posts/EditPost'
// Redux
import {Provider} from 'react-redux'
import store from '../../redux/store'
// Booststrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../bootstrap.min.css'



const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/posts/edit/:postId' component={EditPost} />
            <Route path='/posts/new' component={NewPost} />
            <Route path='/:category/:postId' component={ShowPost} />
            <Route path='/:category' component={PostIndex} />
            <Route path='/' component={PostIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
