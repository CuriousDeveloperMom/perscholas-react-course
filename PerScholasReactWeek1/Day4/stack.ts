interface MyStackInterface{
    push: null;
    pop: null;
}

class MyStack implements MyStackInterface{
    constructor(){
        const data = [];
    }
    /**
     * Push needs to put something on the stack
     */
    //push: null;
    push: (item: any) => data.push(item);
    

    /**
     * Pop needs to take something off the stack
     */
    pop: null;
}

