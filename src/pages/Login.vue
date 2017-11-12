<template>
<div class="login bg-dark">
  <div class="container">
    <div class="card card-login mx-auto mt-5">
      <div class="card-header text-center"><img src="~assets/images/icons/login.png"/></div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <input class="form-control" id="inputEmail" type="email" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <input class="form-control" id="inputPassword" type="password" placeholder="Password">
          </div>
          <a class="btn btn-primary btn-block" @click="doLogin">Login</a>
        </form>
      </div>
    </div>
  </div>
</div>
</template>
<script src="./js/login.js"></script>
<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.card {
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
}
.btn {
  color: #fff !important;
}
</style>
