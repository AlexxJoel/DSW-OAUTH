<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">OAuth</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <router-link class="nav-link"  to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Acerca de nostros</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-if="$auth.isAuthenticated" to="/profile">Perfil</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search"  v-if="!$auth.loading">
            <button class="btn btn-success" v-if="!$auth.isAuthenticated" @click="login">Iniciar sesión</button>
            <button class="btn btn-secondary" v-if="$auth.isAuthenticated" @click="logout">Cerrar sesión</button>
          </form>
        </div>
      </div>
    </nav>


    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    login() {
      this.$auth.loginWithRedirect()
    },
    logout() {
      this.$auth.logout({
        logoutParams: {
          returnTo: this.$router.replace('/').catch(() => {}),
        },
      });
    },
  },

};
</script>
