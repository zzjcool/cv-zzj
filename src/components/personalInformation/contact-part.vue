<template>
  <div class="text-grey-8">
    <contact-way-item
      :text="personal.email"
      :href="'mailto:'+personal.email"
      icon="far fa-envelope"/>
    <contact-way-item
      :text="personal.wechat"
      icon="fab fa-weixin"/>
  </div>
</template>

<script>
import personal from 'src/infomation/personal'
import ContactWayItem from 'components/personalInformation/contact-way-item'
export default {
  name: 'contact-part',
  components: { ContactWayItem },
  data () {
    return {
      personal: personal
    }
  }
}
</script>

<style scoped>

</style>
