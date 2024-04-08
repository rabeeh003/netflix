import axios from "axios";
import { BaseUrl } from "../constants/constant";
const Axios = axios.create({
    baseURL:BaseUrl,
})
export default Axios