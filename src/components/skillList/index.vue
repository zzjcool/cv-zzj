<template>
  <div class="readme-skill-grid">
    <base-box class="readme-skill-card" label="README">
      <div class="q-gutter-y-xs readme-content">
        <div style="white-space: pre-wrap">{{ readme.introduction }}</div>
        <div v-show="false" class="row items-center">
          <b>本科：</b>
          <div class="col row justify-between">
            <q-badge class="bg-grey-7" style="font-size: 10px">
              {{ readme.undergraduate }}
            </q-badge>
            <q-badge class="bg-grey-7" style="font-size: 10px">
              {{ readme.undergraduateDuration }}
            </q-badge>
            <q-badge class="bg-grey-7" style="font-size: 10px">
              {{ readme.undergraduateMajor }}
            </q-badge>
          </div>
        </div>
        <div v-show="false" class="row items-center">
          <b>硕士：</b>
          <div class="col row justify-between">
            <q-badge class="bg-grey-10" style="font-size: 10px">
              {{ readme.master }}
            </q-badge>
            <q-badge class="bg-grey-10" style="font-size: 10px">
              {{ readme.masterType }}
            </q-badge>
            <q-badge class="bg-grey-10" style="font-size: 10px">
              {{ readme.masterDuration }}
            </q-badge>
            <q-badge class="bg-grey-10" style="font-size: 10px">
              {{ readme.masterMajor }}
            </q-badge>
          </div>
        </div>
        <!--        <div class="items-center" v-for="(skill,idx) in skillList" :key="idx">-->
        <!--          <q-icon class="q-pr-sm" :name="idx%2===1?'far fa-star':'fas fa-star'"/>-->
        <!--          {{ skill }}-->
        <!--        </div>-->
      </div>
    </base-box>
    <base-box class="readme-skill-card" label="专业技能">
      <div class="q-gutter-y-xs skill-content">
        <div class="items-center" v-for="(skill,idx) in skillList" :key="idx">
          <q-icon class="q-pr-sm" :name="idx%2===1?'far fa-star':'fas fa-star'"/>
          {{ skill }}
        </div>
      </div>
    </base-box>
  </div>

</template>

<script>
import BaseBox from 'components/base/base-box'
import skillList from 'src/infomation/skill-list'
import readme from 'src/infomation/readme'

export default {
  name: 'skill-list',
  components: { BaseBox },
  data () {
    return {
      skillList: skillList,
      readme: readme
    }
  }
}
</script>

<style scoped>
.readme-skill-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .readme-skill-grid {
    grid-template-columns: minmax(220px, 0.8fr) minmax(360px, 1.2fr);
  }
}

.readme-skill-card {
  height: 100%;
}

.readme-content,
.skill-content {
  font-size: 0.8rem;
  line-height: 1.5;
}

.readme-content {
   font-size: 0.82rem;
}
</style>
