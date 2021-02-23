<template>
  <div class="page page-404">
    <img class="img-404" src="./assets/403.png" alt="404">
    <p class="msg-404">抱歉，您的权限受限！</p>
    <a-form :form="form" @submit="handleSubmit" layout="inline">
        <a-form-item v-bind="formItemLayout" label="User">
      <a-input
        v-decorator="[
          'user',
          {
            rules: [
              {
                required: true,
                message: '用户名！哥们！',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '密码！哥们！',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        开发者模式登录
      </a-button>
    </a-form-item>
   </a-form>

   <a-button type="primary" style="margin-top:20px" @click="go">返回</a-button>
</div>
</template>

<script>
export default {
  name: 'PermissionDenied',
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 12,
            offset: 0,
          },
          sm: {
            span: 12,
            offset: 5,
          },
        },
      },
    }
  },
  computed: {
    isDev() {
      return process.env.NODE_ENV === 'development'
    },
  },
  created() {
    this.form = this.$form.createForm(this, {
      mapPropsToFields: () => {
        return {
          user: this.$form.createFormField({
            value: 'jyhc',
          }),
          password: this.$form.createFormField({
            value: 'a1111111',
          }),
        }
      },
      onValuesChange: (_, values) => {
        console.log(_, values)
      },
    })
  },
  methods: {
    go() {
      this.$message.info('尚无系统配置信息指向跳转路径')
    },
    // eslint-disable-next-line no-unused-vars
    validateToNextPassword(rule, value, callback) {
      // eslint-disable-next-line prefer-destructuring
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          const { user, password } = values
          this.$router.replace(`/sso/logon?u=${user}&p=${password}`)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page-404{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .img-404{
    width: 342px;
    height: 321px;
    transform: translateX(-20px);
  }
  .msg-404{
    font-size: 20px;
    color: #999999;
    margin: 16px 0 24px;
  }
}
</style>
