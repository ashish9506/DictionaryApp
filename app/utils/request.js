import axios from 'axios'
import Noty from 'noty'
import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';
let app_id="68fda0c5"
let app_key="8bc189656f19dc5d526fa941977702ec"
export const axiosInstance=axios.create({
    baseURL:'https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-us',
    responseType:'json',
    headers: {
		
        app_id,
        app_key
	}
})

axiosInstance.interceptors.response.use(
    response=>{
        if(response.data) return response.data;
        return response;
    },
    err=>{
        new Noty({
            type:'error',
            text:'something went wrong',
            timeout:1000,
        }).show();
        return Promise.reject(err)
    }
)
/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(options){
    return axiosInstance(options)
}