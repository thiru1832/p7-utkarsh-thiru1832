function add(a,b){
    return a+b;
}

function memoize(fn){
    const cache_map = new Map();

    return function (...args){

        const key = args.toString;
        if(cache_map.has(key)){
           return cache_map.get(key);
        }
    
        cache_map.set(key,fn(...args));
        return cache_map.get(key);
  }
}

const fun = memoize(add);

function time(fn){
    console.time();
    console.log(fn());
    console.timeEnd();
}

time(() => fun(100,100));
time(() => fun(100,100));
time(() => fun(100,100));
time(() => fun(100,100));

