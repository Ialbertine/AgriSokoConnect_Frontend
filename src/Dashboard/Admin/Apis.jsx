import axios from "axios";
const API = import.meta.env.VITE_BASE_API;

// export const FetchFarmers = () => {
//     return axios.get("https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/farmers")
//         .then((response) => {
//             console.log('fetch farmers')
//             return response.data.result;
//         })
//         .catch((err) => {
//             console.log(err);
//             throw err;
//         });
// };

export const CountFarmers = () => {
    return axios.get("https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalFarmer")
        .then((response) => {
            return response.data.totalFarmer;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const FetchBuyers = () => {
    return axios.get("http://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/buyers")
        .then((response) => {
            return response.data.Buyers;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const CountBuyers = () => {
    return axios.get("http://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalBuyer")
        .then((response) => {
            return response.data.totalBuyer;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const FetchOrders = () => {
    return axios.get("http://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/retrieve")
        .then((response) => {
            return response.data.order;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};