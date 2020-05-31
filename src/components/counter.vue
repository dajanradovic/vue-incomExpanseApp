<template>
<div>
  <div class="row mt-3">
  <div class="col-lg-6">
     <select v-model="selectedMonth"  class="form-control form-control-sm">
        <option disabled value="" selected>Filter by month</option>
           
      <option>January</option>
      <option>February</option>
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
      <option>Show all months</option>

      
    </select>
  </div>
  <div class="col-lg-6">
     <select v-model="selectedYear"  class="form-control form-control-sm" >
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
      <option>Show all years</option>

           
    </select>
  </div>
  </div>
  <div class="flex-container mt-3">
 

  <div class="card border border-dark" style="width: 18rem;">
 <i class="fa fa-plus mt-2" style="color:green;"></i>
  <div class="card-body">
    <ul>
    <li class="card-text" v-for="item in chooseIncomesList" :key="item.id">{{item.description}}  <span class="pull-right"><b> {{item.income}}</b> kn</span></li>
  </ul>
  <p id="incomeTotal" class="total pull-right"><b>Total:    {{incometotal}}</b> kn</p>
  </div>
</div>

<div class="card border border-dark" style="width: 18rem;">
  <i class="fa fa-minus mt-2" style="color:red;"></i>
  <div class="card-body">
    <ul>
    <li class="card-text" v-for="item in chooseExpanseList">{{item.description}}  <span class="pull-right"><b> {{item.expanse}}</b> kn</span></li>
  </ul>
    <p id="expanseTotal" class="total pull-right"><b>Total:    {{expansetotal}}</b> kn</p>

  </div>
</div>



</div> 
<div class="row">
<div class="col-lg-6 mt-3">
<h6 v-if="Object.keys(chartDataIncome).length !== 0">Income chart</h6>
<pie-chart :data="chartDataIncome"></pie-chart>
</div>
<div class="col-lg-6 mt-3">
  <h6 v-if="Object.keys(chartData).length !== 0">Expanse chart</h6>

<pie-chart :data="chartData"></pie-chart>
</div>
</div>
</div>
</template>

<script>
export default {
  
  data () {
    return {
      selectedMonth:'Show all months',
      selectedYear:'Show all years',
      chartData:{
         

      },
      chartDataIncome:{}
    


    }
  },

  methods:{

    showDataOnChart(args){
        
           // this.chartData = Object.assign({...this.chartData},{args[key]: args[value]}});

    }
  },

  computed:{
     incometotal(){

        this.incomesList<1 || this.incomesListByMonth<1 ||this.incomesListByYear<1 || this.incomesListByYearAndMonth<1 ? 0 : 0;
        this.incomesListForUserInFamily<1 || this.incomesListForUserInFamilyByMonth<1 || this.incomesListForUserInFamilyByYear<1 || this.incomesListForUserInFamilyByYearAndMonth<1 ? 0 : 0; 

              
                                
                if (this.selectedMonth=='Show all months' && this.selectedYear=='Show all years'){

                              if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                          
                                                                    
                                  let a=0;
                                  if (this.incomesList<1){

                                    return 0;
                                  }
                                    this.incomesList.forEach(function(item){
                                        a= a + parseInt(item.income);

                                                          });

                                                    return a;
                                                    
                                                    }
                                else{

                                 
                                  
                                                      let a=0;
                                  this.incomesListForUserInFamily.forEach(function(item){
                                      a= a + parseInt(item.income);

                                                        });

                                    return a;
                                }

                }

                else if (this.selectedYear != 'Show all years' && this.selectedMonth=='Show all months'){
                           if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                          
                                                                    
                                  let a=0;

                                  if (this.incomesListByYear<1){

                                    return 0;
                                  }
                                    this.incomesLisByYear.forEach(function(item){
                                        a= a + parseInt(item.income);

                                                          });

                                                    return a;
                                                    
                                                    }
                                else{

                                  
                                                        let a=0;
                                    this.incomesListForUserInFamilyByYear.forEach(function(item){
                                        a= a + parseInt(item.income);

                                                          });

                                    return a;
                                }
                  }

                 else if(this.selectedYear == 'Show all years' && this.selectedMonth !='Show all months'){
                    
                     if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                          
                                                                    
                                  let a=0;
                                  if (this.incomesListByMonth<1){

                                    return 0;
                                  }
                                    this.incomesListByMonth.forEach(function(item){
                                        a= a + parseInt(item.income);

                                                          });

                                                    return a;
                                                    
                                                    }
                                else{

                                                      
                                                            let a=0;
                                        this.incomesListForUserInFamilyByMonth.forEach(function(item){
                                            a= a + parseInt(item.income);

                                          });

                                    return a;
                                }
                    

                }

                 else if(this.selectedYear != 'Show all years' && this.selectedMonth !='Show all months'){
                    if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                          
                                                                    
                                  let a=0;
                                  if (this.incomesListByYearAndMonth<1){

                                    return false;
                                  }
                                    this.incomesListByYearAndMonth.forEach(function(item){
                                        a= a + parseInt(item.income);

                                                          });

                                                    return a;
                                                    
                                                    }
                                else{

                                  
                                                    let a=0;
                                this.incomesListForUserInFamilyByYearAndMonth.forEach(function(item){
                                    a= a + parseInt(item.income);

                                                      });

                                    return a;
                                }
                }
              
              
       },
       expansetotal(){

          this.expansesList<1 || this.expansesListByMonth<1 ||this.expansesListByYear<1 || this.expansesListByYearAndMonth<1 ? 0 : 0;
          this.expansesListForUserInFamily<1 || this.expansesListForUserInFamilyByMonth<1 || this.expansesListForUserInFamilyByYear<1 || this.expansesListForUserInFamilyByYearAndMonth<1 ? 0 : 0; 


              
                                          if (this.selectedMonth=='Show all months' && this.selectedYear=='Show all years'){

                                                        if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                                                    
                                                                                            
                                                            
                                                          

                                                          
                                                  let a=0;
                                                    this.expansesList.forEach(function(item){
                                                        a= a + parseInt(item.expanse);

                                                                          });

                                                                    return a;
                                                              }
                                                                    
                                                else{
                                                            
                                                  
                                                                      let a=0;
                                                  this.expansesListForUserInFamily.forEach(function(item){
                                                      a= a + parseInt(item.expanse);

                                                                        });

                                                    return a;
                                                            
                                                }

                                }

                                else if (this.selectedYear != 'Show all years' && this.selectedMonth=='Show all months'){
                                          if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                                          
                                                                                    
                                                  let a=0;
                                                
                                                    this.expansesListByYear.forEach(function(item){
                                                        a= a + parseInt(item.expanse);

                                                                          });

                                                                    return a;
                                                                    
                                                                    }
                                                else{

                                                  
                                                                        let a=0;
                                                    this.expansesListForUserInFamilyByYear.forEach(function(item){
                                                        a= a + parseInt(item.expanse);

                                                                          });

                                                    return a;
                                                }
                                  }

                                else if(this.selectedYear == 'Show all years' && this.selectedMonth !='Show all months'){
                                    
                                    if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                                          
                                                                                    
                                                  let a=0;
                                                  
                                                    this.expansesListByMonth.forEach(function(item){
                                                        a= a + parseInt(item.expanse);

                                                                          });

                                                                    return a;
                                                                    
                                                                    }
                                                else{

                                                                      
                                                                            let a=0;
                                                        this.expansesListForUserInFamilyByMonth.forEach(function(item){
                                                            a= a + parseInt(item.expanse);

                                                          });

                                                    return a;
                                                }
                                    

                                }

                                else if(this.selectedYear != 'Show all years' && this.selectedMonth !='Show all months'){
                                    if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                                          
                                                                                    
                                                  let a=0;
                                                  
                                                    this.expansesListByYearAndMonth.forEach(function(item){
                                                        a= a + parseInt(item.expanse);

                                                                          });

                                                                    return a;
                                                                    
                                                                    }
                                                else{

                                                  
                                                                    let a=0;
                                                this.expansesListForUserInFamilyByYearAndMonth.forEach(function(item){
                                                    a= a + parseInt(item.expanse);

                                                                      });

                                                    return a;
                                                }
                                }
                
                    
     },

    expansesList(){
      this.chartData={};
        this.$store.getters.expansesForActiveUser.forEach(item=>{
               
                   
                    this.chartData[item.description] = item.expanse;

                       
               

        });
                           
                  
                   //


          
        return this.$store.getters.expansesForActiveUser;

               
    },

    expansesListByMonth(){
            this.chartData={};
           this.$store.getters.expansesForActiveUserByMonth(this.selectedMonth).forEach(item=>{
               
                   
                    this.chartData[item.description] = item.expanse;

                       
               

        });

        
        return this.$store.getters.expansesForActiveUserByMonth(this.selectedMonth);

               
    },

    expansesListByYear(){
            this.chartData={};
            
            console.log(this.$store.getters.expansesForActiveUserByYear(this.selectedYear));
           
      this.$store.getters.expansesForActiveUserByYear(this.selectedYear).forEach(item=>{
               
                   
                    this.chartData[item.description] = item.expanse;

                       
               

        });

        
        return this.$store.getters.expansesForActiveUserByYear(this.selectedYear);

               
    },

    expansesListByYearAndMonth(){
            this.chartData={};

        this.$store.getters.expansesForActiveUserByYearAndMonth(this.selectedYear, this.selectedMonth).forEach(item=>{
               
                   
                    this.chartData[item.description] = item.expanse;

                       
               

        });
                  return this.$store.getters.expansesForActiveUserByYearAndMonth(this.selectedYear, this.selectedMonth);


    },

    //
    expansesListForUserInFamily(){
       this.chartData={};

        this.$store.getters.expansesForActiveUserInFamily.forEach(item=>{
               
                   
                    this.chartData[item.description] = item.expanse;

                       
               

        });

        
        return this.$store.getters.expansesForActiveUserInFamily;

               
    },

    expansesListForUserInFamilyByMonth(){
       this.chartData={};

        this.$store.getters.expansesForActiveUserInFamilyByMonth(this.selectedMonth).forEach(item=>{
               
                   
                    this.chartData[item.description] = item.expanse;

                       
               

        });

        
        return this.$store.getters.expansesForActiveUserInFamilyByMonth(this.selectedMonth);

               
    },

    expansesListForUserInFamilyByYear(){
       this.chartData={};

        this.$store.getters.expansesForActiveUserInFamilyByYear(this.selectedYear).forEach(item=>{
               
                   
                    this.chartData[item.description] = item.expanse;

                       
               

        });

        
        return this.$store.getters.expansesForActiveUserInFamilyByYear(this.selectedYear);

               
    },

    expansesListForUserInFamilyByYearAndMonth(){
         this.chartData={};

        this.$store.getters.expansesForActiveUserInFamilyByYearAndMonth(this.selectedYearthis.selectedMonth).forEach(item=>{
               
                   
                    this.chartData[item.description] = item.expanse;

                       
               

        });

                  return this.$store.getters.expansesForActiveUserInFamilyByYearAndMonth(this.selectedYear, this.selectedMonth);


    },



    chooseExpanseList(){

                if (this.selectedMonth=='Show all months' && this.selectedYear=='Show all years'){
                                if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                           return this.expansesList;
                                                      }
                                else{

                                  return this.expansesListForUserInFamily;
                                }
                }
                                               

                else if (this.selectedYear != 'Show all years' && this.selectedMonth=='Show all months'){

                                    if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                           return this.expansesListByYear;
                                                             }
                                      else{

                                             return this.expansesListForUserInFamilyByYear;   
                                            }

                                  
                                }
                                     

                 else if(this.selectedYear == 'Show all years' && this.selectedMonth !='Show all months'){
                        console.log('proba1');
                                      if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                        console.log('proba2');
                                             return this.expansesListByMonth;
                                                             }
                                      else{

                                             return this.expansesListForUserInFamilyByMonth;   
                                            }

                    

                }

                else if(this.selectedYear != 'Show all years' && this.selectedMonth != 'Show all months'){


                                       if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                              return this.expansesListByYearAndMonth;
                                                             }
                                      else{

                                             return this.expansesListForUserInFamilyByYearAndMonth;   
                                            }
                }
                
                
              },



    incomesList(){

      this.chartDataIncome={};
        this.$store.getters.incomesForActiveUser.forEach(item=>{
               
                   
                    this.chartDataIncome[item.description] = item.income;

                       
               

        });

      return this.$store.getters.incomesForActiveUser;
    },

    incomesListByMonth(){
      this.chartDataIncome={};
           this.$store.getters.incomesForActiveUserByMonth(this.selectedMonth).forEach(item=>{
               
                   
                    this.chartDataIncome[item.description] = item.income;

                       
               

        });

        
        return this.$store.getters.incomesForActiveUserByMonth(this.selectedMonth);

               
    },

    incomesListByYear(){
      this.chartDataIncome={};
           this.$store.getters.incomesForActiveUserByYear(this.selectedYear).forEach(item=>{
               
                   
                    this.chartDataIncome[item.description] = item.income;

                       
               

        });

        
        return this.$store.getters.incomesForActiveUserByYear(this.selectedYear);

               
    },

    incomesListByYearAndMonth(){
              this.chartDataIncome={};
           this.$store.getters.incomesForActiveUserByYearAndMonth(this.selectedYear, this.selectedMonth).forEach(item=>{
               
                   
                    this.chartDataIncome[item.description] = item.income;

                       
               

        });

                  return this.$store.getters.incomesForActiveUserByYearAndMonth(this.selectedYear, this.selectedMonth);


    },

    incomesListForUserInFamily(){
       this.chartDataIncome={};
        this.$store.getters.incomesForActiveUserInFamily.forEach(item=>{
               
                   
                    this.chartDataIncome[item.description] = item.income;

                       
               

        });

        
        return this.$store.getters.incomesForActiveUserInFamily;

               
    },

    incomesListForUserInFamilyByMonth(){
       this.chartDataIncome={};
           this.$store.getters.incomesForActiveUserInFamilyByMonth(this.selectedMonth).forEach(item=>{
               
                   
                    this.chartDataIncome[item.description] = item.income;

                       
               

        });

        
        return this.$store.getters.incomesForActiveUserInFamilyByMonth(this.selectedMonth);

               
    },

    incomesListForUserInFamilyByYear(){
       this.chartDataIncome={};
           this.$store.getters.incomesForActiveUserInFamilyByYear(this.selectedYear).forEach(item=>{
               
                   
                    this.chartDataIncome[item.description] = item.income;

                       
               

        });

        
        return this.$store.getters.incomesForActiveUserInFamilyByYear(this.selectedYear);

               
    },

    incomesListForUserInFamilyByYearAndMonth(){
             this.chartDataIncome={};
           this.$store.getters.incomesForActiveUserInFamilyByYearAndMonth(this.selectedYear, this.selectedMonth).forEach(item=>{
               
                   
                    this.chartDataIncome[item.description] = item.income;

                       
               

        });

                  return this.$store.getters.incomesForActiveUserInFamilyByYearAndMonth(this.selectedYear, this.selectedMonth);


    },

    chooseIncomesList(){

     if (this.selectedMonth=='Show all months' && this.selectedYear=='Show all years'){
                                if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                           return this.incomesList;
                                                      }
                                else{

                                  return this.incomesListForUserInFamily;
                                }
                }
                                               

                else if (this.selectedYear != 'Show all years' && this.selectedMonth=='Show all months'){

                                    if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                           return this.incomesListByYear;
                                                             }
                                      else{

                                             return this.incomesListForUserInFamilyByYear;   
                                            }

                                  
                                }
                                     

                 else if(this.selectedYear == 'Show all years' && this.selectedMonth !='Show all months'){
                        console.log('proba1');
                                      if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                        console.log('proba2');
                                             return this.incomesListByMonth;
                                                             }
                                      else{

                                             return this.incomesListForUserInFamilyByMonth;   
                                            }

                    

                }

                else if(this.selectedYear != 'Show all years' && this.selectedMonth != 'Show all months'){


                                       if(this.$store.getters.getCurrentlyPickedFamily == ''){
                                              return this.incomesListByYearAndMonth;
                                                             }
                                      else{

                                             return this.incomesListForUserInFamilyByYearAndMonth;   
                                            }
                }
                
                
    },

     currentlyPickedFamily(){

      return this.$store.getters.getCurrentlyPickedFamily;
    },
  }

}

  
</script>

<style scoped>

 h6{

    text-align:center;
  }

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

@media only screen and (max-width:515px){

  .total{

    left:0px;
  }

  h6{

    text-align:center;
  }
}

@media only screen and (max-width:320px){

  .total{

    left:0px;
  }

  h6{

    text-align:center;
  }
}

</style>
