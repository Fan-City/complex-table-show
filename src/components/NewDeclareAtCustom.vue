<template>
  <div class="newDeclareAtCustomSearch">
    <header>
      <i class="icon el-icon-info"></i>
      怎么能没有头
    </header>
    <List-Body></List-Body>
    <footer></footer>
  </div>
</template>

<script>
import axios from "../utils/axios";
import { mapGetters } from "vuex";
import ListBody from "./NewDeclareAtCustomBody"

export default {
  name: "NewDeclareAtCustom",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      /*loginForm: {
        username: "admin",
        password: "admin"
      }*/
    };
  },
  methods: {
    /*handleLogin1() {
      this.$store
        .dispatch("Login1", this.loginForm)
        .then(response => {
          //业务逻辑


          
        })
    },
    handleLogin2() {
      this.$store
        .dispatch("Login2", this.loginForm)
        .then(response => {
          //业务逻辑
          const { status, statusText, headers, data } = response;
        })
    },*/
  },
  mounted(){
  },
  computed: {
    /*...mapGetters(["token"])*/
  },
  components:{
      ListBody
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部样式*/
header{
  background: #5c677b;
  height: 50px;
  font-size: 20px;
  color: #ecedf1;
  line-height: 50px;
  padding-left: 10px;
  position: fixed;
  width: 100%;
  z-index: 10;
}
footer{
  height: 50px;
}
</style>
