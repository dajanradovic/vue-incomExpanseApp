<template>

  <div class="row">
  <div class="col-lg-12 mt-4">
    <div v-show="pickedUser2"   class="card">
      <div class="card-body">
        <h5 syle="color:black;"   class="card-title">{{getActiveUserFullName}}<span id="userAge" class="pull-right">age: {{getActiveUserAge}}</span></h5>
        <p class="card-text">To add your expanses or income, please click on the buttons above. To see all your entries so far, please click on the 'show all' button. To completely delete user click on 'delete'.</p>
        <a href="#" class="btn btn-success">Show all</a>
       <button class="btn btn btn-danger pull-right" v-on:click="deleteUser(activeUser[0].id)">Delete</button>

      </div>
    </div>
  </div>
 
</div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
   
      pickedUser2:true


      
    }
  },

  methods:{
      deleteUser(id){
                    if(confirm("Are you sure you want to delete this user?")){
                   this.$store.commit('deleteUser', id);
                   this.$store.commit('erasePickedUser');
                   this.$store.commit('erasePickedFamily');
                   this.pickedUser2=false;

                    }




      },

      


  },

  computed:{
      activeUser(){

           return this.$store.getters.getActiveUser;

      },
      getActiveUserFullName(){


          if (this.$store.getters.getActiveUser.length < 1) {
            
            return ''
          }
          
          else {
                this.pickedUser2=true;
                return this.$store.getters.getActiveUser[0].name+ ' ' + this.$store.getters.getActiveUser[0].surname;

          }


  },

    currentlyPickedFamily(){

      return this.$store.getters.getCurrentlyPickedFamily;
    },

    getActiveUserAge(){

          if (this.$store.getters.getActiveUser.length < 1) {
            
            return ''
          }
          
          else {

                return this.$store.getters.getActiveUser[0].age;

          }

    }

    

    

    
  

 
  
}
}
</script>

<style scoped>
@media only screen and (max-width:320px){

  

h5{

  font-size:12px;
}
}

</style>
