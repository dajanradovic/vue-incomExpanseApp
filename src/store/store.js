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
               currentlyPickedFamily:'',
               pickedUser:'',
               animatedSpan: false,
               idValues: 0,
               activeId:'',
               menuShow:false



        },

        getters:{
            expanses: state=> {

                return state.expansesList;
            },

           

            getCurrentlyPickedFamily: state=>{

               return state.currentlyPickedFamily;

            },

            getCurrentlyPickedFamilyObject:state=>{
                return state.usersList.filter(function(item){
                        return item.id == state.activeId;
                           
                            
                    });

            },

            getCurrentlyPickedFamilyNumber:state=>{
               var object = state.usersList.filter(function(item){
                        return item.id == state.activeId;
                           
                            
                    });
                var counter=0;
                    for (var item in object[0]){
                                counter=counter+1;

                    };

                    var number= (counter/2)-1;

                    return number;

                
            },

            pickedUser: state =>{

                return state.pickedUser;
            },
            
            expansesAndIncomes: state =>{

                return state.expansesIncomesList;
            },

            activeId: state=>{
                return state.activeId;
            },

            
           expansesAndIncomesForActiveUser: state =>{

                return state.expansesIncomesList.filter(function(item){
                        return item.userId == state.activeId;
                           
                            
                    });

           },
           //expanses for active user
           expansesForActiveUser: state=>{

                return state.expansesList.filter(function(item){
                        return item.userId == state.activeId;
                           
                            
                    });

           },

           expansesForActiveUserByMonth: (state) => (month)=>{

                return state.expansesList.filter(function(item){
                        return item.userId == state.activeId && item.selectedMonthExpanse == month;
                           
                            
                    });

           },

           expansesForActiveUserByYear: (state) => (year)=>{

                return state.expansesList.filter(function(item){
                        return item.userId == state.activeId && item.selectedYearExpanse == year;
                           
                            
                    });

           },

           expansesForActiveUserByYearAndMonth: (state) => (year, month)=>{

                return state.expansesList.filter(function(item){
                        return item.userId == state.activeId && item.selectedYearExpanse == year && item.selectedMonthExpanse == month;
                           
                            
                    });

           },
           //expanses for activ user end here


           //expanses for active user in family start here
           expansesForActiveUserInFamily: state =>{
                let currentObject=[];
                state.expansesList.forEach(item =>{
                        if(item.userId == state.activeId){
                               

                                if (Object.values(item).includes(state.pickedUser)){
                                               
                                        currentObject.push(item);
                                }


                        }
                               
                         
                    });
                        
                    return currentObject;

           },

           expansesForActiveUserInFamilyByMonth: state =>(month)=>{
                let currentObject=[];
                state.expansesList.forEach(item =>{
                        if(item.userId == state.activeId && item.selectedMonthExpanse == month){
                               

                                if (Object.values(item).includes(state.pickedUser)){
                                               
                                        currentObject.push(item);
                                }


                        }
                               
                         
                    });
                        
                    return currentObject;


           },

           expansesForActiveUserInFamilyByYear: state =>(year)=>{
                let currentObject=[];
                state.expansesList.forEach(item =>{
                        if(item.userId == state.activeId && item.selectedYearExpanse == year){
                               

                                if (Object.values(item).includes(state.pickedUser)){
                                               
                                        currentObject.push(item);
                                }


                        }
                               
                         
                    });
                        
                    return currentObject;


           },

           expansesForActiveUserInFamilyByYearAndMonth: state => (year, month)=>{
                let currentObject=[];
                state.expansesList.forEach(item =>{
                        if(item.userId == state.activeId && item.selectedYearExpanse == year && item.selectedMonthExpanse == month){
                               

                                if (Object.values(item).includes(state.pickedUser)){
                                               
                                        currentObject.push(item);
                                }


                        }
                               
                         
                    });
                        
                    return currentObject;


           },
                      //expanses for active user in family end here



         //incomes for active user in family start here
         incomesForActiveUserInFamily: state =>{
                let currentObject=[];
                state.incomesList.forEach(item =>{
                        if(item.userId == state.activeId){
                               

                                if (Object.values(item).includes(state.pickedUser)){
                                               
                                        currentObject.push(item);
                                }


                        }
                               
                         
                    });
                        
                    return currentObject;

           },

           incomesForActiveUserInFamilyByMonth: state =>(month)=>{
                let currentObject=[];
                state.incomesList.forEach(item =>{
                        if(item.userId == state.activeId && item.selectedMonthIncome == month){
                               

                                if (Object.values(item).includes(state.pickedUser)){
                                               
                                        currentObject.push(item);
                                }


                        }
                               
                         
                    });
                        
                    return currentObject;


           },

           incomesForActiveUserInFamilyByYear: state =>(year)=>{
                let currentObject=[];
                state.incomesList.forEach(item =>{
                        if(item.userId == state.activeId && item.selectedYearIncome == year){
                               

                                if (Object.values(item).includes(state.pickedUser)){
                                               
                                        currentObject.push(item);
                                }


                        }
                               
                         
                    });
                        
                    return currentObject;


           },

           incomesForActiveUserInFamilyByYearAndMonth: state => (year, month)=>{
                let currentObject=[];
                state.incomesList.forEach(item =>{
                        if(item.userId == state.activeId && item.selectedYearIncome == year && item.selectedMonthIncome == month){
                               

                                if (Object.values(item).includes(state.pickedUser)){
                                               
                                        currentObject.push(item);
                                }


                        }
                               
                         
                    });
                        
                    return currentObject;


           },

        //incomes for active user in family end here




           //incomes for active user start here
           incomesForActiveUserByMonth: (state) => (month)=>{

                return state.incomesList.filter(function(item){
                        return item.userId == state.activeId && item.selectedMonthIncome == month;
                           
                            
                    });

           },

           incomesForActiveUserByYear: (state) => (year)=>{

                return state.incomesList.filter(function(item){
                        return item.userId == state.activeId && item.selectedYearIncome == year;
                           
                            
                    });

           },

           incomesForActiveUserByYearAndMonth: (state) => (year, month)=>{

                return state.incomesList.filter(function(item){
                        return item.userId == state.activeId && item.selectedYearIncome == year && item.selectedMonthIncome == month;
                           
                            
                    });

           },

           incomesForActiveUser: state=>{

                return state.incomesList.filter(function(item){
                        return item.userId == state.activeId;
                           
                            
                    });

           },
           //incomes for active user end here


           expansesAndIncomesForActiveUserInFamily: state =>{
                let currentObject=[];
                state.expansesIncomesList.forEach(item =>{
                        if(item.userId == state.activeId){
                               

                                if (Object.values(item).includes(state.pickedUser)){
                                               
                                        currentObject.push(item);
                                }


                        }
                               
                         
                    });
                        
                    return currentObject;

                   

           },

           

           totalExpansesForActiveUser: state=>{
                
                var total=0;

               state.expansesList.forEach(function(item){
                                if (item.userId == state.activeId){
                                     total= total + parseInt(item.expanse);

                                }
                                        
                })

                return total;

               

           },

           

           

           totalIncomesForActiveUser: state=>{
                
               var income=0;
            state.incomesList.forEach(function(item){
                                if (item.userId == state.activeId){
                                      income= income + parseInt(item.income);
                                        console.log(income);
                                }
                        }); 
                        return income;
               
           },

            


            incomes: state =>{
                return state.incomesList;  
            },

            users: state =>{

                return state.usersList;
            },

            idValues: state=>{

                return state.idValues;
            },

            getActiveUser: state=>{
              
            return state.usersList.filter(function(item){
                    return item.id == state.activeId;
                       
                        
                });
                
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

                animateItem: function(state, id){
                        state.expansesIncomesList.forEach(function(item){
                                
                                        
                                if (item.id == id){

                                        item.animated=true;
                                }
                        });
                },

                setNewUser: function (state, payload){

                        state.usersList.push(payload);


                },

                setPickedUser: function(state,payload){
                        state.pickedUser=payload;

                },

                erasePickedUser:function(state){
                                state.pickedUser='';


                },

                setPickedFamily: function(state,payload){
                        state.currentlyPickedFamily=payload;

                },

                erasePickedFamily: function (state){

                        state.currentlyPickedFamily='';


                },

                incrementIdValuesProperty: function(state, payload){

                        state.idValues=state.idValues + payload;
                },

                setActiveId: function (state,payload){
                        state.activeId = payload;

                },

                deleteUser: function (state, payload){


                     

                       return  state.usersList.forEach(function(item, index){
                                
                                        
                                if (item.id == payload){

                                        state.usersList.splice(index,1);
                                }
                        });

                },

                
                eraseExpanseFromList: function (state, id){

                      return  state.expansesIncomesList.forEach(function(item, index){
                                
                                        
                                if (item.id == id){

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