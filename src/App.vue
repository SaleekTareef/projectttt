<template>
  <div id="app">
    <dropdown> </dropdown>
    <sidebar class="sidebar"> </sidebar>
    <tables> </tables>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
import dropdown from './components/dropdownRow.vue'
import tables from './components/tables.vue'

export default {
  components: { sidebar, dropdown, tables },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
