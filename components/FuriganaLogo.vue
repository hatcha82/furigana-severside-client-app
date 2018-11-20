<template>
  <img
    class="FuriganaHubLogo"
    alt="FuriganaHub Logo"
    src="~/assets/logoBlue.jpg">
</template>

<style>
.FuriganaHubLogo {
  width: 100px;
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
