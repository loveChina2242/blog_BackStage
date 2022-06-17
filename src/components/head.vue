<!--  -->
<template>
    <div class="headBox">
        <el-container>
            <!-- header -->
            <el-header>
                <el-row class="demo-avatar demo-basic">
                    <div class="avatorBox">
                        <el-avatar class="avator" :size="50" :src="circleUrl"></el-avatar>
                        <el-dropdown>
                            <span class="el-dropdown-link" >
                                用户名
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>个人信息</el-dropdown-item>
                                <el-dropdown-item>更改密码</el-dropdown-item>
                                <el-dropdown-item>退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-row>
            </el-header>
            <el-container>
            <!-- left -->
                <el-aside width="200px">
                    <el-row class="tac">
                        <el-col>
                            <el-menu router="true" background-color="#D3DCE6" default-active="2"
                                class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-menu"></i>
                                        <span>分类管理</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="1-1" route="/article">文章列表</el-menu-item>
                                        <el-menu-item index="1-2" route="/category">分类列表</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-menu-item index="2" route="/setting">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">系统设置</span>
                                </el-menu-item>
                                <el-menu-item index="3" route="/">
                                    <i class="el-icon-document"></i>
                                    <span slot="title">返回首页</span>
                                </el-menu-item>
                            </el-menu>
                        </el-col>
                    </el-row>


                </el-aside>

            <!-- content -->
                <el-main >Main</el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
export default {
    data() {
        return {
            circleUrl: 'http://127.0.0.1:4000/uploads/1f37901bdf11114ec210d662e753d035.gif'
        }
    },
    methods: {

    },

}

</script>

<style lang='css' >
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    height: 850px;
}

.avatorBox {
    position: absolute;
    right: 20px;
    top: 6px;
}

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
