<template>
<div>

<form class="mt-3">
  <div class="row">
   <div class="col-lg-6">
  <div class="form-group">
   
    <label for="exampleFormControlSelect1">Select month</label>
    <select v-model="object1.selectedMonthExpanse"  class="form-control form-control-sm" id="exampleFormControlSelect1">
        <option disabled value="" selected>Pick a month</option>

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
      
    </select>
        <span class="text-danger" v-if="selectedMonthExpanseError">Please select a month</span>

  </div>
  </div>

     <div class="col-lg-6">
  <div class="form-group">
   
    <label for="exampleFormControlSelect1">Select year</label>
    <select v-model="object1.selectedYearExpanse"  class="form-control form-control-sm" id="exampleFormControlSelect1">
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
        <span class="text-danger" v-if="selectedYearExpanseError">Please select a year</span>

  </div>
  </div>
  </div>
 
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Expanse description</label>
    <input type="text" maxlength="40" class="form-control" v-model="object1.description" id="exampleFormControlTextarea1" placeholder="Expanse description" />
        <span class="text-danger" v-if="descriptionError">Please write your description</span>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Expanse amount</label>
    <input type="number" max="7" v-model="object1.expanse" class="form-control" id="exampleInputPassword1" placeholder="Expanse"  />
        <span class="text-danger" v-if="expanseError">Please write your expanse amount</span>

  </div>
  <button type="button" v-on:click="submitExpanse" class="btn btn-primary">Submit</button>
</form>

</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
   expansesList:[],
      object1:{
       expanse:'',
      description:'',
      selectedMonthExpanse:'',
      selectedYearExpanse:''
       },
    descriptionError: false,
    expanseError: false,
    selectedMonthExpanseError:'',
    selectedYearExpanseError:""
    


      
    }
  },
  methods: {
      submitExpanse (){

        if (this.formValidation()){
        //  alert('hello');
        // this.postDataCopy.name=this.object1.name;
         // this.postDataCopy.surname=this.object1.surname;
         const copy = Object.assign({}, {...this.object1}, {id : Date.now().toString(36).substr(2, 5), animated:false, userId: this.activeUserId, userName: this.getPickedUser, family:this.currentlyPickedFamily});
         copy.animated=false;
         //this.postDataCopy.expanse=this.object1.expanse;



         //this.expansesList.push(copy);
         this.$store.commit('setExpansesList', copy);
       
           this.object1.expanse='';
           this.object1.description='';
            this.selectedMonthExpanse='',
            this.selectedYearExpanse=''

        }


           

  },

  formValidation (){
    
   
       
  
   this.object1.description =='' ? this.descriptionError = true : this.descriptionError = false;
    this.object1.expanse =='' ?  this.expanseError = true : this.expanseError = false;
      this.object1.selectedMonthExpanse =='' ?  this.selectedMonthExpanseError = true : this.selectedMonthExpanseError = false;
     this.object1.selectedYearExpanse =='' ?  this.selectedYearExpanseError = true : this.selectedYearExpanseError = false;

    if (this.object1.description == '' || this.object1.expanse == '' || this.object1.selectedMonthExpanse =='' || this.object1.selectedYearExpanse ==''){
      console.log ('bla bla bla');
      return false;
    }

    else {

      return true;
    }
 /* else   if (this.object1.description ==''){
      this.descriptionError = true;

    }
    else if (this.object1.expanse ==''){
      this.expanseError = true;

    }*/
  }
  },

  computed: {
      setExpansesList(){
        // return  this.object1.expansesList=this.object1.name;
      },

  

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
