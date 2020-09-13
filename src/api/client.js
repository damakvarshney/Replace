import { create } from "apisauce";
import cache from "../utility/cache";

const client = create({
  baseURL: "http://192.168.42.169:3000/api/",
});

const get = client.get;
client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  console.log(response.problem);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default client;
