// import { useEffect, useState } from 'react';
// import { connect } from 'react-redux'
// import { updateClientDefault, updateClientRequest } from '../../../redux/client/Client.action';



// const UpdateClient = (props) => {

//   let client = null;
//   let user;
//   let name = localStorage.getItem('name')
//   let { updateClientRequest, updateClientDefault, error , data , active , users } = props;


//   useEffect(()=>{
//     if(props.users){
//       if(users.length > 0){
//         user = users.filter(user => user.name === name )[0]
//         console.log(user)
//       }
//     }
//   },[])
  



//   const onFinish = (initialValues) => {
//     var formatDate = "DD.MM.YYYY";
//     let client = initialValues.client
//       let body = { 
//         name: client.name,
//         age:String(client.age),
//         address:client.address,
//         dob:client.dob.format(formatDate),
//         phone:client.phone
//       } 
//     updateClientRequest(body)
//     setIsLoading(true)
//     form.resetFields();
//   };

//     return (
//       <div className="content-section" style={{ display: active ? '' : 'none' }}>
//         <h1 style={{ textAlign: 'center', marginTop: '1rem' }}> UPDATE USER </h1>
//         <Form form={form} name="control-hooks" {...layout} name="nest-messages" validateMessages={validateMessages} onFinish={onFinish}>
//           <Form.Item
//             name={['client', 'name']}
//             label="Name"
//             initialValue={localStorage.getItem('name')}
//             rules={[
//               {
//                 required: true,
//               },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name={['client', 'age']}
//             label="Age"
//             initialValue={user ? user.age : null}
//             rules={[
//               {
//                 required: true,
//               },
//             ]}
//           >
//             <InputNumber />
//           </Form.Item>
//           <Form.Item
//             name={['client', 'phone']}
//             label="Phone"
//             initialValue={user ? user.phone : null}

//           >
//             <Input />
//           </Form.Item>
//           <Form.Item name={['client', 'address']}
//             label="Address"
//             initialValue={user ? user.address : null}
//           >
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item name={['client', 'dob']}
//             label="Date of Birth"
//             initialValue={user ? user.dob : null}
//           >
//             <DatePicker />
//           </Form.Item>
//         </Form>
//         <div className="updateClient-footer">
//           <Button onClick={onSubmit} loading={isLoading} type="primary">Submit</Button>
//         </div>
//       </div>
//     )
// }




import React, { useState } from 'react';
import { Form, Modal, Input, InputNumber, DatePicker, Button} from 'antd';
import './UpdateClientComponent.scss'
import { getClientDefault, updateClientRequest } from '../../../redux/client/Client.action';
import { connect } from 'react-redux';


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


const UpdateClient = ({ name, age , address, phone ,dob , updateClientRequest }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const[ isLoading ,setIsLoading ] = useState(false);

  
  const onSubmit = (initialValues) => {
    setIsLoading(true)
    form.submit();
  }

  const onFinish = (initialValues) => {

    var formatDate = "DD.MM.YYYY";
    let client = initialValues.client
      let body = { 
        name: client.name,
        age:String(client.age),
        address:client.address,
        dob:client.dob.format(formatDate),
        phone:client.phone
      } 
    updateClientRequest(body)
    getClientDefault()
    setIsLoading(false)
    form.resetFields();
    setIsModalVisible(false)
  };


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="secondary" onClick={showModal}>
        Edit
      </Button>
      <Modal footer={[]} title="Edit Details" visible={isModalVisible} onCancel={handleCancel}>
         <Form form={form} name="control-hooks" {...layout} name="nest-messages" validateMessages={validateMessages} onFinish={onFinish}>
          <Form.Item
            name={['client', 'name']}
            label="Name"
            initialValue={name}
            
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input disabled={true} />
          </Form.Item>
          <Form.Item
            name={['client', 'age']}
            label="Age"
            initialValue={age}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={['client', 'phone']}
            label="Phone"
            initialValue={phone}

          >
            <Input />
          </Form.Item>
          <Form.Item name={['client', 'address']}
            label="Address"
            initialValue={address}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item name={['client', 'dob']}
            label="Date of Birth"
            initialValue={null}
          >
            <DatePicker />
          </Form.Item>
        </Form>
        <div className="updateClient-footer">
          <Button onClick={onSubmit} loading={isLoading} type="primary">Submit</Button>
        </div>
      </Modal>
    </>
  );
};



const mapDispatchToProps = {
  updateClientRequest,
  getClientDefault
}


export default connect(null, mapDispatchToProps)(UpdateClient);
