import axios from "axios"

import { useSelector } from "react-redux";

export const useHttp = () => {
    const { token } = useSelector(state => state.authUser);

    return axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'X-Requested-Width': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Authorization': token ? `Bearer ${token}` : null
        },
        withCredentials: true,
    });;
}

// export const http = axios.create({
//     baseURL: 'http://localhost:8000',
//     headers: {
//         'X-Requested-Width': 'XMLHttpRequest',
//         'Accept': 'application/json'
//     },
//     withCredentials: true,
// });;

