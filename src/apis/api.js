import { localDomain } from './libs/route';
import { fetchPost, fetchPostWithToken, fetchPostFormDataWithToken, fetchGetWithToken, fetchPostWithTokenAndQS } from './libs/fetch';

export const loginResult = (payload) =>
fetchPost(localDomain('login'), payload);

export const logoutResult = ({ customHeaders }) =>
  fetchPostWithToken(localDomain('logout'), customHeaders);