import axios from "axios";

const { VITE_GITHUB_TOKEN: token } = process.env;

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const baseRequest = axios.create({
  baseURL: ` https://api.github.com/user/repos`,
});

export const apiGetRepos = () => baseRequest.get();
