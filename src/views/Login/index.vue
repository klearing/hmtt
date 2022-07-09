<template>
  <div>
    <van-nav-bar title="黑马头条-登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        required
        name="mobile"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写正确的手机号' ,pattern:/^1[3-9]\d{9}$/ }]"
      />
      <van-field
        v-model="user.code"
        type="password"
        required
        name="code"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写正确的密码' ,pattern:/^\d{6}$/ }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from '@/api'
import { Notify } from 'vant'
export default {
  name: 'LOGIN',
  data () {
    return {
      user: {
        mobile: '13888888888',
        code: '246810' // 密码是246810
      }
    }
  },
  methods: {
    // 提交方法，需要form整体通过验证才会触发
    async onSubmit (values) {
      try {
        const res = await loginAPI(values)
        console.log(res)
        Notify({ type: 'success', message: '登陆成功' })
      } catch (error) {
        Notify({ type: 'danger', message: '账号或密码错误' })
      }
    }
  }
}
</script>

<style scoped lang='less'>
// .van-nav-bar {
//   background-color: #007bff;
// }
// /* .van-nav-bar__title是.van-nav-bar组件内的标签，scoped添加的属性选中器会导致选不中组件内部 */
// // 所以deep的意思理解起来很简单，就是组件内部（深处）也能被选择
// /deep/ .van-nav-bar__title {
//   color: white;
// }
</style>
