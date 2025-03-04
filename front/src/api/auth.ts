import axios from "axios";

type RequestUser = {
    email: string;
    password: string;
}

const postSignup = async ({email, password}: RequestUser):Promise<void> => {
    const { data } = await axios.post('http://localhost:3030/auth/signup', {
        email,
        password
    });

    return data;
}

const postLogin = async ()