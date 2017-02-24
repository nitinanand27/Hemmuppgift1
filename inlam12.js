/*
Nu är det dags för ett mer realistiskt exempel. Utgå från övning 11. Anropa API:et 
med world=whatever. Du ska få en JSON-lista med objekt som innehåller landsinformation.
Skriv ut på webbsidan svaret på följande frågor. Tips:
typeof(variabel)==='object' talar om ifall variabel är ett 
objekt eller någon annan datatyp.
1. Hur många människor finns det i hela världen? (jag menar alla
länder som finns i data)
2. Hur många människor finns i Europa?
3. Hur många kvinnor finns det i Zimbabwe?
4. Vilket land har minst befolkning?
5. Vilken kontinent har högst befolkning?
*/

document.querySelector('button').addEventListener('click', FetchData);

function FetchData()
{
 
  
  fetch('http://forverkliga.se/JavaScript/api/simple.php?world=all')
  .then(function(response)
  {
    return response.json();
  })
  
  .then(function(object)
   {
    //console.log(object);
      let total = 0;
      let euro = 0;
      let fPop = 0;
      let land = "";
      let continent = "";
      let array=[];
       
    
     for(let a of object)
        {          
          array.push(a.population);
          let minimumPop = Math.min.apply(Math,array);
          var lll = object.filter(x => x.population == minimumPop); 
          let maxPop = Math.max.apply(Math, array);
          var mmm = object.filter(x => x.population == maxPop);
        }
    
    for(let b of mmm)
      {
        var contName = b.continent;
        var population = b.population;
      }
    
    
     for(let n of lll)
       {
         var name = n.name;
         var people = n.population;
       }      
    
     for(let x of object)
       {
        total += x.population;
       }
              
     for(let y of object)
       {
        var list = object.filter(k => k.continent == 'Europe');
        var zim = object.filter(z => z.name == 'Zimbabwe');
       }
      
     for(let z of list)
       {
        euro += z.population;
       }
    
     for(let z of zim)
       {
        var zimPop = z.population;
        var femPercent = z.pFemale;
       }
      fPop =Math.round(femPercent * zimPop);     
    
    
    document.getElementById('worldPop').innerHTML =`Det finns <strong>${total}</strong> människor i världen`;
    document.getElementById('euroPop').innerHTML=`I själva Europa bor <strong>${euro}</strong> människor`;
    document.getElementById('female').innerHTML = `<strong>${fPop}</strong> female lives in Zimbabwe`;
    document.getElementById('country').innerHTML =`<strong>${name}</strong> har minsta befolkning med bara <strong>${people}</strong>`;
    document.getElementById('continent').innerHTML=`<strong>${contName}</strong> har max befolkning med <strong>${population}</strong>`;
    
   })  
  
}
