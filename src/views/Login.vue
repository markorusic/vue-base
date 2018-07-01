<template>
  <div>
    login component
  </div>
</template>

<script>

import auth from '@/services/auth/'

export default {
  created () {
    if (auth.isAuthenticated()) {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
