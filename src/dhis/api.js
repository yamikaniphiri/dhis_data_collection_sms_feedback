
import {baseUrl, basicAuth} from './config';
class Api {
  getUserGroup(){
    let payload = "userGroups/FUf0ROq4wYr.json?fields=id,name,users[id,name]"
    
    return getJSON(payload)
  }
  getUserOU(userId){
    let payload = "users/"+userId+".json?fields=organisationUnits[id,name]"
    
    return getJSON(payload)
  }
}

// Send GET request
function getJSON(path) {
    return fetch( `${baseUrl}/${path}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Authorization': basicAuth,
        'Accept': 'application/json',
      }
    } )
      .catch( error => error )
      .then( response => response.json() );
  };
  
  export default new Api();