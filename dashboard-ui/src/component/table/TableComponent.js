import { Table, Tag, Space } from 'antd';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getClientDefault, getClientRequest } from '../../redux/client/Client.action';
import './TableComponent.scss'
import UpdateAndDelete from './UpdateAndDeleteComponent';


const columns = [
   {
    title: 'ID',
    dataIndex:'_id',
    key:'_id',
    render: text => <span>{text.slice(0,5)}</span>

   },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text =><span>{text}</span>
  },
  {
    title: 'Age',
    dataIndex:'age',
    key:'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Date of Birth',
    dataIndex: 'dob',
    key: 'dob',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, client) => (
      <UpdateAndDelete {...client}/>
    ),
  },
];




const TableComponent = (props) => {


    let { getClientRequest, getClientDefault , data ,error , loading } = props

    useEffect(() => {
        getClientRequest();
    },[])

    return (
            <Table className="table" rowKey={(client) => client.name} columns={columns}   dataSource={data ? data.Clients: null} />)
    }




const mapStateToProps = state => {
  return {
    data: state.getClient.getClientResults,
    error: state.getClient.getClientError,
    loading: state.getClient.getClientLoading
  }
}


const mapDispatchToProps = {
  getClientRequest,
  getClientDefault,
}


export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
    
