<template>
<div >

  

<table v-if="expansesAndIncomesList != ''" class="table">

  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Description</th>
      <th scope="col">Incomes</th>
      <th scope="col">Expanses</th>
    </tr>
  </thead>
  
  <transition-group  tag="tbody"> 
  

    <tr  v-for="item, index in expansesAndIncomesList" :key="index"  v-bind:class="[checkClass(item.expanse), item.animated ? 'animated bounceOutLeft' : '' ]" :id="index">
      
      <td>{{index +1}}</th>
      <td>{{item.name}}</td>
      <td>{{item.surname}}</td>
      <td>{{item.description}}</td>
      <td>{{item.income ? item.income + ' kn' : ''}}</td>
      <td>{{item.expanse ? item.expanse + ' kn' : ''}} <i class="fa fa-trash pull-right my-trash" v-on:click.self="eraseExpanse(index);" title="Delete"></i></td>
    
    </tr>
   
  </transition-group>
  
</table>

<transition ></transition>

</div>
</template>

<script>
export default {
  
  
  data () {
    return {
      show: true,
      animated:'',
      
        
    

    }
    },
    methods:{
      
       eraseExpanse(index){
              
              this.$store.commit('animateItem',index);

              //event.target.classList.add('animated bounceOutLeft');

              //this.animate(event);
              setTimeout( () => {this.$store.commit('eraseExpanseFromList',index); 
              this.animated='';},1000);
              
              
           
          
          
          

      },

      checkClass(a){
        return a ? 'bg-warning' : 'bg-secondary';
    },

    animate(){

      //event.target.classList.add('animated bounceOutLeft');
        //this.animated='animated bounceOutLeft';

    }

   


    },

    computed:{

    expansesList(){

      return this.$store.getters.expanses;
    },

    expansesAndIncomesList(){

      return this.$store.getters.expansesAndIncomes;
    }

    

    

   




      
    
  

  
  }}
</script>

<style scoped>
.flex-container {
  display: flex;
justify-content: space-between;

}

.my-trash{

  cursor: pointer;
}

#proba{
  background-color: red;
  height:100px;
  width:100px;
}



</style>
