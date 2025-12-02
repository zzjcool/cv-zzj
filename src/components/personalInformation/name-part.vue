<template>
  <div class="column q-col-gutter-xs">

    <div class="text-h3 text-weight-bold ">
      {{ personal.name }}
    </div>
  </div>
</template>

<script>
import personal from 'src/infomation/personal'
export default {
  name: 'name-part',
  data () {
    return {
      personal: personal
    }
  }
}
</script>

<style scoped>

</style>
