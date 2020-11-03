<template>
  <li class="item" @click = "clickForDelete">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    clickForDelete () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<style scoped>

</style>
