<template>
<!-- Default form subscription -->
<form class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Create a single user or user-family</p>

    <p>Fill out the data to set your user properly</p>


    
    <div class="custom-control custom-radio custom-control-inline">
    <input  v-model="picked" type="radio" class="custom-control-input" v-on:change="singleUserForm = true" id="defaultInline1"  value="true" name="inlineDefaultRadiosExample" checked>
    <label class="custom-control-label" for="defaultInline1">Single user</label>
    </div>

    
    <div class="custom-control custom-radio custom-control-inline">
    <input v-model="picked" type="radio"  class="custom-control-input" v-on:change="singleUserForm = false" value="false" id="defaultInline2" name="inlineDefaultRadiosExample">
    <label class="custom-control-label" for="defaultInline2">Family</label>
    </div>

    <!-- Single user form starts here-->
    
    <div v-if="singleUserForm" id="singleUserForm">
   
    <input type="text" id="defaultSubscriptionFormPassword" v-model="singleUserName" class="form-control mb-4 mt-1" placeholder="Name">
         <span class="text-danger" v-if="singleUserNameError">Please fill out your name</span>




    
    <input type="text" id="defaultSubscriptionFormEmail" v-model="singleUserSurname" class="form-control mb-4" placeholder="Surname">
       <span class="text-danger" v-if="singleUserSurnameError">Please fill out your surname</span>

        <p>Select your age-group:</p>

    <div class="custom-control custom-radio custom-control-inline">

        

    <input v-model="singleUserAge" value="0-19" type="radio" class="custom-control-input" id="defaultInline7" name="age">
    <label class="custom-control-label" for="defaultInline7">0-18</label>
    </div>


    

    <div class="custom-control custom-radio custom-control-inline">
    <input v-model="singleUserAge" type="radio" value="19-35" class="custom-control-input" id="defaultInline5" name="age">
    <label class="custom-control-label" for="defaultInline5">19-35</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
    <input v-model="singleUserAge" type="radio" value="35-50" class="custom-control-input" id="defaultInline6" name="age">
    <label class="custom-control-label" for="defaultInline6">35-50</label>
    </div>

    
    <div class="custom-control custom-radio custom-control-inline">
    <input v-model="singleUserAge" type="radio" value="50-65" class="custom-control-input" id="defaultInline3" name="age">
    <label class="custom-control-label" for="defaultInline3">50-65</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline mb-3">
    <input v-model="singleUserAge" type="radio" value="65+" class="custom-control-input" id="defaultInline4" name="age">
    <label class="custom-control-label" for="defaultInline4">65+</label>
    </div>
    <span class="text-danger" v-if="singleUserAgeError">Please check if you have selected your age</span>
    </div>
  

        <!-- Single user form ends here-->


<!-- Family form -->
    <div v-if="!singleUserForm" id="familyForm">
     

    <input type="text" v-model="familySurname" class="form-control  mt-3" placeholder="Family surname">
    <span class="text-danger" v-if="familySurnameError">Please fill out the family surname</span>

    

   
    
    <div class="crta"> 
    <label style="font-size: 12px;" for="exampleFormControlSelect1">Select  number of family members</label>
    <select  v-model="familyMembersNumber"  class="form-control form-control-sm mb-3" id="exampleFormControlSelect1">
      <option disabled value="" selected >Select a number</option>

      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      
           
    </select>
        <span class="text-danger" v-if="familyMembersNumberError">Please select number of family members</span>

</div>
<!-- dynamic list starts -->
<div v-for="item,index in checkFamilyNumber" :key="index" class="crta">
    <input type="text" v-on:change="familyInputVModel($event, item)" :key="index" :value="test['personName' + item]" class="form-control form-control-sm mt-3 mb-1" placeholder="Family member name">

        <p style="font-size: 12px;">Select family member age-group:</p>
    
        <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" v-on:change="familyMemberAge($event, item)" value="0-19" v-bind:id="'defaultInline10' + index" v-bind:name="'age' + index">
    <label class="custom-control-label" v-bind:for="'defaultInline10' + index">0-19</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" v-on:change="familyMemberAge($event, item)" value="19-35" v-bind:id="'defaultInline11' + index" v-bind:name="'age' + index">
    <label class="custom-control-label" v-bind:for="'defaultInline11' + index">19-35</label>
    </div>
   <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" v-on:change="familyMemberAge($event, item)" value="35-50" v-bind:id="'defaultInline12' + index" v-bind:name="'age' + index">
    <label class="custom-control-label" v-bind:for="'defaultInline12' + index">35-50</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline mb-3">
    <input type="radio" class="custom-control-input" v-on:change="familyMemberAge($event, item)" value="50-65" v-bind:id="'defaultInline13' + index" v-bind:name="'age' + index">
    <label class="custom-control-label" v-bind:for="'defaultInline13' + index">50-65</label>
    </div>
    
    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" v-on:change="familyMemberAge($event, item)" value="65+" v-bind:id="'defaultInline14' + index" v-bind:name="'age' + index">
    <label class="custom-control-label" v-bind:for="'defaultInline14' + index">65+</label>
    </div>
        


    
    
     
    </div>

   <span class="text-danger" v-if="personNameError">Please check if you have all family member names filled out</span>
   <span class="text-danger" v-if="personAgeError">Please check if you have selected all family members age</span>
    <!--dynamic list ends-->
       

    </div>
    
    <!-- Sign in button -->
    <button class="btn btn-info btn-block mt-2" v-on:click.prevent="createUser">Create</button>
    <p class="mt-3">Already a user? Click <span id="link" v-on:click="$router.push({ path: '/data' });">here</span> to go to next page</p>

</form>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      bljak:'',
      singleUserForm: true,
      picked: true,
      familyMembersNumber:'',
      familySurname:'',
       test:{},
      singleUserName:'',
      singleUserSurname: '',
      singleUserAge:'',
      personNameError: false,
      errorsArray:[],
    personAgeError: false,
    familySurnameError: false,
    singleUserNameError: false,
    singleUserSurnameError:false,
    singleUserAgeError: false,
    familyMembersNumberError:false
    


      
    }
  },
  methods: {

    incrementIdValues(number){
          this.$store.commit('incrementIdValuesProperty', number);

    },
     
  
 

  formValidation (){

    if (!this.singleUserForm){
    
   /* for (let i=1; i<=this.familyMembersNumber; i++){
             // this.test['personName' + i] =='' ? this.personNameError = true : this.personNameError = false;
              this.test['personAge' + i] =='' ? this.personAgeError = true : this.personAgeError = false;
            //  

          

    };*/
    
          this.errorsArray=[];
        this.personNameError=false;
        this.personAgeError=false;
        this.familySurname =='' ? this.familySurnameError = true : this.familySurnameError = false;
        this.familyMembersNumber=='' ? this.familyMembersNumberError = true : this.familyMembersNumberError = false;

       for (var i=1; i<=this.familyMembersNumber; i++){
                console.log('debugging');

               
              
              if (this.test['personName' + i] =='' ){
                console.log("proba");
                    this.personNameError = true;
                    this.errorsArray.push(Date.now().toString(36).substr(2, 4));
                  }

               if(this.test['personAge' + i] ==''){
                        this.personAgeError = true;
                       this.errorsArray.push(Date.now().toString(36).substr(2, 4));



                  }


                   }
        console.log(this.errorsArray.length);

      if (this.familySurname == '' || this.familyMembersNumber=='' || this.errorsArray.length>0){
                  console.log('majku staru');
                      return false;
                  }

      

                  
            

       else {
                      console.log('debugging2');

                    return true;
                  }
    }

    else{
            

           this.singleUserName =='' ? this.singleUserNameError = true : this.singleUserNameError = false;
          this.singleUserSurname =='' ? this.singleUserSurnameError = true : this.singleUserSurnameError = false;
          this.singleUserAge =='' ? this.singleUserAgeError = true : this.singleUserAgeError = false;

            if (this.singleUserName =='' || this.singeUserSurname =='' || this.singleUserAge == ''){
                    
                    return false;
                  }


                  else {
                      console.log('debugging2');

                    return true;
                  }
              

    }
       
    /*this.object1.surname ==''? this.surnameError = true : this.surnameError = false;
   this.object1.description =='' ? this.descriptionError = true : this.descriptionError = false;
    this.object1.expanse =='' ?  this.expanseError = true : this.expanseError = false;
      this.object1.selectedMonthExpanse =='' ?  this.selectedMonthExpanseError = true : this.selectedMonthExpanseError = false;
     this.object1.selectedYearExpanse =='' ?  this.selectedYearExpanseError = true : this.selectedYearExpanseError = false;*/
/*
    if (this.object1.name == '' || this.object1.surname  == ''|| this.object1.description == '' || this.object1.expanse == '' || this.object1.selectedMonthExpanse =='' || this.object1.selectedYearExpanse ==''){
      console.log ('bla bla bla');
      return false;
    }

    else {

      return true;*/
    
 
  },

  familyInputVModel(event, item){
    
    //console.log(this.test['personName+ 1']);
          console.log(event.currentTarget.value);
        return  this.test['personName' + item] = event.currentTarget.value;
          //  return this.test.personName[index];

      },

      familyMemberAge(event, item){
    
    //console.log(this.test['personName+ 1']);
          console.log(event.currentTarget.value);
        return  this.test['personAge' + item] = event.currentTarget.value;
          //  return this.test.personName[index];

      },

      createUser(){
             this.bljak=this.idValues +1;
             
              this.incrementIdValues(this.bljak);
        if (this.formValidation()){ 
 
                      if(!this.singleUserForm){

                          console.log('debugging3');
                          
                         console.log(this.bljak);
                     const copy = Object.assign({...this.test}, {familySurname: this.familySurname, id:  this.bljak });
                      this.$store.commit('setNewUser', copy);
                      }

                      else{
                                                 console.log(this.bljak);

                        const copy = Object.assign({}, {name : this.singleUserName, surname: this.singleUserSurname, age: this.singleUserAge, id: this.bljak} );
                           this.$store.commit('setNewUser', copy);
                      }
            this.$router.push({ path: '/data' });
 

        }

      }
  },
  computed: {
      checkFamilyNumber(){
          
           if (this.familyMembersNumber==''){

               return '';
           }
           else{
               
               for (let i=1; i<= parseInt(this.familyMembersNumber); i++){

                           //this.$set(this.test, i , ''); // reactive
                         // let newRow='row'+i;
                         // console.log(newRow);
                           this.test = Object.assign({...this.test}, { ['personAge' + i]: '', ['personName' + i]: '' });
                           
               
               }
               return parseInt(this.familyMembersNumber);
           }
          
      },

      idValues(){

        return this.$store.getters.idValues;
      }

      

  },
}
</script>

<style scoped>
.crta{

  border-bottom: 1px solid black;
}

#link{

color: blue;
}

#link:hover{

  color: purple;
  cursor: pointer;
}

</style>
