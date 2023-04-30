<template>
    <el-form 
     class="form"
     ref="ruleFormRef"
     :model="form" 
     :rules="rules"
     label-width="100px">
        <el-form-item label="激活码"  prop="code">
            <el-input  v-model.number="form.code" />
        </el-form-item>
        <el-form-item label="Steam账号" prop="account">
            <el-input v-model="form.account" />
        </el-form-item>
        <el-form-item label="Steam密码" prop="password">
            <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)">提交</el-button>

    </el-form-item>
    </el-form>    
</template>
<script setup>
import { reactive,ref } from 'vue'
import { addAccount } from '../api/account'
import { ElMessage } from 'element-plus'
const form = reactive({
    code: null,
    account: '',
    password: ''
})
const ruleFormRef = ref()
const rules = reactive({
  code: [
    { required: true, message: '请输入激活码', trigger: 'blur' },
    { type: 'number', message: '激活码必须是数字' },
  ],
  account: [
    { required: true, message: '请输入steam账号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入steam密码', trigger: 'blur' },
  ],
})
const onSubmit = async(ruleFormRef) => {
   await ruleFormRef.validate(async (valid, fields) => {
    if(valid) {
        const res =  await addAccount(form)
        if(res.rows === 1) {
            ElMessage({
                type: 'success',
                message: '添加成功'
            })
            ruleFormRef.resetFields()

        }
    }
   })
   

}

</script>
<style lang="scss">
.form{
    margin: 20px auto;
}
</style>