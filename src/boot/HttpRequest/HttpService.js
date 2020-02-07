import axios from 'axios';
import config from '../config/dotenv'
class ServicHttp {

    httpRequst(httpMethod, httpUrl, head = {}, getdata = {}, isFullUrl=false) {
        console.log("httpMethod ))))))))))", isFullUrl)
        let Fullurl="";
        if(!(isFullUrl)){
            Fullurl = config.dev.DIVAR_BACKEND_BACE_URL + httpUrl;
        }
        else{
            Fullurl = httpUrl
        }
        console.log('this is httpRequst=======>', {
            method: httpMethod,
            url: Fullurl,
            headers: head,
            data: getdata
        })
        return axios({
            method: httpMethod,
            url: Fullurl,
            headers: head,
            data: getdata
        })
    }

}
export default ServicHttp;