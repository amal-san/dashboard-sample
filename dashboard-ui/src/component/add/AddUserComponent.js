import { Button } from "antd"
import { connect } from "react-redux"
import { createClientDefault , updateClientDefault} from "../../redux/client/Client.action"


const AddUser = (props) => {

    const click = () => {
        if(!props.create) {
            props.createClientDefault();
            if(props.update)
                props.updateClientDefault();
        }
        
    }
    return (
        <div className="add-user">
            <Button type="primary" onClick={(e) => click()}> ADD USER </Button>
        </div>
    )
}

const mapDispatchToProps = {
    createClientDefault,
    updateClientDefault
}


const mapStateToProps = state => {
    return {
      create:state.createClient.createClientActive,
      update:state.updateClient.updateClientActive,
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
