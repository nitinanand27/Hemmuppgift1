class App extends React.Component{
constructor(props){
super(props);
this.textChange = this.textChange.bind(this);
this.handleChange = this.handleChange.bind(this);
this.componentDidMount = this.componentDidMount.bind(this);
this.state = {msg : 'fetching data...', filterText : '', jsonList : '', length : '0'};
}
	
componentDidMount() {
	let self = this;
	fetch('http://forverkliga.se/JavaScript/api/simple.php?world=all')
   .then(function(response){
	   return response.json();
   })
   .then (function(object){
		self.setState({jsonList : object});
		self.setState({length : object.length});
	}) 
}

textChange(e){
this.setState({filterText : e.target.value});

}
	
handleChange(e){
	let antal = e.target.parentNode.childElementCount;
	this.setState({length : antal-1});
	e.target.remove();
	this.state.length = antal--;
}

render(){
let ftext = this.state.filterText;
let key = 0;
let array=[];
	
	for(let a of this.state.jsonList){
		array.push(a);
	}
//console.log(array);
var list = array.filter(x => x.name.includes(ftext))
				.map(x => <ListItem key= {x.name} name={x.name} pop= {x.population} changeEvent = {this.handleChange} ></ListItem>);					 

let infoText =this.state.msg;
infoText = `List has total ${this.state.length} elements`;

return (
  <div>
    <Filter textChangeEvent = {this.textChange} /> 
    <MyList list = {list} />
    <Info info= {infoText} />
  </div>
);
}
}

class Filter extends React.Component{
render(){
return <input onChange= {this.props.textChangeEvent} placeholder='filter' />;
}
}

class MyList extends React.Component{
render(){
return <ul>{this.props.list}</ul>;
}
}

class Info extends React.Component{
render(){
return <p>{this.props.info}</p>;
}
}

class ListItem extends React.Component{
render(){
return <li key={this.props.key1} onClick= {this.props.changeEvent}>Name: <b>{this.props.name}</b>, &emsp; Population:<b>{this.props.pop}</b>&emsp;<button>Delete</button></li>;
}
}

ReactDOM.render(<App />, document.getElementById('app'));
