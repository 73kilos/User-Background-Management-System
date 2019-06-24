<template>
  <div class="page-userdetails">
    <div class="btns">
      <el-button class="btn-goback" @click="goBack">返回</el-button>
      <el-button class="btn-edit" type="primary" @click="editUser">编辑</el-button>
      <el-button class="btn-delete" type="danger" @click="deleteUser(users.id)">删除</el-button>
    </div>
    <el-card class="box-card">
      <p>用户ID: <span>{{users.id}}</span></p>
      <p>用户名: <span>{{users.username}}</span></p>
      <p>密码: <span>{{users.password}}</span></p>
      <p>性别: <span>{{users.sex}}</span></p>
      <p>简介: <span>{{users.description}}</span></p>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
  .page-userdetails {
    margin: 0 auto;
    .box-card {
      width: 500px;
      margin: 50px auto;
      font-size: 16px;
      span {
        margin-left: 5px;
      }
    }
  }
</style>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    // 请求数据
    getData(id) {
      this.$http
        .get("http://localhost:3000/users/" + id)
        .then(({ data }) => {
          this.users = data
        })
    },
    // 返回上一页
    goBack() {
      this.$router.push({ path: '/users/userlist' })
    },
    editUser() {
      this.$router.push({ path: '/users/edituser/' + this.users.id })
    },
    // 删除用户信息
    deleteUser(id) {
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.forSure(id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })        
      })
    },
    // 确认删除
    forSure(id) {
      this.$http.delete('http://localhost:3000/users/' + id)
    }
  },
  created() {
    // 根据用户ID获取相应数据
    this.getData(this.$route.params.id)
  }
}
</script>