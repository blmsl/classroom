/* @flow */
import BasePage, {React} from './BasePage.jsx';
import Sidebar from '../components/Sidebar.jsx';

export default class HomePage extends BasePage {
  render(): React.Element {
    return (
      <div className="row">
        <div className="col-xs-2 sidebar"><Sidebar/></div>
        <div className="col-xs-10 main">Content here</div>
      </div>
    );
  }
}