import { reactive } from "vue";

export const store = reactive({

})





// import axios from 'axios';

// const apiKey = '5b64bb8553442712f5b4d63bfbe74199';
// const apiUrl = 'https://api.themoviedb.org/3';


// export async function callAPI(endpoint, params = {}) {
//     try {
//         const response = await axios.get(`${apiUrl}/${endpoint}`, {
//             params: {
//                 api_key: apiKey,
//                 ...params,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// }