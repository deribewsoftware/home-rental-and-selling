import axios from "axios";

export default axios.create({
  baseURL:"http://localhost:3336/user/signin"
})