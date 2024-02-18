var createCounter = function(init) {
    let c=init;
    return{
        increment(){
            return ++c
        },
        decrement(){
            return --c;
        },
        reset(){
            c=init;
            return c;
        }
    }
};