function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    var result = [];
   birds.forEach( function (element) {
      if ( !~geese.indexOf(element) ) result.push(element)
  });
    return result
    // return an array containing all of the strings in the input array except those that match strings in geese
  };