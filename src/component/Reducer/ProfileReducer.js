let initial={
    name:"kishor",
    age:"34",
    salary:"8900"
}

export const profileReducer=(state=initial,action)=>{

   switch(action.type){
    case "INCREAMENTSALARY":{
        return {
            name:state.name,
            age:"89",
            salary:"399990999"

        }
    }
     default :{
           return state
    }
   }

}

