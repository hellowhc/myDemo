
function create(initState){
    var state = initState||{};
    var arr= [];
    function getState(){
        return state;
    }

    function dispath(action){
        console.log(action.value,state[action.type],state[action.value]);
        state[action.type]=action.value;
       
        arr.forEach(ele=>{
            ele();
        })
    }

    function sub(fn){
        arr.push(fn);
    }

    return {
        getState:getState,
        sub:sub,
        dispath:dispath
    }

}