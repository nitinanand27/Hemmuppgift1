class MyList extends React.Component{

render (){

let myArray = ['Nitin', 'Antonio', 'Daniel', 'David', 'Karin'];
let key = 0;
let list = myArray.map(x => <li key ={key++} >{x}</li>);

return <ol>{list}</ol>;
}
}    
class VgList extends React.Component{

render() {   

let list = [{name : 'cat', translation : 'katt' },
            {name : 'dog', translation : 'hund'},
            {name : 'snake', translation : 'orm'},
            {name : 'friend', translation : 'vän'}];
            
var key = 0;
var myList = list.map(x => <li key={x.name+x.translation}> {x.name}={x.translation} </li>);

return <ol>{myList}</ol>;
}
}

ReactDOM.render(<MyList />, document.getElementById('app'));
ReactDOM.render(<VgList />, document.getElementById('app2'));
