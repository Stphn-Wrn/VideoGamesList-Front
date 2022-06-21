import axios from "axios";
import API from "../../env.js";

const gameService = {

  baseURL: API.baseURL,


  async getAll(){
    const res = await axios.get(this.baseURL+'getAll');
    return res.data
  },

}

export default gameService;