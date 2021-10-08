import './DeleteClientComponent.scss'
import { connect } from 'react-redux'
import { deleteClientDefault, deleteClientRequest } from '../../../redux/client/Client.action';


import { Popconfirm, message } from 'antd';

const DeleteClient = (props) => {

    let { name } = props;

    const confirm = (name) => {
        console.log(name)
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

export default DeleteClient;


// const mapStateToProps = state => {
//   return {
//     data:state.updateClient.updateClientResults,
//     error:state.updateClient.updateClientError,
//     loading:state.updateClient.updateClientLoading,
//     active:state.updateClient.updateClientActive,
//   }
// }


// const mapDispatchToProps = {
//   updateClientRequest,
//   updateClientDefault,
// }


// export default connect(mapStateToProps, mapDispatchToProps)(UpdateClient);

