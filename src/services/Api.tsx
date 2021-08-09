import axios from "axios";

const axiosIntance = axios.create({
    baseURL: 'https://free-nba.p.rapidapi.com',
    params: {page: '0'},
    headers: {
    'x-rapidapi-key': '6351e2cbf7msheea46ed454e4fc5p1e8c23jsnd753e245d5a1',
    'x-rapidapi-host': 'free-nba.p.rapidapi.com'
  }
})

export const Get = async(path:string, id = null) => {
    const finalPath = id ? `${path}/${id}` : path;
    try {
        const resp = await axiosIntance.get(finalPath);
        return resp;
    } catch (error) {
        return error;
    }
};
