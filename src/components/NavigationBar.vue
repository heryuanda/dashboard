<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <router-link to="/dashboard" class="navbar-brand">Backend Dashboard</router-link>
    <button class="navbar-toggler navbar-toggler-right" type="button" @click="toggleNavBar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive" :class="{'show': showNavBar}">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a class="nav-link" @click="toggleAccordion">
            <i class="dash-settings"></i>
            <span class="nav-link-text">Dashboard</span>
          </a>
          <transition name="accordion">
            <div class="sub-navlink" v-show="showAccordion">
              <ul class="sub-navlink-list">
                <li>
                  <a @click="goToUrl('/dashboard/cards')" class="nav-link">
                    <i class="dash-settings"></i>
                    <span class="nav-link-text">Cards</span>
                  </a>
                </li>
                <li>
                  <a class="nav-link">
                    <i class="dash-settings"></i>
                    <span class="nav-link-text">Sub 2</span>
                  </a>
                </li>
                <li>
                  <a class="nav-link">
                    <i class="dash-settings"></i>
                    <span class="nav-link-text">Sub 3</span>
                  </a>
                </li>
              </ul>
            </div>
            </transition>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
          <a class="nav-link">
            <i class="dash-settings"></i>
            <span class="nav-link-text">Charts</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <a class="nav-link">
            <i class="dash-settings"></i>
            <span class="nav-link-text">Tables</span>
          </a>
        </li>                
      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="dash-left-arrow"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link mr-lg-2 nav-account" id="alertsDropdown" aria-haspopup="true" aria-expanded="false">
            <i class="dash-account"></i>            
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link mr-lg-2" id="alertsDropdown" aria-haspopup="true" aria-expanded="false">
            <i class="dash-settings"></i>            
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link mr-lg-2" id="alertsDropdown" aria-haspopup="true" aria-expanded="false">
            <i class="dash-settings"></i>            
          </a>          
        </li>
        <li class="nav-item">
          <form class="form-inline my-2 my-lg-0 mr-lg-2">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-primary" type="button">
                  <i class="dash-search"></i>
                </button>
              </span>
            </div>
          </form>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script src='./js/navigation-bar.js'></script>
<style lang="scss" scoped>
.nav {
  &-account {
    color: #fff;
    border: 1px solid #fff;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    text-align: center;
  }
}
.sub-navlink {
  &-list {
    list-style: none;
    li {
      color: #fff;
    }
  }
}
.accordion-enter-active {
  animation: slideInDown 500ms;
}
.accordion-leave-active{
  animation: slideInDown 500ms reverse;
}
@keyframes slideInDown {
  from {
    transform: translate3d(0, -10%, 0);
    visibility: visible;
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
