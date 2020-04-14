<template>
<div class="container">

<div class="row">
<div class="col-lg-4 mt-3">
  <h5>Details on the family {{getFamilySurname}}</h5>
  <p class="members mt-3">Members:</p>

  <ol> 
    <li v-for="n in familyMembersNumber">
      <p ><span>{{getAllFamilyData['personName' + n]}}</span> <span class="pull-right">age range: {{getAllFamilyData['personAge' + n]}}</span></p>


    </li>




  </ol>

  


</div>
<div class="col-lg-8 mt-1">
  <h6 id="familyStatistics" class="text-center">Family statistics</h6>


</div>
</div>
</div>
</template>

<script>
export default {
  
  
  data () {
    return {
      
        
    

    }
    },
    methods:{

      
          

    
      
      
       


    },

    computed:{

     getFamilySurname(){
             return this.$store.getters.getCurrentlyPickedFamily;

     },

     familyMembersNumber(){
       return  this.$store.getters.getCurrentlyPickedFamilyNumber;
     },
     getAllFamilyData(){

       return this.$store.getters.getCurrentlyPickedFamilyObject[0];
     },

      expansesAndIncomesListFromActiveUser(){
                
                
           return this.$store.getters.expansesAndIncomesForActiveUser;
      
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
    },

  },

  filters:{

      checkKeys: function(value){

        if (value.startsWith('id')){

          return value;
        }

        else{

          return value.substring(0, value.length-1);
        }

        
      },

      sanitize: function(value, number){

        if (value.startsWith('id')){

          return value;
        }

        else{

          return value.substring(0, value.length-1);
        }

        
      }

    }
  
  }
</script>

<style scoped>
.mojP{

    width: 600px;
    min-height:300px;
    background-color:#ede97b
}

.members{

  border-bottom: 1px solid black;
}

#familyStatistics{
    margin-top: 45px;

}

</style>
