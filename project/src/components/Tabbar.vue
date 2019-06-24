<template>
  <div>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-container>
        <el-aside width="210px" style="background-color: rgb(238, 241, 246)">
          <el-menu router :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>用户信息管理系统</template>
              <el-menu-item index="/users/userlist"><i class="el-icon-notebook-2"></i>用户列表</el-menu-item>
              <el-menu-item index="/users/createuser"><i class="el-icon-user"></i>添加用户</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 13px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>管理员设置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>admin</span>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
  }
</style>
