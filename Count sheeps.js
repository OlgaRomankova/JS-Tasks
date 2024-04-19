// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(sheep) {
     let newSheep = sheep.filter(item => item == true)
     return newSheep.length
  }
  console.log(countSheeps
    ([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))

    function countSheeps1(arr) {
        return arr.filter(Boolean).length;
      }
      console.log(countSheeps1
        ([true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]))

        function countSheeps3(sheep) {
            return sheep.filter(item => item == true).length
                     }
         console.log(countSheeps3
           ([true,  true,  true,  false,
           true,  true,  true,  true ,
           true,  false, true,  false,
           true,  false, false, true ,
           true,  true,  true,  true ,
           false, false, true,  true]))

           function countSheeps4(arrayOfSheep) {
            var num = 0;
            for(i = 0; i < arrayOfSheep.length; i++) {
              if(arrayOfSheep[i]) {
                num += 1;
              }
            }
            return num;
          }
          console.log(countSheeps4
            ([true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true]))

            function countSheeps5(arrayOfSheep) {
                let count = 0;
                
                arrayOfSheep.forEach( function (sheep) {
                  if (sheep)
                    count++;
                });
                
                return count;
              }

              console.log(countSheeps5
                ([true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true, true]))