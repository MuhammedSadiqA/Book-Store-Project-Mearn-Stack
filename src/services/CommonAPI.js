// reqHeader for media files
import axios from "axios"

const CommonAPI = async (httpMethod, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{ "Content-Type": "application/json" }
    }
    return await axios (reqConfig).then(res=>res).catch(err=>err)
}

export default CommonAPI