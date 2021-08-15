import axios from "axios";

const axiosIntance = axios.create({
    baseURL: 'http://localhost:8000/users',
    headers: {
        'Content-Type': 'application/json',
  }
})


export const Post = async(path:any, data:any) => {
    try {
        const resp = await axiosIntance.post(path,data);
        return resp;
    } catch (error) {
        return error;
    }
    
}

export const postLogin = async (data:any) => {
    const resp = await Post('/login', data);
    return resp;
}

export const postRegister = async (data:any) => {
    const resp = await Post('/register', data);
    return resp;
}