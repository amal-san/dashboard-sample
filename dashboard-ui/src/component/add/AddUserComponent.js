import { Button } from "antd"
import { useState } from "react"
import { connect } from "react-redux"
import { createClientDefault , updateClientDefault} from "../../redux/client/Client.action"


const AddUser = (props) => {

    const [ text , setText ] = useState('ADD USER')

    const click = () => {
        text === 'CLEAR' ? setText('ADD USER') : setText("CLEAR")
        props.createClientDefault();
        
    }
    return (
        <div className="add-user">
            <Button type="primary" onClick={(e) => click(e)}> {text} </Button>
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
