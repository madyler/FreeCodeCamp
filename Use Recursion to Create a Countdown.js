function countdown(n){
    if(n<1){
      return []
    }else{
      const arr = countdown(n-1)
      arr.unshift(n)
      return arr
    }
  }

  function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
 }

 function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }