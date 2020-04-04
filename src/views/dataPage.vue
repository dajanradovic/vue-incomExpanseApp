<template>
<div>


<div class="container-fluid"> 

  
<menu-nav></menu-nav>
</div>
    

  



<div class="container">

<div class="row">

<div class="col-lg-6 mt-3">

<nav-dajan></nav-dajan>
<router-view></router-view>

</div>
<div class="col-lg-6">
<counter></counter>
</div>
</div>


<div class="row">
<div class="col-lg-12">
<lista ></lista>
</div>
</div>
</div>
</div>







</template>

<script>
export default {
  name: '',
  data () {
    return {
   
    


      
    }
  }
}
  
</script>

<style scoped>

.flex-container {
  display: flex;
  height: 800px;
  flex-wrap: space-between;
    justify-content: center;

  align-content: center;
}

#sirina{

  min-width: 1024px !important;
}
</style>
