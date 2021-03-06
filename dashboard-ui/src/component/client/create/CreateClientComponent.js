import { Form, Input, InputNumber, DatePicker, Button} from 'antd';
import { useState } from 'react';
import './CreateClientComponent.scss'
import { connect } from 'react-redux'
import { createClientDefault, createClientRequest, getClientDefault, getClientRequest } from '../../../redux/client/Client.action';


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

const CreateClient = (props) => {

  const { createClientRequest, getClientRequest, createClientDefault, error , data , active } = props;


  const [form] = Form.useForm();
  const[ isLoading ,setIsLoading ] = useState(false);

  
  const onSubmit = (values) => {
    form.submit();
  }


  const onFinish = (values) => {
    setIsLoading(true)
    var formatDate = "DD.MM.YYYY";
    let client = values.client
      let body = { 
        name: client.name,
        age:String(client.age),
        address:client.address,
        dob:client.dob.format(formatDate),
        phone:client.phone
      } 
    createClientRequest(body)
    setTimeout(() => {
      getClientRequest();
    },1000)
    form.resetFields();
    setIsLoading(false)

  };


    return ( 
        <div className="content-section" style={{display: active ? '': 'none'}}>
        <h1 className="create" style={{textAlign:'center',marginTop:'1rem'}}> CREATE USER </h1>
        <Form form={form} className="create" name="control-hooks" {...layout} name="nest-messages" validateMessages={validateMessages} onFinish={onFinish}>
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
          maxLength={10}
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
      <div className="createClient-footer create">
        <Button onClick={onSubmit} loading={isLoading} type="primary">Submit</Button>
      </div>
      </div>


    )
}


const mapStateToProps = state => {
  return {
    data:state.createClient.createClientResults,
    error:state.createClient.createClientError,
    loading:state.createClient.createClientLoading,
    active:state.createClient.createClientActive
  }
}


const mapDispatchToProps = {
  createClientRequest,
  createClientDefault,
  getClientRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateClient);

