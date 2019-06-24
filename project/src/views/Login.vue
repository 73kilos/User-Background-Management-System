<template>
  <div>
    <el-card class="page-login" header="请先登录">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
  .page-login {
    text-align: center;
    width: 25rem;
    margin: 10rem auto;
    .login-btn {
      margin: 5px 140px;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    login() {
      if (!this.model.username || !this.model.password) {
        return this.$message.error('信息不能为空!')
      }
      this.$router.push({ path: '/home' })
    }
  }
}
</script>