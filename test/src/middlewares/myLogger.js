export const myLogger=store=>next=>action=>{
    let tmp
    switch (action.type){
        case 'INCREMENT':
            tmp=`Counter INCREMENTED by 1 and its current value is ${store.getState()+1}`
            break
        case 'DECREMENT':
            tmp=`Counter DECREMENTED by 1 and its current value is ${store.getState()-1}`
            break
        case 'RESET':
            tmp=`Counter RESET its current value is 0`
            break
    }
    console.log(tmp)
    next(action)
}