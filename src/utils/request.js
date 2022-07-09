// 基于axios封装网络请求，每个程序员不太一样，但思想相同
import theAxios from 'axios'
const axios = theAxios.create({
  // 配置基地址
  baseURL: 'http://toutiao.itheima.net',
  timeout: 20000
})

// 常规的axios请求
/*
  axios({
    url:"请求地址"，
    method:"请求方式"，
    params：{}，
    data：{}，
    headers:{}
  })
*/
// export default axios
// 如果万一将来需要替换，如使用jquery的$.ajax方法，那么该方法传入的配置项是不一样的，此时所有的api接口调用都要相应修改，因此应该进行优化
// 所以不能简单导出
export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
