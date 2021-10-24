<template>
  <div class="row q-col-gutter-x-md">
    <base-box class="col-6" label="获奖经历">
      <div class="q-gutter-y-xs">
        <div class="row items-center" v-for="(honor, idx) in honorList" :key="idx">
          <q-icon class="q-pr-md" name="fas fa-medal"/>
          {{ honor }}
        </div>
      </div>
    </base-box>
    <base-box class="col-6" label="在校表现">
      <div class="q-gutter-y-xs">
        <div class="row items-center" v-for="(honor, idx) in schoolList" :key="idx">
          <q-icon class="q-pr-md" name="tips_and_updates"/>
          {{ honor }}
        </div>
      </div>
    </base-box>
  </div>

</template>

<script>
import BaseBox from 'components/base/base-box'
import honorList from 'src/infomation/honor-list'
import schoolList from 'src/infomation/inschool-list'

export default {
  name: 'honor-list',
  components: { BaseBox },
  data () {
    return {
      honorList: honorList,
      schoolList
    }
  }
}
</script>

<style scoped>

</style>
