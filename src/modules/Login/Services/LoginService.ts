//@ts-ignore
import { AxiosResponse } from "axios";
import ApiService from "../../../Services/ApiService";

export default class LoginService {
  async login(object: {}): Promise<any> {
    const response = await ApiService.post(`api/rest/v1/auth/login`, object);
    return response.data;
  }

  async loginInjection(object: {}): Promise<any> {
    const response = await ApiService.post(`api/rest/v1/auth/login2`, object);
    return response.data;
  }
}
