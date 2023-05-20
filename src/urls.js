const MAIN_URL = process.env.REACT_APP_SERVER;


export const API_URLS = {
    MAIN_URL,
    CATEGORY: MAIN_URL + "api/products?category=",
    ALL: MAIN_URL + "api/products",
}