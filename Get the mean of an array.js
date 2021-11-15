function getAverage(marks){
    return Math.floor(marks.reduce((s,c)=>s+c)/marks.filter(e=>e!=='').length)
  }