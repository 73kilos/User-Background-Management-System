<template>
    <div class="page-createuser">
      <el-form label-width="350px" @submit="addUser">
        <el-form-item label="用户名">
          <el-input style="width: 400px;" v-model="users.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input style="width: 400px;" v-model="users.password"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input style="width: 400px;" v-model="users.tel"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input style="width: 400px;" v-model="users.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="users.sex" label="男">男</el-radio>
          <el-radio v-model="users.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="简介">
          <el-input
            v-model="users.description"
            style="width: 400px;"
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="addUser">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '',
        users: {}
      }
    },
    methods: {
      // 添加用户
      addUser(e) {
        e.preventDefault()
        if (!this.users.username || !this.users.password || !this.users.tel || !this.users.age || !this.users.description) {
          return this.$message.error('信息不能为空!')
        }
        const newUser = {
          username: this.users.username,
          password: this.users.password,
          tel: this.users.tel,
          age: this.users.age,
          sex: this.users.sex,
          description: this.users.description
        }
        // 提交数据
        this.$http
          .post('http://localhost:3000/users', newUser)
          // 提示用户添加成功
          .then(this.$message({
            message: '信息修改成功',
            type: 'success'
          }))
          // 跳转到用户列表页
          .then(this.$router.push({ path: '/users/userlist' }))
      }
    }
  }
</script>
