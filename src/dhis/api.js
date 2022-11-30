
import {baseUrl, basicAuth} from './config';
class Api {
  //get use in a group
  getUserGroup(){
    let payload = "userGroups/FUf0ROq4wYr.json?fields=id,name,users[id,name]"
    
    return getJSON(payload)
  }
  //get user ou based on id
  getUserOU(userId){
    let payload = "users/"+userId+".json?fields=organisationUnits[id,name]"    
    return getJSON(payload)
  }
  //get analytics data
  getAnalytictsevenData(programId,OUId){
    let payload = "analytics/events/aggregate/"+programId+".json?dimension=ou:"+OUId+"&dimension=pe:THIS_YEAR&filter=e3vz0w6dU7o.RSr9YoqpPS7&stage=e3vz0w6dU7o&displayProperty=NAME&outputType=EVENT" 
    return getJSON(payload)
  }
  
}
// https://ccdev.org/chistest/api/29/
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