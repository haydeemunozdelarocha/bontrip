import axios from "axios";
import {RegisterRequestData} from "./AuthService.I";

export class AuthService {
    public static register(user: RegisterRequestData) {
        return axios.post(`${process.env.REACT_APP_API_URL}users`, user);
    }
}
