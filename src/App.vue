<script setup lang="ts">
</script>

<template>
  <div id="app">
    <h1>Router Base</h1>
    <p>
      <router-link to="/">Home</router-link><br>
      <router-link to="/page">About</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>

<style>
</style>
