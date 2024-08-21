<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
<!--      <div class="words">-->

<!--        <span @click="menuClick('adminLayout')">-->

<!--          <i class="el-icon-s-home" style="font-size: 26px;"> 医院管理系统</i>-->
<!--        </span>-->
<!--      </div>-->
      <div class="head-bar">
        <div class="header-ico">
          <div style="width: 0;
    height: 55px;
    margin-top: 5px;"></div>
        </div>
        <div class="logo">医院管理系统</div>
        <div class="head-right">
          <div class="head-user-con">


            <div class="user-avatar">
              <img src="../assets/11.jpg" />
            </div>

            <el-dropdown @command="handleCommand" class="user-name" trigger="click">
          <span class="el-dropdown-link">
           <span>欢迎您，<b>{{ userName }}</b>&nbsp;管理员&nbsp;</span>
            <i class="el-icon-caret-bottom"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>

    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 导航菜单 -->
        <el-menu
            background-color="#353744"
            text-color="#fff"
            active-text-color="#ffd04b"
          :default-active="activePath"
          
        >

          <el-menu-item index="adminLayout" @click="menuClick('adminLayout')">
            <i class="el-icon-s-home" style="font-size: 18px;"> 首页</i>
          </el-menu-item>
          <el-menu-item index="doctorList" @click="menuClick('doctorList')">
            <i class="el-icon-user" style="font-size: 18px;"> 医生信息管理</i>
          </el-menu-item>
            <el-menu-item index="patientList" @click="menuClick('patientList')">
            <i class="el-icon-user-solid" style="font-size: 18px;"> 患者信息管理</i>
          </el-menu-item>
            <el-menu-item index="orderList" @click="menuClick('orderList')">
            <i class="el-icon-postcard" style="font-size: 18px;"> 挂号信息管理</i>
          </el-menu-item>
           <el-menu-item index="drugList" @click="menuClick('drugList')">
            <i class="el-icon-first-aid-kit" style="font-size: 18px;"> 药物信息管理</i>
          </el-menu-item>
           <el-menu-item index="checkList" @click="menuClick('checkList')">
            <i class="el-icon-monitor" style="font-size: 18px;"> 检查项目管理</i>
          </el-menu-item>
            <el-menu-item index="bedList" @click="menuClick('bedList')">
            <i class="el-icon-office-building" style="font-size: 18px;"> 病床信息管理</i>
          </el-menu-item>
            <el-menu-item index="arrangeIndex" @click="menuClick('arrangeIndex')">
            <i class="el-icon-news" style="font-size: 18px;"> 排班信息管理</i>
          </el-menu-item>
            <el-menu-item index="dataExpore" @click="menuClick('dataExpore')">
            <i class="el-icon-s-data" style="font-size: 18px;"> 数据统计分析</i>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main>
        <!-- 子路由入口 -->
        <router-view>
          <div>你好吗</div>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import jwtDecode from "jwt-decode";
import { getToken, clearToken, getActivePath, setActivePath} from "@/utils/storage.js";
export default {
  name: "Admin",
  data() {
    return {
      userName: "",
      activePath:"",
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        this.$confirm("此操作将退出登录, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
            .then(() => {
              clearToken();
              this.$message({
                type: "success",
                message: "退出登录成功!",
              });
              this.$router.push("login");
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消",
              });
            });

      }
    },
    //token解码
    tokenDecode(token){
      if (token !== null)
      return jwtDecode(token);
    },
    //导航栏点击事件
    menuClick(path){
      this.activePath=path;
            setActivePath(path);
            if(this.$route.path !== "/"+path) this.$router.push(path);
            console.log(path)
    },
    //退出登录
    logout() {
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          clearToken();
          this.$message({
            type: "success",
            message: "退出登录成功!",
          });
          this.$router.push("login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
   created() {
    //  获取激活路径
            this.activePath=getActivePath();
            // 解码token
            this.userName = this.tokenDecode(getToken()).aName;

        }
};
</script>
<style scoped lang="scss">
.title{
  cursor: pointer;
}
.el-header {
  background-color: #58b9ae;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .words {
    text-align: center;
    span {
      color: black;
    }
  }

  //border-bottom: 1px solid lightgrey;
}
.el-container{
        height: 100%;
    }
.el-aside{
  background-color:#353744;
  border-right: 1px solid lightgrey;
}
.el-menu{
  border: 0;
}
.head-bar {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;

}

.header-ico {
  float: left;
  padding: 0 21px;
  line-height: 70px;
}

.head-bar .logo {
  float: left;
  width: 250px;
  line-height: 70px;
  margin-left: -25px;
}

.head-right {
  float: right;
  padding-right: 50px;
}

.head-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}

.btn-bell .el-icon-bell {
  color: #fff;
}

.user-name {
  margin-left: 10px;
}

.user-avatar {
  margin-left: 20px;
}

.user-avatar img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
