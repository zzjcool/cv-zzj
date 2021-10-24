<template>
  <div class="row q-py-xs q-px-md items-center item">
    <div class="text-weight-bolder">{{ label2 }}：
      <q-popup-edit v-model="label2">
        <q-input v-model="label2" dense autofocus counter>
        </q-input>
      </q-popup-edit>
    </div>
    <div>{{ text2 }}
      <q-popup-edit v-model="text2">
        <q-input v-model="text2" dense autofocus counter>
        </q-input>
      </q-popup-edit></div>
  </div>
</template>

<script>
export default {
  name: 'base-information-item',
  props: {
    label: String,
    text: String
  },
  data () {
    return {
      label2: this.label,
      text2: this.text
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  border-bottom: solid 1px;
}
</style>
