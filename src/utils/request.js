import axios from "axios";

// create an axios instance

import {getToken} from "./auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = baseUrl + requestUrl
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
});

// request interceptor
service.interceptors.request.use(
  // config before request. like config header...
  // TODO: config header
  config => {
    // config.headers['token'] = getToken();
    // console.log(config);
    return config
  },
  // do something with request error
  error => {
    // console.log(error);
  }
);

// response interceptor
service.interceptors.response.use(
  // get the response from server successfully
  // the response includes header,data,status...
  response => {
    const data = response.data;
    // TODO: write code judge the custom code

    // return Promise<FulFilled> data
    return data;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default service;
