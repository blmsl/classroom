/* @flow */
import BasePage, {React} from './BasePage.jsx';
import Sidebar from '../components/Sidebar.jsx';
import UserForm from '../components/forms/UserForm.jsx';
import UserActions from '../actions/UserActions.js';
import {createStore} from '../stores/UserStore.js';
import UsersTable from '../components/users/UsersTable.jsx';
import User from '../models/User.js';

export default class UsersPage extends BasePage {

  createStore() {
    return createStore('users');
  }

  componentDidMount() {
    UserActions.loadUsers();
  }

  selectUser(user: User) {
    UserActions.selectUser(user);
  }


  render(): React.Element {

    return (
      <div className="row">
        <div className="col-xs-2 sidebar"><Sidebar/></div>
        <div className="col-xs-10 main usersContainer">
          <div className="row">
            <div className="col-xs-8">
              <h3>User Management</h3>
              <UsersTable users={this.state.users} selectUser={this.selectUser.bind(this)}/>

            </div>
            <div className="col-xs-4">
              <h3>{`${this.state.selectedUser ? 'Edit' : 'Add new'} user`}</h3>
              <UserForm user={this.state.selectedUser} save={user => {console.log('save user', user)}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}