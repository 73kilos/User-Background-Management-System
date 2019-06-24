<template>
  <div class="page-userlist">
    <div class="search">
      <el-input placeholder="按照姓名搜索" v-model="filterNameInput"></el-input>
    </div>
    <table class="user-table" border="1" cellspacing="0" cellpadding="0">
      <thead>
        <th>用户ID</th>
        <th>用户名</th>
        <th>密码</th>
        <th>性别</th> 
        <th>年龄</th>
        <th>简介</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="item in filterByName(users, filterNameInput)" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.username}}</td>
          <td>{{item.password}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.age}}</td>
          <td>{{item.description}}</td>
          <td><button><router-link :to="'/users/userdetails/' + item.id">详情</router-link></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
  .page-userlist {
    text-align: center;
    margin: 80px;
    .search {
      margin-bottom: 10px;
    }
    .user-table {
      width: 100%;
      font-size: 15px;
      td, th {
        height: 40px;
      }
      button {
        width: 60px;
        a {
          display: block;
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        filterNameInput: '',
        users: []
      }
    },
    methods: {
      // 获取数据
      getData() {
        this.$http.get('http://localhost:3000/users')
          .then(({ data }) => {
            this.users = data
          })
      },
      // 筛选数据
      filterByName(arr, val) {
        return arr.filter(arr => arr.username.match(val))
      }
    },
    created() {
      this.getData()
    }
  }
</script>