/**
 *
 * ajax({
 *  method: 'post',
 *  url: 'url',
 *  data: {
 *
 *  }
 * }).then(res=>{
 *
 * })
 *
 * **/
import {Toast} from 'antd-mobile-rn'

function checkResponse(res) {
  switch (res.code) {
    case 100000:
      return res;
    case 200002:
      /**跳转至登出页**/
    return res;

    default:
      /**跳转至错误页**/
    return res;
  }
}

async function rawAjax(params) {
  const {
    url, method, data
  } = params;
  // let Api = '';
  // if (process.env.NODE_ENV === 'development') {
  //   Api = '/devApi'
  // } else {
  //   Api = ''
  // }

  if (method === 'GET' || method === 'get') {
    let params = '';
    if (data) {
      for (let k in data) {
        params = params + `&${k}=${data[k]}`;
      }
      params = '?' + params.substring(1, params.length);
    }
    return fetch(Api + url + params, {
      method: 'GET',
      credentials: 'include',
    }).then(res => res.json())
      .then(checkResponse)
      .catch(e => Toast.fail(e.toString()+' when GET'))
  } else if (method === 'POST' || method === 'post') {
    // console.log(data);
    let params = '';
    if (data) {
      for (let k in data) {
        // console.log(k, data[k]);
        params = params + `&${k}=${data[k]}`;
      }
      params = params.substring(1, params.length);
    }
    return fetch(Api + url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: params
    }).then(res => res.json())
      .then(checkResponse)
      .catch(e => Toast.fail(e.toString()+' when POST'))
  }
}

export function ajax(params) {
  return rawAjax(params).catch(e => Toast.fail(e.toString()+' when ajax'))
}
