import axiosInstance from "./config";

type RegisterUserType = IUser
export const registerUser = async ({email, name, password}: RegisterUserType) => {
    try{
        const response= await axiosInstance.post("/users/create", {
            email,
            name,
            password
        })
        return response.data.user
    } catch (error) {
        console.log("error in registerUser", error)
        throw(error)
    }
};