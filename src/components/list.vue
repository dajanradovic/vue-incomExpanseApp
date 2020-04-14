<template>
<div v-if="getPickedUser !=undefined" >

  

<table v-if="expansesAndIncomesListFromActiveUser != ''" class="table">

  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Month</th>
      <th scope="col">Year</th>
      <th scope="col">Description</th>
      <th scope="col">Incomes</th>
      <th scope="col">Expanses</th>
    </tr>
  </thead>
  
  <transition-group  tag="tbody"> 
  

      <tr v-for="item, index in chooseExpanseIncomeList" :key="item.id"  v-bind:class="[checkClass(item.expanse), item.animated ? 'animated bounceOutLeft' : '' ]">
      
      <td>{{index +1}}</td>
      <td>{{item.selectedMonthIncome ? item.selectedMonthIncome : item.selectedMonthExpanse}}</td>
      <td>{{item.selectedYearIncome ? item.selectedYearIncome : item.selectedYearExpanse}}</td>
      <td>{{item.description}}</td>
      <td>{{item.income ? item.income + ' kn' : ''}}</td>
      <td>{{item.expanse ? item.expanse + ' kn' : ''}} <i class="fa fa-trash pull-right my-trash" v-on:click="eraseExpanse(item.id);" title="Delete"></i></td>
    
    </tr>
   
  </transition-group>
  
</table>



</div>
</template>

<script>
export default {
  
  
  data () {
    return {
      show: true,
      animated:false,
      lista:[],
      
        
    

    }
    },
    methods:{
      
       eraseExpanse(id){
              
              this.$store.commit('animateItem',id);
              //event.target.classList.add('animated bounceOutLeft');
             
                let self=this;
              //this.animate(event);
                setTimeout(function(){
                     self.$store.commit('eraseExpanseFromList',id);
                      
                },800)
                
               
              
           
          
          
          

      },
      

      checkClass(a){
        return a ? 'bg-warning' : 'bg-secondary';
    },

       


    },

    computed:{

      expansesAndIncomesListFromActiveUser(){
                
                
           return this.$store.getters.expansesAndIncomesForActiveUser;
                        
          

    },

    chooseExpanseIncomeList(){

            if(this.$store.getters.getCurrentlyPickedFamily == ''){

              return this.expansesAndIncomesListFromActiveUser;
            }

            else{

              return this.expansesAndIncomesListFromActiveUserInFamily;
            }
      
    },

    expansesAndIncomesListFromActiveUserInFamily(){

                 return this.$store.getters.expansesAndIncomesForActiveUserInFamily;

    },

    expansesList(){

      return this.$store.getters.expanses;
    },

    expansesAndIncomesList(){

      return this.$store.getters.expansesAndIncomes;
    },

     activeUser(){

           return this.$store.getters.getActiveUser;

      },
      

     currentlyPickedFamily(){

      return this.$store.getters.getCurrentlyPickedFamily;
    },

    getPickedUser(){

      return this.$store.getters.pickedUser;
    }


    

    

   




      
    
  

  
  }}
</script>

<style scoped>
.flex-container {
  display: flex;
justify-content: space-between;

}

.my-trash{

  cursor: pointer;
}

#proba{
  background-color: red;
  height:100px;
  width:100px;
}



</style>
