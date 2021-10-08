import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from './Client.action';
import axios from 'axios'
import { gql } from '@apollo/client';
import { print } from 'graphql/language/printer';


const CREATE_CLIENT = gql` 
mutation createClient($name:String! $age:String! $address:String $dob:String $phone:String) {
    createClient(name:$name age:$age address:$address dob:$dob phone:$phone){
     _id
     name
     address
     dob
     phone
  }
}`

const createClientApi = (parms) => {
    console.log(parms)
    return axios.post('/', {
        query:print(CREATE_CLIENT),
        variables: {
            name:parms.name,
            age:parms.age,
            address:parms.address ? parms.address : null,
            dob:parms.dob ? parms.dob : null,
            phone:parms.phone ? parms.phone: null
        },
        headers:{
            'Content-Type': 'application/json',

        }
    });
};

function* createClient(body) {
    try {
      const result = yield call(createClientApi,body.body);
      if(result.data.errors) throw result.data.errors
      yield put(actions.createClientSuccess(result.data.data));
    } catch (error) {
      yield put(actions.createClientError(error))
    }
  }
  
  function* CreateClientSaga() {
    yield takeEvery(actions.Types.CREATE_CLIENT_REQUEST, createClient);
}



const GET_CLIENT = gql`
{  Clients {
    _id
    name
    age
    address
    dob
    phone
  }
}`

const getClientApi = () => {
    return axios.post('/', {
        query:print(GET_CLIENT),
        headers:{
            'Content-Type': 'application/json',

        }
    });
};

function* getClient() {
    try {
      const result = yield call(getClientApi);
      if(result.data.errors) throw result.data.errors
      yield put(actions.getClientSuccess(result.data.data));
    } catch (error) {
      yield put(actions.getClientError(error))
    }
  }
  
  function* GetClientSaga() {
    yield takeEvery(actions.Types.GET_CLIENT_REQUEST, getClient);
}




const UPDATE_CLIENT = gql` 
mutation updateClient($name:String! $age:String! $address:String $dob:String $phone:String) {
    updateClient(name:$name age:$age address:$address dob:$dob phone:$phone){
     _id
     name
     age
     address
     dob
     phone
  }
}`

const updateClientApi = (parms) => {
    return axios.post('/', {
        query:print(UPDATE_CLIENT),
        variables: {
            name:parms.name,
            age:parms.age,
            address:parms.address ? parms.address : null,
            dob:parms.dob ? parms.dob : null,
            phone:parms.phone ? parms.phone: null
        },
        headers:{
            'Content-Type': 'application/json',

        }
    });
};

function* updateClient(body) {
    try {
      const result = yield call(updateClientApi,body.body);
      if(result.data.errors) throw result.data.errors
      yield put(actions.updateClientSuccess(result.data.data));
    } catch (error) {
      yield put(actions.updateClientError(error))
    }
  }
  
  function* UpdateClientSaga() {
    yield takeEvery(actions.Types.UPDATE_CLIENT_REQUEST, updateClient);
}


const DELETE_CLIENT = gql` 
mutation deleteClient($name:String!) {
    deleteClient(name:$name){
     _id
     name
     address
     dob
     phone
  }
}`

const deleteClientApi = (parms) => {
    return axios.post('/', {
        query:print(DELETE_CLIENT),
        variables: {
            name:parms.name,
        },
        headers:{
            'Content-Type': 'application/json',

        }
    });
};

function* deleteClient(body) {
    try {
      const result = yield call(deleteClientApi,body.body);
      if(result.data.errors) throw result.data.errors
      yield put(actions.deleteClientSuccess(result.data.data));
    } catch (error) {
      yield put(actions.deleteClientError(error))
    }
  }
  
  function* DeleteClientSaga() {
    yield takeEvery(actions.Types.DELETE_CLIENT_REQUEST, deleteClient);
}


export {
    GetClientSaga,
    CreateClientSaga,
    UpdateClientSaga,
    DeleteClientSaga
}