<template>
<div class="container">
<div class="row">
<div class="col-lg-6 offset-lg-3 col-sm-12 userCreate" style="margin-top: 100px;">

<create-user></create-user>

</div></div>
</div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
   
    


      
    }

    

  },

  created(){
        this.$store.state.menuShow=false;
  }
}
  
</script>

<style scoped>
@media only screen and (max-width:320px){

  .userCreate{

    margin-top:0px !important;
    margin-left:0px !important;
  }
}


</style>
