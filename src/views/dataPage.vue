<template>
<div>


<div class="container-fluid"> 

  


    

  



<div class="container">

<div class="row">

<div class="col-lg-6 mt-3">

<nav-dajan></nav-dajan>

<router-view></router-view>
<lista class="mt-4" ></lista>



</div>
<div class="col-lg-6">
<counter></counter>
</div>
</div>



</div>
</div>
</div>







</template>

<script>
export default {
  name: 'fdfg',
  
  data () {
    return {

        animated: false
    


      
    }

  
  },

  created(){
this.$store.state.menuShow=true;

  },
  methods:{
       none(){
          this.animated=true;
          setTimeout(function(){

              
          }, 1500);
          this.animated=false;
          this.apply();
           

     
         
                
      },

      apply(){
        
         this.animated=true;
          setTimeout(function(){

              
          }, 1500);
          this.animated=false;
          this.none();

          
        
        
      }
      
    

  },

  computed:{
        checkIfUserIsPicked(){

        return this.$store.getters.pickedUser;
        }


  },
  mounted(){
    /*
      setInterval(function(){

           document.querySelector('#overlayP').classList='animated flash';
                setTimeout(function(){

                   document.querySelector('#overlayP').classList.remove('animated');
                    document.querySelector('#overlayP').classList.remove('flash');
                },200);
         


      }, 1500);
   

*/

    
    
  

    
   

  },


}
  
</script>

<style scoped>

.flex-container {
  display: flex;
  height: 800px;
  flex-wrap: space-between;
    justify-content: center;

  align-content: center;
}

#sirina{

  min-width: 1024px !important;
}

.overlay{

  background-color:#212326;
  z-index: 10;
  position: absolute;
  top:55px;
  left:0px;
  width: 100%;
  height: 100%;
  opacity:0.9;
  text-align: center;
}

#overlayP{
  position: absolute;
  z-index:11;
  color: white;
  margin: 0 auto;
  left: 30%;
  right: 30%;
  top: 30%;
  
  
  font-family: Courier New;
}
</style>
