<!-- @format -->

<template>
  <router-view />
  <div>
    <router-link :to="{ name: 'list-product' }"></router-link>
    <router-link :to="{ name: 'detail' }"></router-link>
  </div>
</template>
