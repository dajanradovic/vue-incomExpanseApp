<template>

  <div class="row">
  <div class="col-lg-12 mt-3">
    <div v-show="pickedUser2" class="card">
      <div class="card-body">
        <h4  syle="color:black;"><small>family </small>{{currentlyPickedFamily}}</h4>
        <h5 syle="color:black;"   class="card-title pt-2">{{getPickedUser}}<span class="pull-right">age:{{getActiveUserAge}}</span></h5>
        <p class="card-text">To add your expanses or income, please click on the buttons above. To see all your entries so far, please click on the 'show all' button. To completely delete user click on 'delete'.</p>
        <button  class="btn btn-success" v-on:click="$router.push({ path: '/familyResumee' });">Show all</button>
       <button  class="btn btn btn-danger pull-right" v-on:click="deleteUser(activeUser[0].id)">Delete</button>

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

  computed:{
      activeUser(){

           return this.$store.getters.getActiveUser;

      },
    

    getActiveUserAge(){

                     if (this.$store.getters.getActiveUser.length < 1) {
            
            return ''
          }
               else {                                                          
            
          let objectMembersNumber=(parseInt(Object.keys(this.$store.getters.getActiveUser[0]).length) -1) / 2;
         
                       let self=this;
                                                                   console.log('tu sam');

                                    for (let i=1; i<=objectMembersNumber; i++ ){
                                      console.log('tu sam 4');
                                          if (self.activeUser[0]['personName'+i] == self.getPickedUser){
                                            
                                            return self.activeUser[0]['personAge'+i];
                                            
                                          }
                                          
                                    }
               }

      },


    currentlyPickedFamily(){

      return this.$store.getters.getCurrentlyPickedFamily;
    },

    getPickedUser(){

      return this.$store.getters.pickedUser;
    }

},

methods:{
          deleteUser(id){
                    if(confirm("Are you sure you want to delete entire family with all users?")){
                   this.$store.commit('deleteUser', id);
                   this.$store.commit('erasePickedUser');
                   this.$store.commit('erasePickedFamily');
                   console.log("unutra sam");
                   this.pickedUser2=false;

                    }

          }
          
}
}
</script>

<style scoped>


</style>
