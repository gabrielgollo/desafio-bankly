import axios from "axios";

const { ACCOUNT_API_URL } = process.env

const AccountAPI = axios.create({
    url: ACCOUNT_API_URL
})

export default AccountAPI