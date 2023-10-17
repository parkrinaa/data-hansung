<template>
  <div id="btn_group">
    <button @click="goBack" type="button">BACK</button>
  </div> 
</template>

<script>
export default {
  methods:{
    goBack(){
        this.$router.go(-1); [2]
    },
  }
}
</script>