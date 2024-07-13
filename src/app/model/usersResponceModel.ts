import { ResponceModel } from "./responceModel";
import { User } from "./user";
export interface userResponceModel extends ResponceModel{
    data:User[],
 
}