/* @flow */
import BasePage, {React} from './BasePage.jsx';
import Sidebar from '../components/Sidebar.jsx';
import UserForm from '../components/users/UserForm.jsx';
import UserActions from '../actions/UserActions.js';
import {createStore} from '../stores/UserStore.js';
import UsersTable from '../components/users/UsersTable.jsx';
import User from '../models/User.js';

export default class StudentsPage extends BasePage {

  createStore() {
    return createStore('users');
  }

  componentDidMount() {
    UserActions.loadUsers();
  }

  selectUser(user: User) {
    UserActions.selectUser(user);
  }

  saveUser(user: User) {
    UserActions.saveUser(user);
  }

  deleteUser(userId: String) {
    UserActions.deleteUser(userId);
  }


  render(): React.Element {
    const students = this.state.users ?
      this.state.users.filter((user: User) => {return user.hasRole('ROLE_STUDENT') && !user.hasRole('ROLE_TEACHER')}) :
      [];
    return (
      <div className="row">
        <div className="col-xs-2 sidebar"><Sidebar/></div>
        <div className="col-xs-10 main usersContainer">
          <div className="row">
            <div className="col-xs-8">
              <h3>User Management</h3>
              <UsersTable
                users={students}
                selectUser={this.selectUser.bind(this)}
                deleteUser={this.deleteUser.bind(this)}
              />

            </div>
            <div className="col-xs-4">
              <h3>{`${this.state.selectedUser.getId() ? 'Edit' : 'Add new'} user`}</h3>
              <UserForm user={this.state.selectedUser} save={this.saveUser.bind(this)} errors={this.state.errors} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}