<template>
  <base-box label="项目&实习经历">
    <div class="column q-col-gutter-sm">
      <div class="col-6">
        <div class="q-gutter-y-md">
          <div class="" v-for="(project,idx) in projectList" :key="idx">
            <project-item class="" :project="project"/>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="q-gutter-y-md">
          <div class="" v-for="(project,idx) in practiceList" :key="idx">
            <practice-item class="" :project="project"/>
          </div>
        </div>
      </div>
    </div>

  </base-box>
</template>

<script>
import BaseBox from 'components/base/base-box'
import ProjectItem from 'components/projectList/project-item'
import projectList from 'src/infomation/project-list'
import practiceList from 'src/infomation/practice-list'
import PracticeItem from 'components/projectList/practice-item'

export default {
  name: 'project-list',
  components: {
    PracticeItem,
    ProjectItem,
    BaseBox
  },
  data () {
    return {
      projectList: projectList,
      practiceList
    }
  }
}
</script>

<style scoped>

</style>
