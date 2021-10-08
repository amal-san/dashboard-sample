import { Types } from './Client.action';



const initialStateForGet = {
    getClientResults:[],
    getClientError:[],
    getClientLoading:true,
    active:false
};

 const getClientReducer = (state = initialStateForGet, action) => {
    switch (action.type) {
      case Types.GET_CLIENT_SUCCESS:
        return {
          getClientResults: action.data,
          getClientLoading:false,
          active:true
  
      };
      case Types.GET_CLIENT_ERROR:
          return {
          getClientError:action.err,
          getClientLoading:false
      };
      case Types.GET_CLIENT_DEFAULT:
        return state
        
      default:
        return state;
    }
  };

const initialStateForCreate = {
  createClientResults:[],
  createClientError:[],
  createClientLoading:true,
  createClientActive:false,
};

const createClientReducer = (state = initialStateForCreate, action) => {
  switch (action.type) {
    case Types.CREATE_CLIENT_SUCCESS:
      return {
        createClientResults: action.data,
        createClientLoading:false

    };
    case Types.CREATE_CLIENT_ERROR:
        return {
        createClientError:action.err,
        createClientLoading:false
    };
    case Types.CREATE_CLIENT_DEFAULT:
        return {
            createClientActive:!state.createClientActive,
        }
      
    default:
      return state;
  }
};

const initialStateForUpdate = {
    updateClientResults:[],
    updateClientError:[],
    updateClientLoading:true,
    updateClientActive:false,

  };
  
 const updateClientReducer = (state = initialStateForUpdate, action) => {
    switch (action.type) {
      case Types.UPDATE_CLIENT_SUCCESS:
        return {
          updateClientResults: action.data,
          updateClientLoading:false
  
      };
      case Types.UPDATE_CLIENT_ERROR:
          return {
          updateClientError:action.err,
          updateClientLoading:false
      };
      case Types.UPDATE_CLIENT_DEFAULT:
        return {
            updateClientActive:!state.updateClientActive
        }
        
      default:
        return state;
    }
};

const initialStateForDelete = {
  deleteClientResults:[],
  deleteClientError:[],
  deleteClientLoading:true
};

 const deleteClientReducer = (state = initialStateForDelete, action) => {
  switch (action.type) {
    case Types.DELETE_CLIENT_SUCCESS:
      return {
        deleteClientResults: action.data,
        deleteClientLoading:false

    };
    case Types.DELETE_CLIENT_ERROR:
        return {
        deleteClientError:action.err,
        deleteClientLoading:false
    };
    case Types.DELETE_CLIENT_DEFAULT:
      return state
      
    default:
      return state;
  }
};


export {
    createClientReducer,
    updateClientReducer,
    deleteClientReducer,
    getClientReducer
}