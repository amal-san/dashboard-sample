
export const Types = {

    GET_CLIENT_REQUEST: 'GET_CLIENT_REQUEST',
    GET_CLIENT_SUCCESS: 'GET_CLIENT_SUCCESS',
    GET_CLIENT_ERROR:'GET_CLIENT_ERROR',
    GET_CLIENT_DEFAULT:'GET_CLIENT_DEFAULT',

    CREATE_CLIENT_REQUEST: 'CREATE_CLIENT_REQUEST',
    CREATE_CLIENT_SUCCESS: 'CREATE_CLIENT_SUCCESS',
    CREATE_CLIENT_ERROR:'CREATE_CLIENT_ERROR',
    CREATE_CLIENT_DEFAULT:'CREATE_CLIENT_DEFAULT',

    UPDATE_CLIENT_REQUEST: 'UPDATE_CLIENT_REQUEST',
    UPDATE_CLIENT_SUCCESS: 'UPDATE_CLIENT_SUCCESS',
    UPDATE_CLIENT_ERROR:'UPDATE_CLIENT_ERROR',
    UPDATE_CLIENT_DEFAULT:'UPDATE_CLIENT_DEFAULT',

    DELETE_CLIENT_REQUEST: 'DELETE_CLIENT_REQUEST',
    DELETE_CLIENT_SUCCESS: 'DELETE_CLIENT_SUCCESS',
    DELETE_CLIENT_ERROR:'DELETE_CLIENT_ERROR',
    DELETE_CLIENT_DEFAULT:'DELETE_CLIENT_DEFAULT',
  };

  // GET


  export const getClientRequest = () => ({
    type: Types.GET_CLIENT_REQUEST,
  })

  export const getClientDefault = () => ({
    type:Types.GET_CLIENT_DEFAULT
  })

  export const getClientSuccess = data => ({
    type: Types.GET_CLIENT_SUCCESS,
    data 
  })

  export const getClientError = err => ({
      type:Types.GET_CLIENT_ERROR,
      err
  })



  //CREATE
  
  export const createClientRequest = body => ({
    type: Types.CREATE_CLIENT_REQUEST,
    body
  })

  export const createClientDefault = () => ({
    type:Types.CREATE_CLIENT_DEFAULT,
  })

  export const createClientSuccess = data => ({
    type: Types.CREATE_CLIENT_SUCCESS,
    data 
  })

  export const createClientError = err => ({
      type:Types.CREATE_CLIENT_ERROR,
      err
  })

  

  //UPDATE


  export const updateClientRequest = body => ({
    type: Types.UPDATE_CLIENT_REQUEST,
    body
  })

  export const updateClientDefault = () => ({
    type:Types.UPDATE_CLIENT_DEFAULT
  })

  export const updateClientSuccess = data => ({
    type: Types.UPDATE_CLIENT_SUCCESS,
    data 
  })

  export const updateClientError = err => ({
      type:Types.UPDATE_CLIENT_ERROR,
      err
  })

// DELETE

export const deleteClientRequest = body => ({
    type: Types.DELETE_CLIENT_REQUEST,
    body
  })

  export const deleteClientDefault = () => ({
    type:Types.DELETE_CLIENT_DEFAULT
  })

  export const deleteClientSuccess = data => ({
    type: Types.DELETE_CLIENT_SUCCESS,
    data 
  })

  export const deleteClientError = err => ({
      type:Types.DELETE_CLIENT_ERROR,
      err
  })