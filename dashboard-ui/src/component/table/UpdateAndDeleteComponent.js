import { Table, Tag, Space } from 'antd';
import { connect } from 'react-redux';
import { createClientDefault, updateClientDefault } from '../../redux/client/Client.action';
import DeleteClient from '../client/delete/DeleteClientComponent';
import UpdateClient from '../client/update/UpdateClientComponent';

const UpdateAndDelete = (props) => {


    return (
      <Space size="middle">
        <UpdateClient {...props}/>
        <DeleteClient name={props.name}/>
      </Space>
    )
}

const mapDispatchToProps = {
    createClientDefault,
    updateClientDefault,
    
}
const mapStateToProps = state => {
    return {
      create:state.createClient.createClientActive,
      update:state.updateClient.updateClientActive,
    }
  }
  
  
  
export default connect(mapStateToProps, mapDispatchToProps)(UpdateAndDelete);
  