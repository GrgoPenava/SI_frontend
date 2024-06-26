import axios, { AxiosRequestConfig } from "axios";

const ApiService = {
  init(baseURL: any, token?: string) {
    axios.defaults.baseURL = baseURL;
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  },
  getBaseUrl() {
    return axios.defaults.baseURL;
  },
  get(resource: string, config?: AxiosRequestConfig) {
    return axios.get(resource, config);
  },
  post(resource: string, data: object, config?: AxiosRequestConfig) {
    return axios.post(resource, data, config);
  },
  put(resource: string, data: object) {
    return axios.put(resource, data);
  },
  delete(resource: string, data?: object) {
    return axios.delete(resource, { data: data });
  },
  patch(resource: string, data: object) {
    return axios.patch(resource, data, {
      headers: {
        "Content-Type": "application/json-patch+json",
      },
    });
  },
};

export default ApiService;
