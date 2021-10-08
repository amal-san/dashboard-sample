import { Table, Tag, Space } from 'antd';
import { connect } from 'react-redux';
import { createClientDefault, updateClientDefault } from '../../redux/client/Client.action';
import DeleteClient from '../client/delete/DeleteClientComponent';

const UpdateAndDelete = (props) => {


    const onUpdate = () => {
        if(props.create)
            props.createClientDefault();
        props.updateClientDefault();
        

    }
    return (
      <Space size="middle">
        <a onClick={() => onUpdate()}>Update</a>
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
  