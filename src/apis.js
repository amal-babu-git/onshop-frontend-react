export const API = process.env.REACT_APP_BACKEND;

export const STORE_API = `${API}store/`
export const STORE_PRODUCTS_API = `${API}store/products/`
export const STORE_COLLECTIONS_API = `${API}store/collections/`
export const STORE_CARTS_API = `${API}store/carts/`
export const STORE_ORDEERS_API = `${API}store/orders/`


export const REGISTER_NEW_USER_API = `${API}auth/users/`



// constants 
export const IDLE = 'idle'
export const LOADING = 'loading'
export const SUCCESS = 'succeeded'
export const FAILED = 'failed'

export default API;

// REGEXP
export const INDIAN_PHONE_REGEXP = /^[6-9]\d{9}$/gi;
export const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;