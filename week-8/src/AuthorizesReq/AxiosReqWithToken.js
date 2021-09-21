import axios from 'axios'

function getAxiosWithTokenObj(){
    //Get token
    let token = localStorage.getItem("token")
    //add token to header of request obj  
    let apiURL = "http://localhost:1113"  
    let axiosRequestToken = axios.create({
        baseURL: apiURL,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return axiosRequestToken
}

export default getAxiosWithTokenObj