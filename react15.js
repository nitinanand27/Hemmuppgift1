class App extends React.Component{
constructor(props){
  super(props);
  this.handleChange1 = this.handleChange1.bind(this);
  this.handleChange2 = this.handleChange2.bind(this);
  this.handleChange3 = this.handleChange3.bind(this);
  this.state = {inputVal1 : '', inputVal2 : '', msg : '', choice : '+'};
}
 
handleChange1(e){
  this.setState ({inputVal1 : e.target.value})
}

handleChange2(e){
  this.setState({inputVal2 : e.target.value})
}

handleChange3(e){
  this.setState({choice : e.target.value})
}

render(){
let num1 = this.state.inputVal1;
let num2 = this.state.inputVal2;
let error = this.state.msg;
let select = this.state.choice;

  if(isNaN(num1) || isNaN(num2))
  {
    error = 'Illegal input, try again';    
  }
  var resultNumber = 0;
  switch(select){
    case '+' :
    resultNumber = Number(num1) + Number(num2);
    break;
    case '-' :
    resultNumber = Number(num1) - Number(num2);
    break;
    case '*' :
    resultNumber = Number(num1) * Number(num2);
    break;
    case '/' :
    resultNumber = Number(num1) / Number(num2);
    break;
    default:
    break;
  }

return(
    <div>
      <InputFirst changeEvent1 ={this.handleChange1} />      
      <Choice changeEvent3 ={this.handleChange3} />
      <InputSecond changeEvent2 ={this.handleChange2} /> =
      <Result result={resultNumber} />
      <Message msg= {error} />      
    </div>
);
}
}

class InputFirst extends React.Component{
render(){
return <input onChange = {this.props.changeEvent1} />;
}
}

class InputSecond extends React.Component{
render(){
return <input onChange = {this.props.changeEvent2} />;
}
}

class Result extends React.Component{
render(){
return <span>{this.props.result}</span>;
}
}

class Message extends React.Component{
render(){
return <p>{this.props.msg}</p>;
}
}

class Choice extends React.Component{
render(){
return (
      <select onChange= {this.props.changeEvent3} v >
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>
);
}
}

ReactDOM.render(<App />, 
      document.getElementById('app'));
