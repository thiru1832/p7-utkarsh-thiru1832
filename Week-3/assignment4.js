function createStack(){
    items =[]
    return{
       
        push(item){
           items.push(item);
        },
        pop(){
            return items.pop();
        },
        getItems(){
           return items;
        } 
    }
}


const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.getItems());

