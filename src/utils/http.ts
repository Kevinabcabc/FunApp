  
export const Get = (url:string,data?:{[key:string]: string|number}) => {
    if(data){
        url = url + '?';
        Object.keys(data).forEach((key)=>{
            url = url + `${key}=${data[key]}` + '&'
        })
        url = url.slice(0,url.length-1);
    }
    return fetch(url, {
      method: 'get'
    })
    .then(response => response.json())
    .then(result => {
      return result
    })
  }