<template>
  <div class="table">
    <b-table sticky-header :items="items" :fields="fields">
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['id', 'severity', 'category', 'device' , 'name', 'start time', 'stop time', 'unresolved', 'action'],
        items: [
          { id: 7180, severity: 'Dickerson', category: 'Macdonald', 'device': '', 
            name: '', 'start time': '', 'stop time': '' , 'unresolved': '', 'action': ''},
          { id: 7179, severity: 'Dickerson', category: 'Macdonald', 'device': '', 
            name: '', 'start time': '', 'stop time': '' , 'unresolved': '', 'action': ''},
          { id: 7117, severity: 'Dickerson', category: 'Macdonald', 'device': '', 
            name: '', 'start time': '', 'stop time': '' , 'unresolved': '', 'action': ''}
        ]
      }
    }
  }
</script>

<style>
    .table {
        width: 87%;
        margin-top: 5vh;
        margin-left: 22vh;
    }
</style>