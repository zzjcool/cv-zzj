<template>
  <div class="">
    <q-card flat bordered class="q-py-sm q-px-md">
      <div class="q-gutter-y-xs">
        <div class="row items-center">
          <div class="col-6 row items-center">
            <div class="text-weight-bold text-subtitle2 col-auto">实习经历：</div>
            <div class="col row items-center">{{ project.name }}
              <q-chip size="sm" class="q-ml-md">{{ project.duration }}</q-chip>
            </div>
          </div>

          <!--        <div v-if="project.demo" class="">-->
          <!--          <div class="text-weight-bold text-subtitle2 col-auto">项目演示：</div>-->
          <!--          <a class="col" :href="project.demo">{{ project.demo }}</a>-->
          <!--        </div>-->

          <div v-if="project.job" class="row col-6">
            <div class="text-weight-bold text-subtitle2 col-auto">实习岗位：</div>
            <div class="col">{{ project.job }}</div>
          </div>
        </div>
        <!--        <div v-if="project.technology" class="">-->
        <!--          <div class="text-weight-bold text-subtitle2 col-auto">相关技术：</div>-->
        <!--          <div class="col">-->
        <!--            <div v-for="(tech,idx) in project.technology" :key="idx">{{idx+1}}. {{ tech }}</div>-->
        <!--          </div>-->
        <!--        </div>-->

        <div class="">
          <div class="text-weight-bold text-subtitle2 col-auto">主要工作：</div>
          <div class="col">
            <div v-for="(duty,idx) in project.duty" :key="idx">
              <q-icon class="q-pr-md" name="settings_ethernet"/>
              {{ duty }}
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'practice-item',
  props: {
    project: Object
  }
}
</script>

<style scoped>

</style>
