import './DeleteClientComponent.scss'
import { connect } from 'react-redux'
import { deleteClientDefault, deleteClientRequest, getClientRequest } from '../../../redux/client/Client.action';


import { Popconfirm, message } from 'antd';

const DeleteClient = (props) => {

    let { name, deleteClientRequest, getClientRequest } = props;

    const confirm = (name) => {
        const body = {
            name:name
        }
        deleteClientRequest(body)
        getClientRequest()
    }

    return (
        <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => confirm(name)}
            okText="Yes"
            cancelText="No"
        >
            <a href="#">Delete</a>
        </Popconfirm>
    )
}


const mapDispatchToProps = {
  getClientRequest,
  deleteClientRequest
}


export default connect(null, mapDispatchToProps)(DeleteClient);

