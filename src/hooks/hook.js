// import React, { useEffect, PureComponent, useCallback, useContext, useState} from 'react';
import React, {useState, useEffect, useRef} from 'react';
import Child from './Child';
import Router from '../Router/router.js'
import './hook.css'
import {Spin} from 'antd'
//declaring new state variable
// function Example(props) {
//     //here
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <p>click to button to set++ counter</p>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>click me</button>
//         </div>
//     )
// }
//declaring new state variable end

//You can use the State Hook more than once in a single component:
// function ExampleWithManyStates() {
//     // Declare multiple state variables!
//     const [age, setAge] = useState(42);
//     const [fruit, setFruit] = useState('banana');
//     const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
//     // ...
//   }
  //You can use the State Hook more than once in a single component: end


//   component sets the document title after React updates the DOM:
// function Example() {
//     const [count, setCount] = useState(0);
//     // Similar to componentDidMount and componentDidUpdate
//     useEffect(() => {
//         //// Update the document title using the browser API
//         document.title = `Yout clicked ${count} times`
//     });

//     return (
//         <div>
//           <p>You clicked {count} times</p>
//           <button onClick={() => setCount(count + 1)}>
//             Click me
//           </button>
//         </div>
//       )
// }
// omponent sets the document title after React updates the DOM: **

//unsubscribing
// function FriendStatus(props) {
//     const [isOnline, setIsOnline] = useState(null);

//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//       console.log(status);
//     }

//     useEffect(() => {
//       ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//       return () => {
//         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//       };
//     });

//     if (isOnline === null) {
//       return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
//   }
//unsubscribing end

//example many state variables
// function ExampleWithManyStates() {
//     // Declare multiple state variables!
//     const [age, setAge] = useState(42);
//     const [fruit, setFruit] = useState('banana');
//     const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
// }
//example many state variables ***

//useEffect

// function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
//useEffect****
//If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

//useEffect Hook
    //example using classes
    // class FriendStatus extends React.Component {
    //     constructor(props) {
    //       super(props);
    //       this.state = { isOnline: null };
    //       this.handleStatusChange = this.handleStatusChange.bind(this);
    //     }

    //     componentDidMount() {
    //       ChatAPI.subscribeToFriendStatus(
    //         this.props.friend.id,
    //         this.handleStatusChange
    //       );
    //     }
    //     componentWillUnmount() {
    //       ChatAPI.unsubscribeFromFriendStatus(
    //         this.props.friend.id,
    //         this.handleStatusChange
    //       );
    //     }
    //     handleStatusChange(status) {
    //       this.setState({
    //         isOnline: status.isOnline
    //       });
    //     }

    //     render() {
    //       if (this.state.isOnline === null) {
    //         return 'Loading...';
    //       }
    //       return this.state.isOnline ? 'Online' : 'Offline';
    //     }
    //   }
    //example using classes **

    //example using functions
    // function FriendStatus(props) {
    //     const [isOnline, setIsOnline] = useState(null);

    //     useEffect(() => {
    //       function handleStatusChange(status) {
    //         setIsOnline(status.isOnline);
    //       }
    //       ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    //       // Specify how to clean up after this effect:
    //       return function cleanup() {
    //         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    //       };
    //     });

    //     if (isOnline === null) {
    //       return 'Loading...';
    //     }
    //     return isOnline ? 'Online' : 'Offline';
    //   }
    //example using functions**
    //hook1
    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    //   }, [count]); // Only re-run the effect if count changes
    //hook1 ****

                // !! If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.

    //useEffect Hook****

//practice
// function Example(props) {
//     const [time, setTime] = useState(new Date().toLocaleTimeString());
//     const [anotherTime, setAnotherTime] = useState(new Date().toLocaleTimeString());
//     useEffect(() => {

//         console.log('barev');
//         let timerId = setInterval(() => {
//             setTime(new Date().toLocaleTimeString());
//             setAnotherTime(new Date().toLocaleTimeString());
//         },1000);
//         return () => {
//             clearInterval(timerId);
//         }
//     },[]); //function scope works once because of depandency
//     return (
//         <div>
//             {time}
//         </div>
//     )
// }
// function Example(props) {
//     const [time, setTime] = useState(new Date().toLocaleTimeString());
//     let [anotherTime, anotherSetTime] = useState(new Date().toLocaleTimeString());
//     useEffect(() => {
//         let timerId = setInterval(() => {
//             setTime(new Date().toLocaleTimeString())
//             //Attention
//             anotherSetTime(new Date().toLocaleTimeString())
//             //end of attention

//         },1000)
//         return () => {
//             clearInterval(timerId);
//         }
//     }, [time]);

//     useEffect(() => {
//         //Attention
//         console.log('something');
//         //here dependency on another time
//         //this function is working after anotherTime change no metter you are using it
//         //in your return or not
//     }, [anotherTime]);
//     return (
//         <h1>{time}</h1>
//     )
// }
//arturs task

// function App1(props) {
//     const [click, setClick] = useState(0);
//     const [time, setTime] = useState(5);
//     const [result, setResult] = useState([]);

//     function handleClick(e) {
//         setClick(click => click + 1);
//         setClick(click => click + 1);
//     }
//     function handleTryAgainClick() {
//         setClick(0);
//         setTime(5);
//     }

//     useEffect(() => {
//         let id = setInterval(() => {
//             setTime(time => time - 1)
//         }, 1000);
//         return () => clearInterval(id)
//     },[]);

//     return (
//         <div>
//             <h1>{time}</h1>
//             <h1>{click}</h1>
//             <button onClick={handleTryAgainClick}>try again</button>
//             <button onClick={handleClick}>click me</button>
//         </div>
//     )

// }
//end of Arturs task
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         // this.resultClick = []
//         this.state = { click: 0, time: 5, result:[] }
//         this.clicking = this.clicking.bind(this)
//         this.tryAgain = this.tryAgain.bind(this)
//     }
//     componentDidMount() {
//         this.timeId = setInterval(() => {
//             this.setState((state, props) => {
//                 if (this.state.time > 0) {
//                     return { time: state.time - 1 }
//                 }
//             })
//         }, 1000)
//     }
//     componentWillUnmount() {

//         clearInterval(this.timeId)
//     }
//     clicking() {
//         if (this.state.time > 0) {
//             this.setState((state, props) => ({ click: ++state.click }))
//         }
//     }
//     tryAgain() {
//         if (this.state.time === 0) {
//             this.setState((state, props) => ({
//                 time: (state.time = 5),
//                 click: (state.click = 0),
//             }))
//         }
//     }
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <div className="congratulations_block">
//                         <p className="congratulations">
//                             {this.state.click >= 60 ? 'Congratulations' : ''}
//                         </p>
//                     </div>

//                     <p>Goal - 60 click</p>
//                     <h1> Time - {this.state.time}</h1>
//                     <h2>Clicks - {this.state.click}</h2>
//                     <button className="button_style" onClick={this.clicking}>
//                         Click me
//                     </button>
//                     <button className="button_style" onClick={this.tryAgain}>
//                         Try Again
//                     </button>
//                 </header>
//             </div>
//         )
//     }
// }

// function App() {
//     const [value, setValue] = useState(15);
//     function handleChange(e) {
//         setValue(e.target.value);
//     }
//     useEffect(() => {
//         document.title = value;
//     },[value]);
//     return(
//         <input value={value} onChange={handleChange}/>
//     )
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 1}
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(e) {
//         this.setState({value: e.target.value})
//     }
//     render() {
//         return (
//             <input value={this.state.value} onChange={this.handleChange}/>
//         )
//     }
// }
// function App(props) {
//     const [time, setTime] = useState(new Date().toLocaleTimeString());
//     const [number, setNumber] = useState(1);

//     useEffect(() => {
//         console.log(setNumber);
//         return function () {
//             console.log(15)
//         }
//     }, []);
//     return (
//         <div>
//              <h1>{number}</h1>
//         </div>
//     )
// }

// setting function as a state
// function App1(props) {
//     setFirst('barev');
//     return (
//         <h1>something</h1>
//     )
// }

                    //custom Hooks
// function useCustomHook(number) {
//     const [first, setFirst] = useState(number);
//     return first
// }
// function UsingCustomHooks() {
//     const first = useCustomHook(16);
//     const second = useCustomHook(15);
//     return (
//         <div>{first}, {second}</div>
//     )
// }
//end of first exmaple

//second ex
// function useCustomHook(initalValue) {
//     const [value, setValue] = useState(initalValue);
//     function setInitialState() {
//         setValue(initalValue);
//     }
//     return [value, setValue, setInitialState];
// }
// function UsingCustomHooks(props) {
//     const [value, setValue, setInitialValue] = useCustomHook(15);
//     const [stateCounter, setStateCounter] = useCustomHook(0);
//     let counter = 0;
//     useEffect(() => {
//         setTimeout(() => {
//             setStateCounter(stateCounter + 1);
//         },15000)
//         let timerId = setInterval(() => {
//             setValue(counter);
//         },5000);
//         return () => {
//             clearInterval(timerId);
//         }
//     }, [])
//     return (
//         <div>
//             {stateCounter ? stateCounter : value}
//         </div>
//     )
// }
//second example ***

//example
// function Button({initialState}) {
//     const [state, setState] = useState(initialState);
//     return (
//         <div>
//             <h1>{state}</h1>
//             <button onClick={() => setState(initialState)}>reset</button>
//             <button onClick={() => setState(prevState => prevState - 1)}>-</button>
//             <button onClick={() => setState(prevState => prevState + 1)}>+</button>
//         </div>
//     )
// }
//***

    //Component change homework
// let obj = {dollar: 522.59, dram: 1, rubli: 7.04, euro: 638.56}
// //main Component Change
// function ChangeInput({handleInputChange, name, value, currentChange}) {

//     return (
//         <div>
//         <label>
//             {name}
//         <input type="text" name={name} value={(value * obj[currentChange] / obj[name]).toFixed(0)} onChange={(e) => handleInputChange(e)} />
//         </label>
//         </div>
//     )
// }

// function Change() {
//     const [value, setValue] = useState(0);
//     const [currentChange, setCurrentChange] = useState('dram');
//     //handlers
//     function handleInputChange(e) {
//         if(Object.is(NaN, +e.target.value)) {return}

//         setValue(e.target.value);
//         setCurrentChange(e.target.name);
//     }
//     const inputs = Object.keys(obj).map((name, index) => {
//         return (
//             <ChangeInput name={name} key={index} handleInputChange={handleInputChange} value={value} currentChange={currentChange}/>
//         )
//     })
//     return (
//         <div>
//             {inputs}
//         </div>
//     )
// }
////main Component change **

    // start
// class BlurExample extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = { isOpen: false };
//       this.timeOutId = null;

//       this.onClickHandler = this.onClickHandler.bind(this);
//       this.onBlurHandler = this.onBlurHandler.bind(this);
//       this.onFocusHandler = this.onFocusHandler.bind(this);
//     }

//     onClickHandler() {
//       this.setState(currentState => ({
//         isOpen: !currentState.isOpen
//       }));
//     }

//     // We close the popover on the next tick by using setTimeout.
//     // This is necessary because we need to first check if
//     // another child of the element has received focus as
//     // the blur event fires prior to the new focus event.
//     onBlurHandler() {
//       this.timeOutId = setTimeout(() => {
//         this.setState({
//           isOpen: false
//         });
//       });
//     }

//     // If a child receives focus, do not close the popover.
//     onFocusHandler() {
//       clearTimeout(this.timeOutId);
//     }

//     render() {
//       // React assists us by bubbling the blur and
//       // focus events to the parent.
//       return (
//         <div onBlur={this.onBlurHandler}
//              onFocus={this.onFocusHandler}>
//           <button onClick={this.onClickHandler}
//                   aria-haspopup="true"
//                   aria-expanded={this.state.isOpen}>
//             Select an option
//           </button>
//           {this.state.isOpen && (
//             <ul>
//               <li>Option 1</li>
//               <li>Option 2</li>
//               <li>Option 3</li>
//             </ul>
//           )}
//         </div>
//       );
//     }
//   }
//** end  example of onblur and onfocus

    //React.createContext(defaultValue)
    //// declare a my context variable with default value
// const myContext = React.createContext(15);
    ////Context.Provider
    //// Context object comes with Provider Component that allows componentsto suscribe to context changes.
// const myContext = React.createContext('15');
// let result = <myContext.Provider value={16}>
//     <h1>barev</h1>
//     <myContext.Consumer>
//         {value => {
//             return (
//                 <h2>{value + 1}</h2>
//             )
//         }}
//     </myContext.Consumer>
// </myContext.Provider>

//complex example ov context

// const themes = {
//     light: {
//       foreground: '#000000',
//       background: '#eeeeee',
//     },
//     dark: {
//       foreground: '#ffffff',
//       background: '#222222',
//     },
//   };
//   const ThemeContext = React.createContext(
//     themes.dark // default value
//   );

//   class ThemedButton extends React.Component {
//     render() {
//       let props = this.props;
//       let theme = this.context;
//       return (
//         <button
//           {...props}
//           style={{backgroundColor: theme.background}}
//         />
//       );
//     }
//   }
//   ThemedButton.contextType = ThemeContext;

//   // An intermediate component that uses the ThemedButton
// function Toolbar(props) {
//     return (
//       <ThemedButton onClick={props.changeTheme}>
//         Change Theme
//       </ThemedButton>
//     );
//   }

//   class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         theme: themes.light,
//       };

//       this.toggleTheme = () => {
//         this.setState(state => ({
//           theme:
//             state.theme === themes.dark
//               ? themes.light
//               : themes.dark,
//         }));
//       };
//     }

//     render() {
//       // The ThemedButton button inside the ThemeProvider
//       // uses the theme from state while the one outside uses
//       // the default dark theme
//       return (
//         <Page>
//           <ThemeContext.Provider value={this.state.theme}>
//             <Toolbar changeTheme={this.toggleTheme} />
//           </ThemeContext.Provider>
//           <Section>
//             <ThemedButton />
//           </Section>
//         </Page>
//       );
//     }
//   }

  //end complex example of context

  //error boundaries example
//   class ErrorBoundary extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { error: null, errorInfo: null };
//     }

//     componentDidCatch(error, errorInfo) {
//       // Catch errors in any components below and re-render with error message
//       this.setState({
//         error: error,
//         errorInfo: errorInfo
//       })
//       // You can also log error messages to an error reporting service here
//     }

//     render() {
//       if (this.state.errorInfo) {
//         // Error path
//         return (
//           <div>
//             <h2>Something went wrong.</h2>
//             <details style={{ whiteSpace: 'pre-wrap' }}>
//               {this.state.error && this.state.error.toString()}
//               <br />
//               {this.state.errorInfo.componentStack}
//             </details>
//           </div>
//         );
//       }
//       // Normally, just render children
//       return this.props.children;
//     }
//   }

//   class BuggyCounter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { counter: 0 };
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//       this.setState(({counter}) => ({
//         counter: counter + 1
//       }));
//     }

//     render() {
//       if (this.state.counter === 5) {
//         // Simulate a JS error
//         throw new Error('I crashed!');
//       }
//       return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
//     }
//   }

//   function App() {
//     return (
//       <div>
//         <p>
//           <b>
//             This is an example of error boundaries in React 16.
//             <br /><br />
//             Click on the numbers to increase the counters.
//             <br />
//             The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
//           </b>
//         </p>
//         <hr />
//         <ErrorBoundary>
//           <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
//           <BuggyCounter />
//           <BuggyCounter />
//         </ErrorBoundary>
//         <hr />
//         <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
//         <ErrorBoundary><BuggyCounter /></ErrorBoundary>
//         <ErrorBoundary><BuggyCounter /></ErrorBoundary>
//       </div>
//     );
//   }
  //end error boundaries example


//   class ClickCounter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: 0};
//         this.incrementCount = this.incrementCount.bind(this)
//     }
//     incrementCount() {
//         this.setState(prevState => {
//             return {count: prevState.count + 1}
//         })
//     }
//     render() {
//         const count = this.state.count;
//         return (
//             <button onClick={this.incrementCount}>Clicked {count} times</button>
//         )
//     }
//  }
// let obj = {dollar: 522.59, dram: 1, rubli: 7.04, euro: 638.56}
// //main Component Change
// function ChangeInput({handleInputChange, name, value, currentChange}) {
//     return (
//         <div>
//         <label>
//             {name}
//         <input type="text" name={name} value={(value * obj[currentChange] / obj[name]).toFixed(0)} onChange={(e) => handleInputChange(e)} />
//         </label>
//         </div>
//     )
// }
// function Change() {
//     const [value, setValue] = useState(0);
//     const [currentChange, setCurrentChange] = useState('dram');
//     //handlers
//     function handleInputChange(e) {
//         if(Object.is(NaN, +e.target.value)) {return}
//         setValue(e.target.value);
//         setCurrentChange(e.target.name);
//     }
//     const inputs = Object.keys(obj).map((name, index) => {
//         return (
//             <ChangeInput name={name} key={index} handleInputChange={handleInputChange} value={value} currentChange={currentChange}/>
//         )
//     })
//     return (
//         <div>
//             {inputs}
//         </div>
//     )
// }
// class OuterClickExample extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = { isOpen: false };
//       this.toggleContainer = React.createRef();

//       this.onClickHandler = this.onClickHandler.bind(this);
//       this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
//     }

//     componentDidMount() {
//       window.addEventListener('click', this.onClickOutsideHandler);
//     }

//     componentWillUnmount() {
//       window.removeEventListener('click', this.onClickOutsideHandler);
//     }

//     onClickHandler() {
//       this.setState(currentState => ({
//         isOpen: !currentState.isOpen
//       }));
//     }

//     onClickOutsideHandler(event) {
//       if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
//         this.setState({ isOpen: false });
//       }
//     }

//     render() {
//       return (
//         <div ref={this.toggleContainer}>
//           <button onClick={this.onClickHandler}>Select an option</button>
//           {this.state.isOpen && (
//             <ul>
//               <li>Option 1</li>
//               <li>Option 2</li>
//               <li>Option 3</li>
//             </ul>
//           )}
//         </div>
//       );
//     }
//   }

// let obj = {dollar: 522.59, dram: 1, rubli: 7.04, euro: 638.56, china: 34, Korea: 17}
// //main Component Change
// function ChangeInput({handleInputChange, name, value, currentChange}) {
//     return (
//         <div>
//         <label>
//             {name}
//         <input type="text" name={name} value={(value * obj[currentChange] / obj[name]).toFixed(0)} onChange={(e) => handleInputChange(e)} />
//         </label>
//         </div>
//     )
// }
// function Change() {
//     const [value, setValue] = useState(0);
//     const [currentChange, setCurrentChange] = useState('dram');
//     //handlers
//     function handleInputChange(e) {
//         if(Object.is(NaN, +e.target.value)) {return}
//         setValue(e.target.value);
//         setCurrentChange(e.target.name);
//     }
//     const inputs = Object.keys(obj).map((name, index) => {
//         return (
//             <ChangeInput name={name} key={index} handleInputChange={handleInputChange} value={value} currentChange={currentChange}/>
//         )
//     })
//     return (
//         <div>
//             {inputs}
//         </div>
//     )
// }

//example ov charts(grafik)
 //and also one thing need to import from react besides below

// ('https://api.covid19api.com/summary', DATA);
    //homework covid-19
// function SearchForm({setInputValue, inputValue}) {
//   function handleInputChange(e) {
//     setInputValue(e.target.value);
//   }
//   return (
//     <input onChange={handleInputChange} value={inputValue} id='search-input'/>
//   )
// }
// function CreateChart(props) {
//   const [data, setData] = useState(null);
//   const [filteredData, setFilteredData] = useState(null)
//   const [inputValue, setInputValue] = useState('');

//   //request
//   useEffect(() => {
//     fetch('https://api.covid19api.com/summary')
//     .then(response => response.json())
//     .then(resolvedData => {
//       setData(resolvedData);
//     });
//   },[]);

//   //lifeCycles
//   // useEffect(() => {
//   //   console.log(data?.Countries);
//   // }, [data]);
//   useEffect(() => {
//     console.log(filteredData)
//   },[filteredData])

//   //handlers
//   function handleClick(e) {
//     if(!inputValue) {
//       return
//     }
//     let capitalizedInput = inputValue[0].toUpperCase() + inputValue.slice(1,inputValue.length);
//     let result = data.Countries.filter(countryInfo => countryInfo.Country.includes(capitalizedInput));
//     setFilteredData(result);
//   }

//   return(
//     <div>
//       <div className="heading">
//       <SearchForm inputValue={inputValue} setInputValue={setInputValue}/>
//       </div>

//       <div className='button'>
//         <button onClick={() => handleClick()}>Search</button>
//       </div>
//       <div className="footer">
//         <h1>Matching results</h1>
//       </div>
//     </div>
//   )

// }

// function MatchingResaults(countryList) {
//   let result = countryList.map(countryInfo => {

//   })
// }
 //end of covid-19

// function InputExample(props) {
//   return (
//     <input value={props.value} onChange={() => props.handleInputChange}/>
//   )
// }
// function containerInput(InputElement) {
//   function Container(props) {
//     const [value, setValue] = useState('');
//     function handleInputChange(e) {
//       setValue(e.target.value)
//     }
//     return (
//       <InputElement value handleInputChange/>
//     )
//   }
// }

//example of useContext
//  const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };

// const ThemeContext = React.createContext(themes.light);

// export default function App() {
//   return (
//     <ThemeContext.Provider value={themes.light}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       I am styled by theme context!
//     </button>
//   );
// }
// end of example of useContext

//example of useReducer
// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }
//end of example of useReducer

//second example of useReducer with init function
// function init(initialCount) {
//   return {count: initialCount};
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     case 'reset':
//       return init(action.payload);
//     default:
//       throw new Error();
//   }
// }

// export default function Counter({initialCount}) {
//   const [state, dispatch] = useReducer(reducer, 15, init);
//   return (
//     <>
//       Count: {state.count}
//       <button
//         onClick={() => dispatch({type: 'reset', payload: 15})}>
//         Reset
//       </button>
//       <button onClick={() => dispatch({type: 'decrement'})}>minus</button>
//       <button onClick={() => dispatch({type: 'increment'})}>plus</button>
//     </>
//   );
// }
//end of example

//example of memo and callback
// export default function Hook() {
//   const [localNumber, setLocalNumber] = useState(0);
//   const [childNumber, setChildNumber] = useState(0);
//   function incrementLocal() {
//     setLocalNumber(state => state + 1);
//   }
//   function changeChildNumber(number) {
//     setChildNumber(number);
//   }
//   const memoizedCallback = useCallback(number => changeChildNumber(number),[])
//   return (
//     <div>
//       <Child number={childNumber} changeNumber={memoizedCallback}/>
//       <br/>
//       <button onClick={incrementLocal}>
//         click to increment local
//       </button>
//       <h1>local: {localNumber}</h1>
//     </div>
//   )
// }
//end of example

//useState with usereducer
// const useStateReducer = (prevState, dispatch) => typeof dispatch === 'function' ? prevState : dispatch;

// const useStateInitializer = initialArg => typeof initialArg === 'function' ? initialArg() : initialArg;
// function useState(initialValue) {
//   return React.useReducer(useStateReducer, initialValue, useStateInitializer);
// }
//  export default function Counter(props) {
//   const [count, setCount] = useState(0);
//   // const increment = () => setCount(count => count + 1);
//   const increment = () => setCount((prevCount) => prevCount + 1);
//   return (
//     <div>
//       <div>the current count is {count}</div>
//       <button onClick={increment}>click me</button>
//     </div>
//   )
// }
//end of example

// useState from useReducer
// const useStateReducer = (prevState, newState) => {
//   if(typeof newState === 'function') {
//     return newState(prevState)
//   } else {
//     return newState;
//   }
// }
// const useStateInitializer = initialValue => {
//   return typeof initialValue === 'function' ? initialValue() : initialValue;
// }
//   function useState(initialValue) {
//     return useReducer(useStateReducer, initialValue, useStateInitializer);
//   }

//  export default function App(props) {
//    const [count, setCount] = useState(() => 10);
//    function handlePlusClick() {
//      setCount((prevCount) => prevCount + 1);
//    }
//    function handleMinusClick() {
//      setCount(prevCount => prevCount - 1)
//    }
//    return (
//      <>
//      <h1>{count}</h1>
//      <button onClick={handlePlusClick}>+</button>
//      <br></br>
//      <button onClick={handleMinusClick}>-</button>
//      </>
//    )
//  }
// //end of example


//useReducer example
// export default function App() {
//   function reducer(state, action) {
//     switch(action) {
//       case 'increment': return state + 1;
//       case 'decrement' : return state - 1;
//       default :throw new Error('wtf is going on');
//     }
//   }
//   function init() {

//   }
//   const [count, dispatch] = useReducer(reducer, 10);
//   return (
// <>
//   <h1>{count}</h1>
//   <button onClick={() => dispatch('decrement')}>minus</button>
//   <button onClick={() => dispatch('increment')}>plus</button>
// </>
//   );
// }
//end of example


//useReducer From useState start not finished yet
// function useReducer(reducer, initalValue, init) {
//   if(!init) {
//     const [state, setState] = useState(init(initalValue));
//   }else {
//     const [state, setState] = useState(initailValue);
//   }
//   return ([state, reducer()])
// }

//end of example

// function Some(props) {
//   return (
//     <button onClick={props.handleClick}></button>
//   )
// }
// function hoc(WrappedComponent, selectData) {
//   return (props) => {
//     const [count, setCount] = useState(0);
//     function handleClick() {
//       setCount(count + 1);
//       console.log('barev');
//     }
//   }
//   return (<WrappedComponent handleClick={() => handleClick}/>)
// }
// export default hoc(Some)


//useReducer from useState
// function useReducer(reducer, initialValue, init) {
//   const [state, setState] = useState(init ? init(initialValue) : initialValue);
  // if(!init) {
  //   const [state, setState] = useState(initialValue);
  // } else {
  //   const [state, setState] = useState(init(initialValue));
  // }
//   function dispatch(value) {
//     setState(reducer(state, value))
//   }
//   return [state, dispatch]
// }
// function reducer(state, value) {
//   switch(value) {
//     case 'Andranik': return 'Tsaturyan';
//     case 'Hayk': return 'Poghosyan';
//     case 'Arman': return 'Tsaturyan';
//     case 'Hovsep': return 'Poghosyan';
//   }
// }
// export default function App(props) {
//   const [state, dispatch] = useReducer(reducer, 'Andranik');
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={() => dispatch('Hayk')}>click</button>
//     </div>
//   )
// }
//end of example


//following component tracks the mouse position in a web app
// export default class MouseTracker extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
//         <h1>Move the mouse around!</h1>
//         <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//       </div>
//     );
//   }
// }

//end of example


// The <Mouse> component encapsulates the behavior we need...
// class Mouse extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

//         {/* ...but how do we render something other than a <p>? */}
//         <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//       </div>
//     );
//   }
// }

// export default class MouseTracker extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Move the mouse around!</h1>
//         <Mouse />
//         <h1>barev</h1>
//       </>
//     );
//   }
// }

//end of example

//cat is moving with mouse
// class Cat extends React.Component {
//   render() {
//     const mouse = this.props.mouse;
//     return (
//       <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fphotos%2FS9OCBwRFV_k&psig=AOvVaw2b7imO6aneaAqeYfG0t1GY&ust=1611231431852000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNC-wvy-qu4CFQAAAAAdAAAAABAD" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//     );
//   }
// }

// class MouseWithCat extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

//         {/*
//           We could just swap out the <p> for a <Cat> here ... but then
//           we would need to create a separate <MouseWithSomethingElse>
//           component every time we need to use it, so <MouseWithCat>
//           isn't really reusable yet.
//         */}
//         <Cat mouse={this.state} />
//       </div>
//     );
//   }
// }

//  export default class MouseTracker extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Move the mouse around!</h1>
//         <MouseWithCat />
//       </div>
//     );
//   }
// }
//end of example

//start of example
// class Cat extends React.Component {
//   render() {
//     const mouse = this.props.mouse;
//     return (
//       <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//     );
//   }
// }

// class Mouse extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

//         {/*
//           Instead of providing a static representation of what <Mouse> renders,
//           use the `render` prop to dynamically determine what to render.
//         */}
//         {this.props.render(this.state)}
//       </div>
//     );
//   }
// }

// export default class MouseTracker extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Move the mouse around!</h1>
//         <Mouse render={mouse => (
//           <Cat mouse={mouse} />
//         )}/>
//       </div>
//     );
//   }
// }

//end of example
// function reducer(state, value) {
//   if(value == 'andranik') {
//     return 'artur'
//   } else if(value === 'artur') {
//     return 'andranik'
//   } else {
//     return 'Mish'
//   }
// }
// //example of useReducer
// export default function App(props) {
//   const [state, setState] = useState('andranik');
//   const [name, dispatch] = useReducer(reducer, 'armen');
//   useEffect(() => {
//     dispatch('andranik');
//   }, []);
//   return (
//     <h1>{name}</h1>
//   )
// }
//end of example
// class app extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {number: 15}
//   }
//   componentDidMount() {
//     console.log('something');
//   }
//   componentWillUnmount() {
//     console.log('heracav');
//   }
//   componentDidUpdate() {
//     console.log('update');
//   }
// }

// function App(props) {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000)
//   }, [])

//   return (
//     <h1>{time}</h1>
//   )
// }
// export default App

// export default function App(props) {
//   const [count, setCount] = useState(0);
//   let name = "как твои дела";
//   return (
//     <div>
//       <h1>{name.slice(0,count)}</h1>
//       <button onClick={() => {setCount(count + 1)}}>click me multiple times</button>
//     </div>
//   )
// }

//uncontrolled components example
  // export default function Uncotrolled() {
  //   let element = useRef(null);
  //   return (
  //     <div>
  //       <input ref={element}/>
  //       <button onClick={() => console.log(element.current.value)}>button</button>
  //     </div>

  //   )
  // }
//end of example
// export default function FirstHook() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>click me</button>
//     </div>

//   )
// }
// export default function App() {
//   const [name, setName] = useState(0);
//   const [date, setDate] = useState(new Date().toLocaleTimeString());
//   useEffect(() => {
//     let timer = setInterval(() => {

//       setDate(new Date().getTime());
//     },1000);

//     return () => {
//       clearInterval(timer);
//     }

//   },[])
// export default function Form() {
//   // 1. Use the name state variable

//   const [name, setName] = useState('Mary');

//   // 2. Use an effect for persisting the form
//   useEffect(function persistForm() {
//     localStorage.setItem('formData', name);
//   });

//   // 3. Use the surname state variable
//   const [surname, setSurname] = useState('Poppins');

//   // 4. Use an effect for updating the title
//   useEffect(async function updateTitle() {

//     async function  foo() {
//       document.title = name + ' ' + surname;
//     }
//    await foo();


//redux connect
import {connect} from 'react-redux'
function App({count}) {
  return (
    <h1>{count}</h1>
  )
}
export default connect((state = {count: 15}) => ({count: state.count}),null)(App);
//end of example