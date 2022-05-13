import axios from 'axios'


export const allClient = async () => {
    var config = {
      method: 'get',
      url: '/api/v1/client/',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
      },
    }
  
    return await axios(config)
  }
  
  
  
  export const clientProfile = async (user_id) => {
    var config = {
      method: 'get',
      url: '/api/v1/client/' + parseInt(user_id),
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
      },
    }
  
    return await axios(config)
  }
  
  
  
  export const addClient = async (Data) => {
    var data = Data
  
    var config = {
      method: 'post',
      url: '/api/v1/client/add',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
      },
      data: data,
    }
  
    return await axios(config)
  }
  
  
  
  export const deleteClient = async (client_id) => {
     var config = {
      method: 'delete',
      url: '/api/v1/client/delete/' + parseInt(client_id),
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
      },
      data: {
        "deleted" : true
      },
    }
  
  
    return await axios(config)
  }
  
  
  
  export const updateClient = async (Data,user_id) => {
    var data = Data
  
    var config = {
      method: 'put',
      url: '/api/v1/client/update/'+ parseInt(user_id),
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('_tkn_'),
      },
      data: data,
    }
  
    return await axios(config)
  }