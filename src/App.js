import './App.css';
import React, {useState, useEffect} from 'react';

//// example embedding expressions in JSX
// function App() {
//   function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }

//   const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
//   };

//   const element = (
//     <h1>
//       Hello, {formatName(user)}!
//     </h1>
//   );
//   return (
//     <div>{element}</div>
//   );
// }

////jsx is an expression too
// function App() {
//   let obj = {ando: '16'}
//   let element = obj.ando ? <h1>{obj.ando}</h1> : <h1>Ando</h1>
//   return element
// }

//jsx may contain children
// function App() {
//   let avatars = {urdl:'https://s1.1zoom.me/big7/216/_445833.jpg'};
//   let img = <img src={avatars.urdl}/>
//   // or img = <img src='https://s1.1zoom.me/big7/216/_445833.jpg'/>
//   let element = (
//     <div>
//       <h1>barev!</h1>
//       <h2>Arev!</h2>
//       {img}
//     </div>
//   )
//   return element
// }

// const App = () => {
//   let element = <h1>barev</h1>;
//   //same
//   let element1 = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'hellow world'
//   )
// }

//Rendering components
// function Welcome({name}) {
//   return <h1>{name}</h1>
// }
// function App() {
//   return(
//   <div>
//     <Welcome name="Andranik"/>
//     <Welcome name="Hayk"/>
//     <Welcome name="Sara"/>
//   </div>
//   )
// }

//clock component update itself every second
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello Ando</h1>
//         <h2>we are creating clock {this.props.date.toLocaleTimeString()}</h2>
//       </div>
//       //from now after creating some component I will not delete and reset again function App
//     )
//   }
// }
//step two replace this.props.date with this.state.date
// class Clock extends React.Component {
//   render() {
//         return (
//           <div>
//             <h1>Hello Ando</h1>
//             <h2>we are creating clock {this.state.date.toLocaleTimeString()}</h2>
//           </div>
//         )
//       }
// }
//step3 Add a class constructor that assigns the initial this.state
// class Clock extends React.Component {
//   constructor(props) {
//     super(props); //(*)
//     this.state = {date: new Date()}
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello Ando</h1>
//         <h2>we are creating clock {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }
//step 4 add a timer code to component itself
//adding lifecycle methods componentDidMount and ComponentWillUnmount
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello Ando</h1>
//         <h2>we are creating clock {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }

//   componentDidMount() {
//     this.timerId = setInterval(() => this.tick(), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }
// }
//step5 implementing method tick and setting state (changing initial state by interval)
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()}
//   }

//   componentDidMount() {
//     this.timerId = setInterval(() => this.tick(), 1000)
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }
//   tick() {
//     this.setState({date: new Date()});
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello Ando</h1>
//         <h2>we are creating clock {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }

//clock component without method tick
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   tick() {
//     this.setState({date: new Date()})
//   }
//   componentDidMount() {
//     setInterval(this.tick.bind(this),1000); //do not forget about losing this
//   }
//   render() {
//     return (
//       <h1>{this.state.date.toLocaleTimeString()}</h1>
//     )
//   }
// }

//a component may choose to pass its state down as props to its child components
//component would receive the data in its props and wouldn't know where it comes, it can comes from parent props or state doesn't metter;

// function FormattedDate(props) {
//   return <h2>{props.date.toLocaleTimeString()}</h2>
// }
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.setState({date: props.date});
//   }
//   render() {
//     return (
//       <FormattedDate date={this.props.date}/>
//     )
//   }
// }

//creating App1 component which receives 3 Clocks component
// class Clock extends React.Component {
//   // notice that if we not give props it will not throws undefined it throws ''
//   constructor(props) {
//     super(props);
//     // this.state = {date: 15}
//     this.state = {date: props.date}
//   }
//   // componentDidMount() {
//   //   setInterval(() => this.setState({date: ++this.state.date}),1000);
//   //   //Attention please here this.state.date++ is not setting new state;
//   //   //this.setState({date: new Date()}) // in this case without toLocaleTimeString method will be an Error
//   // }
//   render() {
//     return (<h1>{this.state.date}</h1>);
//   }
// }


      //Handling events
// function forButton() {
//   console.log('there was a click');
// }// when we are working with buttons we should use camelCase rather than lowercase and use curly braces insted string
// let button = (
//   <button onClick={forButton}>click me</button>
// )

//2cannot prevent default by returning false
//in ActionLink component we declare a fanction that preventing the default action of button which was returned by ActionLink component
// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('default action of a tag was prevented');
//   }
//   return (
//     <a href='#' onClick={handleClick}>click me</a>
//   )
// }

//example to determine what is this in Component
// class Clock extends React.Component {
//   static counter=0;
//   constructor(props) {
//     super(props);
//     this.state = {done: props.done, date: new Date()}
//   }
//   componentDidMount() {
//     if(Clock.counter > 0) {
//       setInterval(() => {
//         this.setState({date: new Date()})
//       }, 1000)
//     } else {
//       console.log('blabla');
//       Clock.counter++
//     }
//   }
//   render() {
//     return(
//       <h1>{this.state.date.toLocaleTimeString()}</h1>
//     )
//   }
// }


// class ButtonforFb extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {done: true};
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     document.location.href = 'https://www.facebook.com/';
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick} >click me</button>
//     )
//   }
// }

//class component event listener Togle
// class Toggle extends React.Component  {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState((state) => {
//       return {isToggleOn: !state.isToggleOn}
//     });
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//       {this.state.isToggleOn ? 'On' : 'Off'}
//     </button>
//     )
//   }
// }
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//get around binding this example be careful
// class LoggingButton extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   // Warning: this is *experimental* syntax.
//   handleClick = () => {
//     console.log('this is:', this); //LogingButton copy (wrapped)
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }
//2
// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log(this); //wrapper created by LoggingButton
//   }
//   // notice that we call this.handleClick in arrow function
//   render() {
//     return(
//       <button onClick={() => this.handleClick()}>
//         click me
//       </button>
//     )
//   }
// }
//3
// class LoggingButton extends React.Component {
//   handleClick(e) {
//     console.log(e);
//   }
//   render() {
//     //1
//     return (
//       <button onClick={(e) => this.handleClick(e)}>click me</button>
//     )
//   }
// }
//         //passing arguments to event handlers --> handleClick.bind(this, arg1,arg2)


                            //Conditional Rendering

//ex greeting start of example
// function UserGreeting(props) {
//   return <h1>Welcome Back!</h1>
// }
// function GuestGreeting(props) {
//   return <h1>Please Sign in or up</h1>
// }
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn) {
//     return <UserGreeting/>
//   }
//   return <GuestGreeting/>
// }
// //Logout an loggin buttons
// function LogginButton(props) {
//   return (
//     <button onClick={props.onClick}>Login</button>
//   )
// }
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>Logout</button>
//   )
// }
// // class Loggin control that use Greetings and LogButtons
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false}
//   }
//   //callbacks
//   handleLoginClick(){
//     this.setState({isLoggedIn: true})
//   }
//   handleLogoutClick(){
//     this.setState({isLoggedIn: false})
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if(isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick}/>
//     } else {
//       button = <LogginButton onClick={this.handleLoginClick}/>
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn}/>
//         {button}
//       </div>
//     )
//   }
// }
//finish of example above


        //inline if with logical && operator

//ex with inline && operator
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello</h1>
//       {unreadMessages.length > 0 &&
//       <h1>
//         You have {unreadMessages.length} unread messages
//       </h1>
//       }
//     </div>
//   )
// }
// const messages = ['React', 'Re: React', 'Re:Re:React']; //<Mailbox unreadMessages={messages}/> render it

    //#preventing components from Rendering
//start
// function WarningBanner(props) {
//   if(!props.warn) {
//     return null;
//   }
//   return (
//     <div className="warning">
//       Waringing!
//     </div>
//   )
// }
// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this)
//   }
//   handleToggleClick() {
//     this.setState(state => {
//       return {showWarning: !state.showWarning}
//     })
//   }
//   render() {
//     return (
//       <div>
//       <WarningBanner warn={this.state.showWarning} />
//       <button onClick={this.handleToggleClick}>
//         {this.state.showWarning ? 'hide' : 'show'}
//       </button>
//       </div>
//     )
//   }
// }
//end, render Page

    //lists and keys
//example bullets of li items in ul
// const numbers = [1,2,3,4,5];
// const lists = numbers.map(number => <li>{number}</li>);
// const result = <ul>{lists}</ul>
//end render {result} in div of app

//list inside a component
// function NumberLists (props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map(number => <li>{number}</li>);
//   return (<ul>{listItems}</ul>)
// }
// const numbers = [1,2,3,4,5];
//end render <NumberLists numbers={numbers}/>

//fix the missing key issue
// function NumberLists (props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>);
//   return (<ul>{listItems}</ul>)
// }
// const numbers = [1,2,3,4,5];

//extracting components with keys
//wrong example will go first do not use such that
//start
// function ListItem(props) {
//   const value = props.value;
//   return (
//     //wrong!!! there is no need to specify key here
//     <li key={value.toString()}>{value}</li>
//   )
// }
// function NumberLists(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map(number =>
//     //wrong!@ the key should have been specified here
//       <ListItem value={number}/>
//     );
//   return (
//     <ul>{listItems}</ul>
//   )
// }
// const numbers = [1,2,3,4,5];
// //end of wrong example render <NumberLists numbers={numbers}/>

//start of Correct key usage
// function ListItem(props) {
//   return (
//     //Correct! there is no need to specify key here
//     <li>{props.value}</li>
//   )
// }
// function NumberLists(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map(number =>
//     //!Correct key should be specified inside the array
//     <ListItem key={number.toString()} value={number}/>
//     );
//   return (
//     <ul>{listItems}</ul>
//   )
// }
//or instead of NumberList component use example below
// function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }
// const numbers = [1,2,3,4,5];
//end of correct usage of key render  <NumberLists numbers={numbers}/>
//notice that above we have same name compoent please comments any one of them, before render NumberLists

          //Forms
//log the name form as a "Controlled component"
//notice that onsubmit have set on form but onChange on input
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''}
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   //the argument is event
//   handleChange(event) {
//     this.setState(state => {
//       return {value: event.target.value}
//     });
//   }
//   handleSubmit(event) {
//     console.log(this.state.value + ' have written');
//     this.setState(stat => ({value: ''}))
//     // prenteses around or will not able to write in short
//     //this.setState(state => {value: ''}) // error
//     event.preventDefault(); // remember that we cant return '' for preventing default in react
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={this.state.value} onChange={this.handleChange}/>

//       </label>
//       <input type="submit" value="Submit"/>
//     </form>
//     )

//   }
// }
////end of example

//start of example textarea tag in react
// class EssayForms extends React.Component {
//   constructor(props) {
//     console.log(React.Component);
//     super(props);
//     this.state = {value: 'this is value of textarea tag'};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState(state => ({value: event.target.value}))
//   }
//   handleSubmit(event) {
//     console.log(this.state.value);
//     this.setState({value: ''});
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Essay:
//           <textarea value={this.state.value} onChange={this.handleChange}/>
//         </label>
//         <input type='submit' value="Submit"/>
//         {/*type shold be submit otherwise onSubmit should not work*/}
//       </form>
//     )
//   }
// }
//end of example

//Select tag in React, notice that selected attribute is missing
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.initialState = this.state.value; //to set first states value //
//   }
//   //in this field we do not have what have constructor's this we cant get for example
//   handleChange(event) {
//     this.setState(state => ({value: event.target.value}));
//   }
//   handleSubmit(event) {
//     console.log(this.state.value);
//     this.setState(state => ({value: FlavorForm.initial}));
//     event.preventDefault()
//   }
//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">GrapeFruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type='submit' value='Submit'/>
//       </form>
//     )
//   }
// }
////end of example



// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

//handling multyple inputs example
// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2,
//     }
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleInputChange(event) {
//       const target = event.target;
//       const value = target.type === 'checkbox' ? target.checked : target.value;
//       const name = target.name;

//       this.setState({
//         [name]: value,
//       })
//   }
//   handleSubmit(event) {
//     console.log(`{isGoing: ${this.state.isGoing}, numberOfGuests: ${this.state.numberOfGuests}}`);
//     event.preventDefault()
//   }
//   render() {
//     return(
//       <form onSubmit={this.handleSubmit} >
//         {/* onchange should be on inputs seperately not only on the form itself */}

//         <label>
//           Is going:
//           <input
//           name="isGoing"
//           type="checkbox"
//           checked={this.state.isGoing}
//           onChange={this.handleInputChange}/>
//         </label>

//         <br/>

//         <label>
//           Number of guests:
//           <input
//           name="numberOfGuests"
//           type="number"
//           value={this.state.numberOfGuests}
//           onChange={this.handleInputChange} />
//         </label>
//         <input type='submit' value='Submit'/>

//       </form>
//     )
//   }
// }
////end of example

// let input = <input value="hi"/> //non editabel example
// let input = <input value={null}/>// editable example

                    //Lifting state up

//start of example with boiling water
// function BoilingVerdict(props) {
//   return props.celcius >= 100
//   ? <p>The water would boil</p>
//   : <p>The water would not boil</p>
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {temperature: ''}
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Enter temperature in celcius</legend>
//         <input value={temperature}
//         onChange={this.handleChange}/>
//         <BoilingVerdict celcius={temperature}/>
//       </fieldset>
//     )
//   }
// }
//end of example

//// start Adding a second input as for farenheit work sync.
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''}
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value})
//   }
//   render() {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter a temperature in {scaleNames[scale]}</legend>
//         <input
//         onChange={this.handleChange}
//         value={temperature} />
//       </fieldset>
//     )
//   }
// }
// //// need to change calculateor to render two seperate temperature inputs
// class Calculator extends React.Component {
//   render() {
//     return(
//       <div>
//         <TemperatureInput scale='c'/>
//         <TemperatureInput scale='f'/>
//       </div>
//     )
//   }
// }
// //conversion functions
// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }
// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if(Number.isNaN(input)) {
//     return ''
//   }
//   const output = convert(input);
//   const rounded = Math.round(outpoot * 1000) / 1000;
//   return rounded.toString();
// }
// end of not finished example


//finish example of Lifting up state
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }
//end of fucking big example

//not homework it is up to you create two inputs dollar dram wich will work sync


                    //Composition vs inheritance

//example of children include css 1-15
// function FancyBorder(props) {
//   return(
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   )
// }
// function WelcomeDialog(props) {
//   return (
//     <FancyBorder color='blue'>
//       <h1 className='Dialog-title'>Welcome</h1>
//       <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
//     </FancyBorder>
//   )
// }
//end of example
//own convention instead of using children

//specilization
// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//     </FancyBorder>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <Dialog
//       title="Welcome"
//       message="Thank you for visiting our spacecraft!" />
//   );
//   }
//   // includes cs end of example 19-37

  //composition works also with class components start of example includes css 39-56
  //
  // function FancyBorder(props) {
  //   return (
  //     <div className={'FancyBorder FancyBorder-' + props.color}>
  //       {props.children}
  //     </div>
  //   );
  // }

  // function Dialog(props) {
  //   return (
  //     <FancyBorder color="blue">
  //       <h1 className="Dialog-title">
  //         {props.title}
  //       </h1>
  //       <p className="Dialog-message">
  //         {props.message}
  //       </p>
  //       {props.children}
  //     </FancyBorder>
  //   );
  // }

  // class SignUpDialog extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSignUp = this.handleSignUp.bind(this);
  //     this.state = {login: ''};
  //   }

  //   render() {
  //     return (
  //       <Dialog title="Mars Exploration Program"
  //               message="How should we refer to you?">
  //         <input value={this.state.login}
  //                onChange={this.handleChange} />
  //         <button onClick={this.handleSignUp}>
  //           Sign Me Up!
  //         </button>
  //       </Dialog>
  //     );
  //   }

  //   handleChange(e) {
  //     this.setState({login: e.target.value});
  //   }

  //   handleSignUp() {
  //     alert(`Welcome aboard, ${this.state.login}!`);
  //   }
  // }

  // end of example

 //start of thinking in react example includes css 59
//  class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name}
//         />
//       );
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }

//   handleFilterTextChange(e) {
//     this.props.onFilterTextChange(e.target.value);
//   }

//   handleInStockChange(e) {
//     this.props.onInStockChange(e.target.checked);
//   }

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.handleFilterTextChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockChange}
//           />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: '',
//       inStockOnly: false
//     };

//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }

//   handleFilterTextChange(filterText) {
//     this.setState({
//       filterText: filterText
//     });
//   }

//   handleInStockChange(inStockOnly) {
//     this.setState({
//       inStockOnly: inStockOnly
//     })
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//           onFilterTextChange={this.handleFilterTextChange}
//           onInStockChange={this.handleInStockChange}
//         />
//         <ProductTable
//           products={this.props.products}
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }


// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
 //end of example

                          //HOOKS
//example of hooks
// import React, { useState } from 'react';

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// function FirstHook(props) {
//   let [name, setName] = useState('Ando');
//   let [surname, setSurname] = useState('Tsaturyan');
//   function handleNameChange(e) {
//     name = e.target.value;
//   }
//   function handleSurnameChange(e) {
//     setName(e.target.value);
//   }
//   function handleSurnameChange(e) {
//     setSurname(e.target.value);
//   }
//   return(
//     <div>
//       <input
//       value={name}
//       onChange={handleNameChange}
//       />
//       <input
//       value={surname}
//       onChange={handleSurnameChange}
//       />
//     </div>
//   )
// }

// Arturs burger example
// class Burger extends React.Component {
//   constructor(props) {
//       super(props)
//       this.burger = this.burger.bind(this)
//       this.state = { classList: ['', '', ''], burgerOpen: false }
//   }
//   burger(e) {
//       e.preventDefault()
//       if (!this.state.burgerOpen) {
//           this.setState((state) => ({
//               classList: (state.classList = ['first', 'second', 'third']),
//               burgerOpen: !state.burgerOpen,
//           }))
//       } else {
//           this.setState((state) => ({
//               classList: (state.classList = ['', '', '']),
//               burgerOpen: !state.burgerOpen,
//           }))
//       }

//       console.log(this.state)
//   }
//   render() {
//       return (
//           <div className="main_burger">
//               <div onClick={this.burger} className="main_burger_btn">
//                   <div className={this.state.classList[0]}></div>
//                   <div className={this.state.classList[1]}></div>
//                   <div className={this.state.classList[2]}></div>
//               </div>
//           </div>
//       )
//   }
// }

//step by step redux creating to do list

//
function App(props) {
    const [name, setName] = useState('Armen');
    const [letter, setLetter] = useState(null);
    useEffect(() => {
        if(!letter) {
            console.log('chka')
        } else {
            setLetter('barev ka');
        }
        console.log('barev ka ')

    }, [name]);
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setName(name + 'b')}>click me</button>
        </div>
    )
}
export default App
