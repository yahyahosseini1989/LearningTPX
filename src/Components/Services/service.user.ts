import { IUser } from './../Models/model.user';
import Axios from "axios";

export class UserService {
    getAll(): Promise<{data:Array<IUser>}>{
        return Axios.get("https://next.json-generator.com/api/json/get/NJEkPer9u")
    }
    postData(data:IUser): Promise<{data:Array<IUser>}>{
        return Axios.post("https://next.json-generator.com/api/json/get/NJEkPer9u", data)
    }
    deleteData(id:any): Promise<any>{
        return Axios.delete("https://next.json-generator.com/api/json/get/NJEkPer9u", id)
    }
}