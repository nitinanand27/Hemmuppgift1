/*
Skriv ett HTML-dokument som innehåller följande element: 
en textruta, en knapp och en lista.

1.När man klickar på knappen så ska det läggas till ett nytt
element sist i listan, som har samma text som den som står i 
textrutan.

2. När man klickar på någon av elementen i listan så ska texten i
textrutan ersättas med det som står i elementet man klickade på.

3.Dessutom så ska elementen i listan byta bakgrundsfärg när man 
klickar på dem.

VG-nivå: man ska bara kunna välja ett element i listan åt gången.
Lägg till två knappar. När ett element är valt ska man kunna ändra
texten med hjälp av textrutan och den ena nya knappen. Man ska också
kunna ta bort ett element.
*/

function Magic(){
  
  let inputText = document.getElementById('input').value;
  let ul = document.getElementById('ul');
  let li = document.createElement('li');
  let textNode = document.createTextNode(inputText);
  
  li.appendChild(textNode);
  ul.appendChild(li);
  
  var list = document.getElementsByTagName('li');  
  for(let i in list)
  {
    list[i].addEventListener('click', ShowTextChangeColor);
  }
  
  function ShowTextChangeColor(){
    this.style.color = 'red';    
    document.getElementById('input').value = this.innerHTML;
  }  
  
}
document.getElementById('button').addEventListener('click', Magic);
