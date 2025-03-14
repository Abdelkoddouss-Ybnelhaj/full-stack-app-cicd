import axios from "axios";

const instance = axios.create({ baseURL: "https://e-wallet.ddns.net/api/v1" });
instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
