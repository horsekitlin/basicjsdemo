import QS from "query-string";
import isEmpty from "lodash/isEmpty";

const defaultHeaders = {
  "Content-Type": "application/json"
};

const parseResponse = response => {
  const { status: statusCode, ok: responseOK } = response;
  const ok = responseOK && statusCode >= 200 && statusCode < 300;

  return response.text().then(body => {
    const result = isEmpty(body) ? {} : JSON.parse(body);
    return {
      statusCode,
      ok,
      result
    };
  });
};

export const fetchGet = (url, customHeaders) => {
  return fetch(url, {
    headers: { ...customHeaders }
  }).then(parseResponse);
};

export const fetchGetWithToken = (url, customHeaders, payload = {}) => {
  const realUrl =
    Object.keys(payload).length === 0 ? url : `${url}?${QS.stringify(payload)}`;

  return fetch(realUrl, {
    method: "GET",
    headers: {
      ...customHeaders
    }
  }).then(parseResponse);
};

export const fetchPost = (url, payload) => {
  return fetch(url, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(payload)
  }).then(parseResponse);
};

export const fetchPostWithToken = (
  url,
  customHeaders,
  payload = {},
  method = "POST"
) => {
  return fetch(url, {
    method,
    headers: { ...defaultHeaders, ...customHeaders },
    body: JSON.stringify(payload)
  }).then(parseResponse);
};

export const fetchPostFormDataWithToken = (
  url,
  customHeaders,
  payload = {},
  method = "POST"
) => {
  return fetch(url, {
    method,
    headers: { ...customHeaders },
    body: payload.formData
  }).then(parseResponse);
};

export const fetchPostWithTokenAndQS = (
  url,
  customHeaders,
  payload = {},
  qs = {},
  method = "POST"
) => {
  const realUrl =
    Object.keys(qs).length === 0 ? url : `${url}?${QS.stringify(qs)}`;

  return fetch(realUrl, {
    method,
    headers: { ...defaultHeaders, ...customHeaders },
    body: JSON.stringify(payload)
  }).then(parseResponse);
};
