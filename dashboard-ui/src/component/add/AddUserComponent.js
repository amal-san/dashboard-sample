import { Button } from "antd"
import { useState } from "react"
import { connect } from "react-redux"
import { createClientDefault , updateClientDefault} from "../../redux/client/Client.action"


const AddUser = (props) => {

    const [ show , setShow ] = useState(false)



    const click = () => {
        props.createClientDefault();
        setShow(!show)
        
    }
    return (
        <div className="add-user">
            <Button type="primary" onClick={(e) => click(e)}> ADD USER </Button>
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
      update:state.updateClient.updateClientResults,
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
