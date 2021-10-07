import HeaderComponent from './component/Header/HeaderComponent'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Layout style={{minHeight:'100vh'}}>
    <Layout>
      <Header><HeaderComponent name='dashboard'/></Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
  );
}

export default App;
