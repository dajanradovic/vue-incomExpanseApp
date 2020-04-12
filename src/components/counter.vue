<template>
<div>
  <div class="row mt-3">
  <div class="col-lg-6">
     <select v-model="selectedMonth"  class="form-control form-control-sm" id="exampleFormControlSelect1">
        <option disabled value="" selected>Filter by month</option>
           
      <option>January</option>
      <option>Fabruary</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>Decembery</option>
      <option>Show all</option>

      
    </select>
  </div>
  <div class="col-lg-6">
     <select   class="form-control form-control-sm" id="exampleFormControlSelect1">
      <option disabled value="" selected >Filter by year</option>

      <option>2020</option>
      <option>2021</option>
      <option>2022</option>
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>
      <option>2026</option>
      <option>2027</option>
      <option>2028</option>
      <option>2029</option>
      <option>2030</option>
      <option>Show all</option>

           
    </select>
  </div>
  </div>
  <div class="flex-container mt-3">
 

  <div class="card border border-dark" style="width: 18rem;">
 <i class="fa fa-plus mt-2" style="color:green;"></i>
  <div class="card-body">
    <ul>
    <li class="card-text" v-for="item in chooseIncomesList">{{item.description}}  <span class="pull-right"><b> {{item.income}}</b> kn</span></li>
  </ul>
  <p class="total pull-right"><b>Total:    {{incometotal}}</b> kn</p>
  </div>
</div>

<div class="card border border-dark" style="width: 18rem;">
  <i class="fa fa-minus mt-2" style="color:red;"></i>
  <div class="card-body">
    <ul>
    <li class="card-text" v-for="item in chooseExpanseList">{{item.description}}  <span class="pull-right"><b> {{item.expanse}}</b> kn</span></li>
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
      selectedMonth:'',
      selectedYear:'',
    


    }
  },

  methods:{

    filterByMonth(){
        


    }
  },

  computed:{
     incometotal(){

                    if (this.selectedMonth==''){
                      let a=0;
                      this.incomesList.forEach(function(item){
                          a= a + parseInt(item.income);

                      });

                      return a;
                    }

                    else if(this.selectedMonth=='Show all'){

                        let a=0;
                      this.incomesList.forEach(function(item){
                          a= a + parseInt(item.income);

                      });

                      return a;


                    }

                    else{

                        let a=0;
                      this.incomesListByMonth.forEach(function(item){
                          a= a + parseInt(item.income);

                      });

                      return a;



                    }

     
       },
       expansetotal(){

                      if (this.selectedMonth==''){
                    let a=0;
                    this.expansesList.forEach(function(item){
                        a= a + parseInt(item.expanse);

                                          });

                                    return a;
                                              }

                  else if(this.selectedMonth=='Show all'){

                    let a=0;
                    this.expansesList.forEach(function(item){
                        a= a + parseInt(item.expanse);

                    });

                    return a;

                  }
                  
                  else{

                      let a=0;
                    this.expansesListByMonth.forEach(function(item){
                        a= a + parseInt(item.expanse);

                    });

                    return a;



                  }

     },

    expansesList(){

        
        return this.$store.getters.expansesForActiveUser;

               
    },

    expansesListByMonth(){

        
        return this.$store.getters.expansesForActiveUserByMonth(this.selectedMonth);

               
    },

    chooseExpanseList(){

                if (this.selectedMonth==''){

                  return this.expansesList;
                }

                else if (this.selectedMonth=='Show all'){

                    return this.expansesList;

                }
                
                else{

                  return this.expansesListByMonth;
                }
              },



    incomesList(){

      return this.$store.getters.incomesForActiveUser;
    },

    incomesListByMonth(){

        
        return this.$store.getters.incomesForActiveUserByMonth(this.selectedMonth);

               
    },

    chooseIncomesList(){

      if (this.selectedMonth==''){

        return this.incomesList;
      }

      else if(this.selectedMonth=="Show all"){
           return this.incomesList;

      }
      
      else{

        return this.incomesListByMonth;
      }
    }
  }

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
