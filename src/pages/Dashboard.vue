<template>
  <div class="container-fluid">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
    </ol>
    <h1>Dashboard</h1>
    <hr>
    <div class="card mb-3">
      <div class="card-header">
        <i class="fa fa-area-chart"></i> Line Chart</div>
      <div class="card-body">
        <line-chart></line-chart>
      </div>
      <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    </div>
  </div> 
</template>
<script src='./js/dashboard.js'></script>
<style lang="scss" scoped>
.content-wrapper {
  padding-top: 80px;
}
</style>

