<template>
  <v-layout
    column
    align-center
    justify-center
    class="white--text"
  >
    <img 
      class="FuriganaHubLogo"
      src="~/assets/logoBlue.jpg"
      alt="Vuetify.js" 
      height="100" 
    >
    <h1 class="white--text mt-2 mb-2 display-1 text-xs-center font-weight-black">FuriganaHub</h1>
    <div class="subheading mb-3 text-xs-center " >일본어를 쉽게 읽어 봅시다.</div>
    <!-- <router-link to="/login">
      <v-btn
        v-if="!isUserLoggedIn"
        class="blue lighten-2 mt-5"
        dark
        large
      >
        시작하기
      </v-btn>
    </router-link> -->
  </v-layout>
  <!-- <img
    class="FuriganaHubLogo"
    alt="FuriganaHubLogo"
    src="~/assets/logoBlue.jpg"> -->
</template>

<style>
.FuriganaHubLogo {
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
  border-radius: 25px;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
