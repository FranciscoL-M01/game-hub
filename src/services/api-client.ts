import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '289c03e87ffc4da58453674a22faa397'
    }
})