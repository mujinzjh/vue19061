<template>
  <div class="mybody">
    <div class="myform" style="height:50%;">
      <img src="../assets/logo1.png" class="myimg" />
      <div class="myp">注册</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" style="width:70%;  "></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passW">
          <el-input v-model="ruleForm.passW" style="width:70%; "></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassW">
          <el-input v-model="ruleForm.rePassW" style="width:70%; "></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="backgroundColor:#22d3c5;  width:230px; marginTop:5px; " @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button type="primary" style="backgroundColor:#fff; color:#22d3c5; width:230px;marginTop:10px; margin:10px auto;" @click="submitlogin('ruleForm')">登录</el-button>

        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (/^(?=.*\d+)(?=.*[a-zA-Z]+).{6,16}$/gim.test(value)) {
          if (this.ruleForm.rePassW !== "") {
            this.$refs.ruleForm.validateField("rePassW");
          }
          callback();
        } else {
          callback(new Error("密码须包含字母/数字,6~16位"));
        }
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.rePassW) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      activeName: "first",
      ruleForm: {
        name: "",
        passW: "",
        rePassW: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 2,
            max: 6,
            message: "长度在 2 到 6 个字符",
            trigger: "blur"
          }
        ],
        passW: [
          {
            required: true,
            message: "请输入用户密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        rePassW: [
          {
            required: true,
            message: "请重新输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitlogin(formName){
    this.$router.push({ path: "/login" });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("/reg", this.ruleForm)
            .then(response => {
              if (response.data.msg == "username_has_exited") {
                this.$alert("该用户名已注册", "注册失败", {
                  confirmButtonText: "确定",
                  callback: action => {}
                });
              } else {
                this.$message("注册成功");
               
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.mybody {
  display: inline-block;
  position: relative;
  min-width: 1000px;
  overflow: hidden;
  width: 100%;
  height: 750px;
  background: url("../assets/bgc.jpg");
   
}
.myform {
  width: 30%;
  height: 70%;
  margin: 110px auto;
  border: 3px solid #e3e3e3;
  background-color: #fff;
}
.myimg {
  width: 210px;
  height: 40px;
  margin: -70px 90px;
}
.myp {
  width: 150px;
  height: 50px;
  color: #333;
  font-size: 18px;
  margin: 10px auto;
  letter-spacing: 20px;
  border-bottom: 3px solid #22d3c5;
  text-align: center;
}

</style>
