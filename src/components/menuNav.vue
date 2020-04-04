<template>


    
  <nav class="navbar" id="mainNavigation">
  <form class="form-inline">
       <router-link to="/" exact tag="button" class="btn btn-sm align-middle btn-warning mr-3" type="button">Create new user</router-link>
        <div class="dropdown">
  <button class="btn btn-sm btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu bg-warning" aria-labelledby="dropdownMenuButton">
    <a v-for="item in getUsers" class="dropdown-item" href="#">{{!item.name ? item.familySurname : item.name}}</a>
    
    
  </div>
</div>

  </form>
  
</nav>
  



</template>

<script>
export default {
  
  data () {
    return {

        users: []

    


    }
  },

  computed:{
        getUsers(){



                  return this.$store.getters.users;

        }




  }

  
  
  }
</script>

<style scoped>


#mainNavigation{

    background-color: inherit;
    border-bottom: 1px solid black;
}






</style>
