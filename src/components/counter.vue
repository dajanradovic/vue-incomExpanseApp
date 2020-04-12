<template>
<div>
<div class="flex-container mt-3">

  <div class="card border border-dark" style="width: 18rem;">
 <i class="fa fa-plus mt-2" style="color:green;"></i>
  <div class="card-body">
    <ul>
    <li class="card-text" v-for="item in incomesList">{{item.description}}  <span class="pull-right"><b> {{item.income}}</b> kn</span></li>
  </ul>
  <p class="total pull-right"><b>Total:    {{incometotal}}</b> kn</p>
  </div>
</div>

<div class="card border border-dark" style="width: 18rem;">
  <i class="fa fa-minus mt-2" style="color:red;"></i>
  <div class="card-body">
    <ul>
    <li class="card-text" v-for="item in expansesList">{{item.description}}  <span class="pull-right"><b> {{item.expanse}}</b> kn</span></li>
  </ul>
    <p class="total pull-right"><b>Total:    {{expansetotal}}</b> kn</p>

  </div>
</div>



</div> 
</div>
</template>

<script>
export default {
  
  data () {
    return {
      selectedMont:'',
    


    }
  },

  computed:{
     incometotal(){
         let a=0;
        this.incomesList.forEach(function(item){
            a= a + parseInt(item.income);

        })

        return a;
       },
       expansetotal(){
          let a=0;
        this.expansesList.forEach(function(item){
            a= a + parseInt(item.expanse);

        })

        return a;
       },

        expansesList(){

            return this.$store.getters.expansesForActiveUser;
    },
    incomesList(){

      return this.$store.getters.incomesForActiveUser;
    },
  },



      
    
  

  
  }
</script>

<style scoped>



.flex-container {
  display: flex;
  height: 300px;
  flex-wrap: space-between;
    justify-content: center;

  align-content: center;
}

i {
  font-size: 60px;
  margin: 0 auto;
  
  }

ul {
  padding-left: 5px;
  
}

li {

  font-size: 12px;
}

.total{

  position: absolute;
  bottom: 0px;
  left: 150px;

}


</style>
