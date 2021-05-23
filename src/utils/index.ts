import axios from 'axios';

export const apiCall = async <T> (id:number=0): Promise<T> => {
    try {
        let url:string = 'https://gorest.co.in/public-api/users';
        if (id > 0) {
            url = url + `/${id}`
        }

        const allUsers = await axios(url);
        const users = allUsers.data.data;
        return users;
    } catch (error) {
        throw(error)
    }
}

export interface User {
    id:number;
    name:string;
    email:string;
    gender:string;
    status:string;
    created_at:string;
    updated_ad:string;
}