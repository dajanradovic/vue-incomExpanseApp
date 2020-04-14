<template>
<div>
<form class="mt-3">
   <div class="row">
   <div class="col-lg-6">
  <div class="form-group">
   
    <label for="exampleFormControlSelect1">Select month</label>
    <select  v-model="object1.selectedMonthIncome" class="form-control form-control-sm" id="exampleFormControlSelect1">
            <option disabled value="" selected >Pick a month</option>

      <option value="January">January</option>
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
      
    </select>
    <span class="text-danger" v-if="selectedMonthIncomeError">Please select a month</span>
  </div>
  
  </div>

     <div class="col-lg-6">
  <div class="form-group">
   
    <label for="exampleFormControlSelect1">Select year</label>
    <select v-model="object1.selectedYearIncome" class="form-control form-control-sm" id="exampleFormControlSelect1">
            <option disabled value="" selected >Pick a year</option>

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
           
    </select>
    <span class="text-danger" v-if="selectedYearIncomeError">Please select a year</span>
  </div>
  </div>
  </div>
      <div class="form-group">
    <label for="exampleFormControlTextarea1">Income description</label>
    <input type="text" maxlength="40" class="form-control" v-model="object1.description" id="exampleFormControlTextarea1" placeholder="income description" />
        <span class="text-danger" v-if="descriptionError">Please write your description</span>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Income amount</label>
    <input type="number" max="7" v-model="object1.income" class="form-control" id="exampleInputPassword1" placeholder="income"  />
        <span class="text-danger" v-if="incomeError">Please write your income amount</span>

  </div>
  <button type="button" v-on:click="submitIncome" class="btn btn-primary">Submit</button>
</form>

</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
   incomesList:[],
      object1:{
      income:'',
      description:'',
      selectedMonthIncome:'',
      selectedYearIncome:''
       },
   
    descriptionError: false,
    incomeError: false,
    selectedMonthIncomeError: false,
    selectedYearIncomeError: false
    


      
    }
  },
  methods: {
      submitIncome (){

        if (this.formValidation()){
        //  alert('hello');
        // this.postDataCopy.name=this.object1.name;
         // this.postDataCopy.surname=this.object1.surname;
         const copy = Object.assign({...this.object1}, {id : Date.now().toString(36).substr(2, 5), animated:false, userId: this.activeUserId, userName: this.getPickedUser, family:this.currentlyPickedFamily});

         //this.postDataCopy.income=this.object1.income;



         //this.incomesList.push(copy);
         this.$store.commit('setIncomesList', copy);
        
           this.object1.income='';
           this.object1.description='';
           this.object1.selectedMonthIncome='';
           this.object1.selectedYearIncome='';
        }


           

  },

  formValidation (){
    
    
       
   
   this.object1.description =='' ? this.descriptionError = true : this.descriptionError = false;
    this.object1.income =='' ?  this.incomeError = true : this.incomeError = false;
     this.object1.selectedMonthIncome =='' ?  this.selectedMonthIncomeError = true : this.selectedMonthIncomeError = false;
     this.object1.selectedYearIncome =='' ?  this.selectedYearIncomeError = true : this.selectedYearIncomeError = false;



    if (this.object1.description == '' || this.object1.income == '' || this.object1.selectedMonthIncome =='' || this.object1.selectedYearIncome ==''){
      
      return false;
    }

    else {

      return true;
    }
 
  
  }
  

  },

  computed:{

    activeUserId(){

           return this.$store.getters.getActiveUser[0].id;

      },

      activeUserName(){

           return this.$store.getters.getActiveUser[0].name;

      },

      currentlyPickedFamily(){

      return this.$store.getters.getCurrentlyPickedFamily;
    },

    getPickedUser(){

      return this.$store.getters.pickedUser;
    }


  }
}
</script>

<style>

</style>
