<template>


    
  <nav class="navbar" id="mainNavigation">
  <form class="form-inline">
       <router-link to="/" exact tag="button" class="btn btn-sm align-middle btn-warning mr-3" type="button">Create new user</router-link>
        <div class="dropdown">
  <button class="btn btn-sm btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pick a user
  </button>
  <div class="dropdown-menu bg-warning" aria-labelledby="dropdownMenuButton">
   
  
    <template v-for="item, index  in getAllUsers">
    <div v-if="item.name":key="index" class="dropdown">
    <a  class="dropdown-item" v-on:click="pickUser(index)">{{item.name}}</a>
    <!--<a v-for="item  in getFamily"  class="dropdown-item">{{item.familySurname}}<i class="fa fa-chevron-right pl-1"></i></a>-->
    </div>
    <div  v-if="item.familySurname" >
      <div  v-on:mouseover="getChildNodes($event, item.id)" v-on:mouseout="getChildNodesRemove($event)" :key="index" class="btn-group dropright" >
      <a class="dropdown-item"  v-on:mouseover="showFamilyMembersNames($event, index, item.id)" >{{item.familySurname}}<i class="fa fa-caret-right pl-2 mt-2"></i></a>
          
           <div id="dropdown1"  v-on:mouseover="variabl = ''"  v-bind:style="{display: variabl}" :key="index" class="bg-warning dropdown-menu">
                        <a class="dropdown-item" v-for="name, index in familyMemberNames" :key="name" v-on:click="pickUserFromFamily (index)" v-text="name"></a>
                      </div>
    </div>

                        

      </div>
    
      </template>
  


  
  


    
   
  </div>
</div>
   <button v-show="getPickedUser" class="btn btn-sm align-middle btn-success ml-3" v-on:click.prevent="goToUserHomePage()">User homepage</button>

  </form>

   <h6 v-show="getPickedUser" class="bg-warning">Currently picked user is: <span>{{pickedUser}}</span><span v-show="currentlyPickedFamily !=''"> from {{currentlyPickedFamily}} family</span> </h6>
  
</nav>
  



</template>

<script>
export default {
  
  data () {
    return {

        
        proba:false,
        variabl:'',
        familyMemberNames:[],
        pickedUser:'',
        currentlyPickedFamily:'',
        activeFamilyId:''
        
       

    


    }
  },

  methods:{
        getChildNodes(event){
          event.currentTarget.childNodes[2].style.display='block';
          //console.log (c);
           
          
        },

        goToUserHomePage (){

              if (this.currentlyPickedFamily==''){

                             this.$router.push({path : '../data/activeUser'} );
              }

              else{
                            this.$router.push({path : '../data/activeFamily'} );


              }

        },

        getChildNodesRemove(event){
          event.currentTarget.childNodes[2].style.display='';
         
           
          
        },

        pickUser(index1){
              let self=this;
              this.getAllUsers.forEach(function(item1, index){

                    if (index==index1){
                        console.log(item1);
                      self.pickedUser=item1.name;
                      self.$store.commit('setPickedUser', self.pickedUser);
                      self.$store.commit('setActiveId', item1.id);

                      self.currentlyPickedFamily='';

                    }

                    });
              this.$router.push({ path: '../data/activeUser' });


        },

        pickUserFromFamily(index1){
                this.pickedUser=this.familyMemberNames[index1];
                this.$store.commit('setPickedUser',this.pickedUser);
                this.$store.commit('setActiveId', this.activeFamilyId);
                this.$router.push({ path: '../data/activeFamily' });



        },

        showFamilyMembersNames(event, index1, id){
      this.activeFamilyId=id;

          
          this.familyMemberNames=[];
         
          
            let self=this;
              this.getAllUsers.forEach(function(item1, index){

                    if (index==index1){

                      let objectMembersNumber=(parseInt(Object.keys(item1).length) -1) / 2;
                       
                                    for (let i=1; i<=objectMembersNumber; i++ ){

                                          self.familyMemberNames.push(item1['personName' + i]);
                                          self.currentlyPickedFamily=item1.familySurname;
                                          self.$store.commit('setPickedFamily', item1.familySurname);
                                    }
                          }

                        
                    });

              
        }
    
  },

  computed:{
        getUsers(){

              return this.$store.getters.users.filter(function(item){

                    return item.name;

             });
            
        },

        getFamily(){

          return this.$store.getters.users.filter(function(item){

                    return item.familySurname;

             });


        },

        getAllUsers(){
         
          return this.$store.getters.users;
        },

        getPickedUser(){

              if (this.$store.getters.pickedUser ==''){

                return false;
              }

              else return true;
        },

        currentlyPickedFamily(){

      return this.$store.getters.getCurrentlyPickedFamily;
    },




  }

  
  
  }

</script>

<style scoped>

.fa-caret-right{

  font-size:18px;
  display: inline-block;
  vertical-align: text-bottom;
}

#mainNavigation{

    background-color: inherit;
    border-bottom: 1px solid black;
}


#proba{

  width:200px;
  height:200px;
  background-color: red;
}

i{
  font-size:10px;
}

.dropdown-item{

cursor:pointer;
}




</style>
