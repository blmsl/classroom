/* @flow */
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import BaseComponent, {React} from './app/components/BaseComponent.jsx';
import LoginPage from './app/pages/LoginPage.jsx';
import HomePage from './app/pages/HomePage.jsx';
import UsersPage from './app/pages/UsersPage.jsx';
import TeachersPage from './app/pages/TeachersPage.jsx';
import StudentsPage from './app/pages/StudentsPage.jsx';
import LessonsPage from './app/pages/LessonsPage.jsx';
import SessionsPage from './app/pages/SessionsPage.jsx';
import ContainerPage from './app/pages/ContainerPage.jsx';
import CategoriesPage from './app/pages/CategoriesPage.jsx';
import ReactDOM from 'react-dom';

// init api
import {instantiateAuthApi} from './app/api/AuthApi.js';
import {instantiateUserApi} from './app/api/UserApi.js';
import {instantiateAttendeeApi} from './app/api/AttendeeApi.js';
import {instantiateCategoryApi} from './app/api/CategoryApi.js';
import {instantiateLessonApi} from './app/api/LessonApi.js';

instantiateAuthApi();
instantiateUserApi();
instantiateAttendeeApi();
instantiateCategoryApi();
instantiateLessonApi();
// init stores
import {createStore as createAuthStore} from './app/stores/AuthStore.js';
import {createStore as createUserStore} from './app/stores/UserStore.js';
import {createStore as createCategoryStore} from './app/stores/CategoryStore.js';
import {createStore as createLessonStore} from './app/stores/LessonStore.js';
createAuthStore('auth');
createUserStore('users');
createCategoryStore('categories');
createLessonStore('lessons');

export default class App extends BaseComponent {
  render(): React.Element {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={ContainerPage} >
          <IndexRoute component={LoginPage}/>
          <Route path='login' component={LoginPage}/>
          <Route path='home' component={HomePage}/>
          <Route path='management/'>
            <Route path='users' component={UsersPage}/>
            <Route path='teachers' component={TeachersPage}/>
            <Route path='students' component={StudentsPage}/>
            <Route path='lessons' component={LessonsPage}/>
            <Route path='sessions' component={SessionsPage}/>
            <Route path='categories' component={CategoriesPage}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
