<template>
  <router-link :to="{ name: toolLink }" class="d-flex toolCard align-items-center justify-content-center">
    <span>{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  props: ['name', 'toolLink']
}
</script>

<style>
  .toolCard{
    height: 200px;
    margin: 10px 15px;
    width: 30%;
    border-radius: 15px;
    outline: 1px solid red;
  }
</style>