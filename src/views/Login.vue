<!--  -->
<template>

    <div class="login">
        <el-input v-model="input" placeholder="请输入账号"></el-input>
        <el-input v-model="input" show-password  placeholder="请输入密码"></el-input>
        <button >登录</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input:'',
            password:''
        }
    },
    methods: {

    },
}

</script>

<style lang='scss' scoped>
.login{
    width:1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    .el-input{
        width: 300px;
        margin-bottom: 5px;
    }
}
</style>
