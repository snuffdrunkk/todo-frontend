import axios from "axios"
import completedScreen from "../screens/completed-screen";
import * as SecureStore from "expo-secure-store"
import {err} from "react-native-svg";

export const BASE_URL = "http://localhost:1337"
const TIME_OUT= 30000
const BLOSSOM_TOKEN_NAME = "blossom_user_token"

const axiosInstance=axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
})

const save = async (key:string, value:string) => {
    try{
        await SecureStore.setItemAsync(key, value)
    } catch (error) {
        console.log("error in saveToken", error)
        throw(error)
    }
};

axiosInstance.interceptors.request.use(async (req) => {
    try{
        const access_token= await SecureStore.getItemAsync("blossom_user_token")
        req.headers.Authorization = access_token
        return req
    } catch (error){
        return req
    }
})

export const fetcher = (url:string) =>
    axiosInstance.get(url).then((res) => res.data)

export default axiosInstance
