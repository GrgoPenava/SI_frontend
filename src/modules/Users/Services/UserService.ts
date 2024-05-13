//@ts-ignore
import { AxiosResponse } from "axios";
import { User } from "../Services/Types/UserTypes";
import ApiService from "../../../Services/ApiService";

export default class UsersService {
  async getAllUsers(): Promise<User[]> {
    const response = await ApiService.get(`api/rest/v1/users`);
    return response.data;
  }

  async getAllUsersFromFile(): Promise<User[]> {
    const response = await fetch(`/users.json`);
    const users: User[] = await response.json();
    return users;
  }
}
