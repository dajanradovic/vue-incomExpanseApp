<template>

<div>

<menu-nav v-show="this.$store.state.menuShow"></menu-nav>
<router-view>

</router-view>


</div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
    expansesList:[],
    total: 0

    }
  },

   methods: {
      addExpanse (value){
       this.expansesList.push(value);
      this.total+=parseInt(value.expanse);
        //this.expansesList.push(value);

      },

      calculateExpanses (){

          
          
         
          }

      
     
   


   },

}
      

             
          
      

   

</script>

<style>
 @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

 
</style>
