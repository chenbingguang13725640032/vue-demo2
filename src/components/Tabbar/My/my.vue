<template>
  <div class="my-container">
    <ul class="ul">
      <li>
        <input type="text" placeholder="账户名/手机号/Email" />
      </li>
      <li>
        <input type="text" placeholder="请输入您的密码" />
      </li>
    </ul>
    <div class="an">
      <input type="submit" value="登录" id="btn" />
    </div>
    <div class="caozuo">
      <a href="javascript:void(0)">立即注册</a>
      <a href="javascript:void(0)">找回密码</a>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../../Subcomponents/tabbar";
export default {
  name: "my",
  data() {
    return {};
  },
  methods: {},
  components: {
    tabbar
  }
};
</script>

<style scoped lang="scss">
.my-container {
  margin-top: -44px;
  .ul {
    list-style-type: none;
    li {
      border-bottom: 1px solid #a7a3a3;
      line-height: 45px;
      input {
        border: none;
        margin: 0;
        font-size: 14px;
        padding: 0 0 0 10px;
      }
    }
  }
  .an {
    text-align: center;
    #btn {
      background-color: #e54847;
      text-align: center;
      line-height: 38px;
      width: 95%;
      font-size: 19px;
      border: none;
      margin: 10px 0;
    }
  }
  .caozuo {
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    a {
      color: #e54847;
    }
  }
}
</style>