const arr = [ { country: 'Russia',  city: 'Moscow' },
{ country: 'Belarus', city: 'Minsk' },
{ country: 'Poland',  city: 'Warsaw' },
{ country: 'Russia',  city: 'Saint Petersburg' },
{ country: 'Poland',  city: 'Krakow' },
{ country: 'Belarus', city: 'Brest' } ];


    arr.sort(function(a, b) 
    {   var f = a.country;  
         var s = b.country;

            if(f.localeCompare(s) < 0)
            return -1;
            else if(f.localeCompare(s) > 0)
            return 1;
            else if(f.localeCompare(s) == 0)
         return 0;
    });

console.log(arr)