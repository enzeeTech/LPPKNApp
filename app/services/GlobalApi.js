import axios from "axios"
import { initialWindowMetrics } from "react-native-safe-area-context";

const BASE_URL = "https://onthegocms.onrender.com/api"

const API_KEY = "03c346dfd9f0beed0e7f0fdb2229d34f695dfaf938ed0d5aa65d9c1a17a2354bbd2cd739d0f163155573533aeb28dcab1f2ae0c6df9b790ee5e9838b0ee32e88b37cc4ed5183f5ad869071d048e914114555d4069ec73c1c4139ee6890049da5b47ed7c85d3c86c14e2c5eb075544abfaa0daa240f88861ea314e110a4773b79"

const AxioInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer ${API_KEY}`,
    }
})

// Function to get all bulletin posts
const getBulletinPost = () => AxioInstance.get("/bulletin-posts?populate=*&pagination[start]=0&pagination[limit]=100&sort=Date:desc");

// Function to get all bulleting posts with query input 
const getBulletinPostWithQuery = (query) => {
    path = "/bulletin-posts?populate=*";
    path += query;
    // console.log(path);
    return AxioInstance.get(path);
};

// Function to get bulleting post by id
const getBulletinPostById = (id) => AxioInstance.get(`/bulletin-posts/${id}?populate=*`);

// Function to get sorotan posts
const getSorotanPost = () => AxioInstance.get("/sorotan-posts?populate=*&pagination[start]=0&pagination[limit]=100&sort=publishedAt:desc");

// Function to get sorotan post by id
const getSorotanPostById = (id) => AxioInstance.get(`/sorotan-posts/${id}?populate=*`);

// Function to get sorotan posts with query input
const getSorotanPostWithQuery = (query) => {
    path = "/sorotan-posts?populate=*";
    path += query;
    // console.log(path);
    return AxioInstance.get(path);
};

// Function to get lokasi selangor
const getLokasiSelangor = () => AxioInstance.get("/lokasi-selangors?populate=*");

// Function to get lokasi WP Kuala Lumpur
const getLokasiWPKL = () => AxioInstance.get("/lokasi-wp-kuala-lumpurs?populate=*");

// Function to get lokasi Kedah
const getLokasiKedah = () => AxioInstance.get("/lokasi-kedahs?populate=*");

// Function to get lokasi Perak
const getLokasiPerak = () => AxioInstance.get("/lokasi-peraks?populate=*");

// Function to get lokasi Perlis
const getLokasiPerlis = () => AxioInstance.get("/lokasi-perliss?populate=*");

// Function to get lokasi Pulau Pinang
const getLokasiPulauPinang = () => AxioInstance.get("/lokasi-pulau-pinangs?populate=*");

// Function to get lokasi Negeri Sembilan
const getLokasiNegeriSembilan = () => AxioInstance.get("/lokasi-negeri-sembilans?populate=*");

// Function to get lokasi Melaka
const getLokasiMelaka = () => AxioInstance.get("/lokasi-melakas?populate=*");

// Function to get lokasi Johor
const getLokasiJohor = () => AxioInstance.get("/lokasi-johors?populate=*");

// Function to get lokasi Pahang
const getLokasiPahang = () => AxioInstance.get("/lokasi-pahangs?populate=*");

// Function to get lokasi Terengganu
const getLokasiTerengganu = () => AxioInstance.get("/lokasi-terengganus?populate=*");

// Function to get lokasi Kelantan
const getLokasiKelantan = () => AxioInstance.get("/lokasi-kelantans?populate=*");

// Function to get lokasi Sarawak
const getLokasiSarawak = () => AxioInstance.get("/lokasi-sarawaks?populate=*");

// Function to get lokasi Sabah
const getLokasiSabah = () => AxioInstance.get("/lokasi-sabahs?populate=*");

// Function to get lokasi WP Labuan
const getLokasiWPLabuan = () => AxioInstance.get("/lokasi-wp-labuans?populate=*");

// Function to fetch all premises data
const getAllPremises = () => AxioInstance.get("/hubungi-collection/search?fetchAll=true&populate=*");

// Function to submit form data and upload files
const submitAduanForm = async (formData, files) => {
    try {
        const response = await AxioInstance.post("/aduan-forms", formData);

    } catch (error) {
        console.error("Error uploading form and files:", error);
    }
};

// Function to search and retrieve location data from the database
const searchCollection = (query, location) => {
    path = "/hubungi-collection/search?populate=*&keyword=" + query + "&locationKeyword=" + location;
    // console.log(path);
    return AxioInstance.get(path);
}

// Function to get home screen slider content
const getHomeSliderContent = () => AxioInstance.get("/home-screen-media-libraries?populate=*");

const getServiceByName = (name) => {
    return AxioInstance.get(`/perkhidmatans?filters[ServiceID][$eq]=${name}&populate[ServiceImage]=*&populate[Content][populate]=*`);
  };

export default {
    getBulletinPost,
    getBulletinPostWithQuery,
    getBulletinPostById,
    getSorotanPost,
    getSorotanPostById,
    getSorotanPostWithQuery,
    getLokasiSelangor,
    getLokasiWPKL,
    getLokasiKedah,
    getLokasiPerak,
    getLokasiPerlis,
    getLokasiPulauPinang,
    getLokasiNegeriSembilan,
    getLokasiMelaka,
    getLokasiJohor,
    getLokasiPahang,
    getLokasiTerengganu,
    getLokasiKelantan,
    getLokasiSarawak,
    getLokasiSabah,
    getLokasiWPLabuan,
    submitAduanForm,
    searchCollection,
    getHomeSliderContent,
    getAllPremises,
    getServiceByName
}

