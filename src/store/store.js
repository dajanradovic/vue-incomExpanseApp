import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
        state:{
               incometotal: 0,
               expansetotal:0,
               expansesList:[],
               incomesList:[],
               expansesIncomesList:[],
               usersList:[],  



        },

        getters:{
            expanses: state=> {

                return state.expansesList;
            },
            
            expansesAndIncomes: state =>{

                return state.expansesIncomesList;
            },

            incomes: state =>{
                return state.incomesList;  
            },

            users: state =>{

                return state.usersList;
            }

        },

        mutations:{
                setExpansesList: function (state, payload){

                        state.expansesList.push(payload);
                        state.expansesIncomesList.push(payload);
                        

                        state.expansetotal +=parseInt(payload.expanse);
                },

                setIncomesList: function (state, payload){

                        state.incomesList.push(payload);
                        state.expansesIncomesList.push(payload);

                        state.incometotal +=parseInt(payload.income);
                },

                animateItem: function(state, index1){
                        state.expansesIncomesList.forEach(function(item, index){
                                
                                        
                                if (index == index1){

                                        item.animated=true;
                                }
                        });
                },

                setNewUser: function (state, payload){

                        state.usersList.push(payload);


                },

                eraseExpanseFromList: function (state, index1){

                      return  state.expansesIncomesList.forEach(function(item, index){
                                console.log(index, index1);
                                        
                                if (index == index1){

                                        state.expansesIncomesList.splice(index,1);
                                        

                                        if (item.expanse){
                                                state.expansesList.forEach(function(newItem, index2){
                                                        if (JSON.stringify(item) === JSON.stringify(newItem)){
                                                                state.expansesList.splice(index2,1);
                                                                state.expansetotal -=parseInt(item.expanse);
                                                        }


                                        });

                                }
                                else{

                                        state.incomesList.forEach(function(newItem, index2){
                                                if (JSON.stringify(item) === JSON.stringify(newItem)){
                                                        state.incomesList.splice(index2,1);
                                                        state.incometotal -=parseInt(item.income);
                                                }


                                });

                                }


                                        
                        } 

                                

                               

                        });
                                
                        

                        },
                       
                },


                

        

});