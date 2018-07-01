<template>
  <div class="home">
    <HelloWorld msg="Hello world from props"/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    console.log(this.$can('CREATE_TOUR'))
  }
}
</script>
