import { Form, Input, InputNumber, DatePicker, Button} from 'antd';
import { useState } from 'react';
import './UpdateClientComponent.scss'
import { connect } from 'react-redux'
import { updateClientDefault, updateClientRequest } from '../../../redux/client/Client.action';


const layout = {
    labelCol: {
      span:10,
    },
    wrapperCol: {
      span: 20,
    },
};

const validateMessages = {
    required: '${label} is required!',
}

const UpdateClient = (props) => {

  const { updateClientRequest, updateClientDefault, error , data , active } = props;


  const [form] = Form.useForm();
  const[ isLoading ,setIsLoading ] = useState(false);

  
  const onSubmit = (values) => {
    form.submit();
  }


  const onFinish = (values) => {
    var formatDate = "DD.MM.YYYY";
    let client = values.client
      let body = { 
        name: client.name,
        age:String(client.age),
        address:client.address,
        dob:client.dob.format(formatDate),
        phone:client.phone
      } 
    updateClientRequest(body)
    setIsLoading(true)
    form.resetFields();
  };


    return ( 
        <div className="content-section" style={{display: active ? '': 'none'}}>
        <h1 style={{textAlign:'center',marginTop:'1rem'}}> UPDATE USER </h1>
        <Form form={form} name="control-hooks" {...layout} name="nest-messages" validateMessages={validateMessages} onFinish={onFinish}>
        <Form.Item
          name={['client', 'name']}
          label="Name"
          help= "immutable after creation "
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['client', 'age']}
          label="Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
         <InputNumber/>
        </Form.Item>
        <Form.Item
          name={['client', 'phone']}
          label="Phone"
        >
          <Input/>
        </Form.Item>
        <Form.Item name={['client', 'address']} 
        label="Address"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={['client', 'dob']} 
        label="Date of Birth"
        >
          <DatePicker/>
        </Form.Item>
      </Form>
      <div className="updateClient-footer">
        <Button onClick={onSubmit} loading={isLoading} type="primary">Submit</Button>
      </div>
      </div>


    )
}


const mapStateToProps = state => {
  return {
    data:state.updateClient.updateClientResults,
    error:state.updateClient.updateClientError,
    loading:state.updateClient.updateClientLoading,
    active:state.updateClient.updateClientActive,
  }
}


const mapDispatchToProps = {
  updateClientRequest,
  updateClientDefault,
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateClient);

