function areYouPlayingBanjo(name) {
    if (name[0] == 'R' || name[0] == 'r') // or (name[0].toLowerCase() === 'r')
    return name + " plays banjo";           // you can write it 
  else                                    //   from ternar
    return name + " does not play banjo"  //    operator {
                                         
  }
  console.log(areYouPlayingBanjo("Adam"));
  console.log(areYouPlayingBanjo("Paul"));
  console.log(areYouPlayingBanjo("Ringo"));
  console.log(areYouPlayingBanjo("bravo"));
  console.log(areYouPlayingBanjo("rolf"));

  function areYouPlayingBanjo1(name) {
    {
  return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo";
      }                             
  } 
  console.log(areYouPlayingBanjo1("Adam"));
  console.log(areYouPlayingBanjo1("Paul"));
  console.log(areYouPlayingBanjo1("Ringo"));
  console.log(areYouPlayingBanjo1("bravo"));
  console.log(areYouPlayingBanjo1("rolf"));
//   или еще оптимальнее
function areYouPlayingBanjo2(name) {
    {
  return (name[0].toLowerCase() == "r" ? name + " plays" : name + " does not play") + " banjo"
      }                             
  } 
  console.log(areYouPlayingBanjo2("Adam"));
  console.log(areYouPlayingBanjo2("Paul"));
  console.log(areYouPlayingBanjo2("Ringo"));
  console.log(areYouPlayingBanjo2("bravo"));
  console.log(areYouPlayingBanjo2("rolf"));

  function areYouPlayingBanjo4(name) {
    if (name.startsWith("R") || name.startsWith("r")) {
      return name + " plays banjo";
    } else return name + " does not play banjo";
  }
  console.log(areYouPlayingBanjo4("Rio"));
  console.log(areYouPlayingBanjo4("rio"));
  console.log(areYouPlayingBanjo4("Nio"));