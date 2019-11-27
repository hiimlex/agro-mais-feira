import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: 'https://agromais-feira-api.herokuapp.com/'
})

axiosInstance.interceptors.request.use(
  function (config) {
    const authToken = window.localStorage.token;
    if (authToken) {
      config.headers.token = authToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  login(body) {
    return Axios.post(
      "https://agromais-feira-api.herokuapp.com/login",
      body
    );
  },
  validaToken() {
    return axiosInstance.get(
      "verify_token"
    )
  }
}
export function getCep(cep) {
  return Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
