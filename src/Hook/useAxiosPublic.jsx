import axios from "axios";


const axiosPublic = axios.create({
    baseURL:'https://diverse-deal-server.vercel.app'
})

const useAxiosPublic = () => {
   return axiosPublic;
};

export default useAxiosPublic;