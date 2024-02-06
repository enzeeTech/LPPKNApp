import axios from "axios"

const BASE_URL = "https://onthegocms.onrender.com/api"

const API_KEY = "03c346dfd9f0beed0e7f0fdb2229d34f695dfaf938ed0d5aa65d9c1a17a2354bbd2cd739d0f163155573533aeb28dcab1f2ae0c6df9b790ee5e9838b0ee32e88b37cc4ed5183f5ad869071d048e914114555d4069ec73c1c4139ee6890049da5b47ed7c85d3c86c14e2c5eb075544abfaa0daa240f88861ea314e110a4773b79"

const AxioInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer ${API_KEY}`
    }
})

// Function to get all bulletin posts
const getBulletinPost = () => AxioInstance.get("/bulletin-posts?populate=*");

// Function to get bulleting post by id
const getBulletinPostById = (id) => AxioInstance.get(`/bulletin-posts/${id}?populate=*`);

// Function to get perkhidmatan buttons
const getPerkhidmatanOptions = () => AxioInstance.get("/perkhidmatan-options?populate=*");

export default {
    getBulletinPost,
    getBulletinPostById,
    getPerkhidmatanOptions,
}

