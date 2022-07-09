import request from '@/utils/request.js'
// 获取所有频道

// axios内部会把参数对象转为json字符串格式发送后台，
// axios内部会自动携带在headers里：content-type:'application/json'
// 登录接口
export const loginAPI = ({ mobile, code }) => request({
  url: '/v1_0/authorizations',
  method: 'POST',
  // 请求体写在data中
  data: {
    mobile,
    code
  }
})

export const getAllChannelsAPI = () => request({
  url: '/v1_0/channels'
})
