// 此文件内为token相关方法
const key = 'geek-itheima'

// 设置
export const setToken = (token) => {
  localStorage.setItem(key, token)
}
// 获取
export const getToken = () => {
  localStorage.getItem(key)
}
// 移除
export const removeToken = () => {
  localStorage.removeItem(key)
}
