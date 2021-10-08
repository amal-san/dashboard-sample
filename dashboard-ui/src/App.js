import HeaderComponent from './component/header/HeaderComponent'
import { Button, Layout } from 'antd';
import MenuComponent from './component/menu/MenuComponent';
import TableComponent from './component/table/TableComponent';
import store from './saga/createStore'
import { Provider } from 'react-redux';
import CreateClient from './component/client/create/CreateClientComponent';
import UpdateClient from './component/client/update/UpdateClientComponent';
import axios from 'axios'
import AddUser from './component/add/AddUserComponent';




const { Header, Footer, Sider, Content } = Layout;


axios.defaults.baseURL = 'https://consign-server.herokuapp.com/'


function App() {
  return (
    <Provider store={store}>
      <Layout style={{ minHeight: '100vh' }}>
        <MenuComponent />
        <Layout>
          <Header><HeaderComponent name='dashboard' /></Header>
          <Content><TableComponent/></Content>
          <UpdateClient/>
          <CreateClient/>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Provider>
  );
}

export default App;
