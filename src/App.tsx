import './App.css'
import Header from './Header'
import Greeter from './Greeter'
import Ex32ColorList from './Exercises3/Ex32ColorList';
import Ex32bColorList2 from './Exercises3/Ex32bColorList2';
import Ex34ContactList from './Exercises3/Ex34ContactList';
import Ex41ConsoleButton from './Exercises4/Ex41ConsoleButton';
import Ex42ConsoleButton from './Exercises4/Ex42ConsoleButton';
import Ex43AlertButton from './Exercises4/Ex43AlertButton';
import Ex44AlertButton from './Exercises4/Ex44AlertButton';
import Ex45GeneralButton from './Exercises4/Ex45GeneralButton';
import Ex52ClickCounter from './Exercises5/Ex52ClickCounter';
import Ex51TextInputReader from './Exercises5/Ex51TextInputReader';
import Ex54ParagraphToggle from './Exercises5/Ex54ParagraphToggle';
import Ex56ThreeFieldForm from './Exercises5/Ex56ThreeFieldForm';
import Ex510ClickCounterLiftedState from './Exercises5/Ex510ClickCounterLiftedState';
import Ex71ImageAsset from './Exercises7/Ex71ImageAsset';

function Hello() {
  return <h1>Hello World</h1>
}

function App() {

  let a = "Lasse Haverinen";
  let b = 2;
  let c = 6;

  const someArrayOfColors = ['blue', 'red', 'yellow', 'green'];

  const persons = [
    {
      name: "John Rambo",
      address: "Armsway 1"
    },
    {
      name: "John Doe",
      address: "Armsway 2"
    },
    {
      name: "Tina Doe",
      address: "Armsway 3"
    },
    {
      name: "Mickey Mouse",
      address: "Goofy Road"
    }
  ];

  function generalButtonWillExecuteThis() {
    console.log('It works! Yay general button');
  }

  return (
    <>
      <Ex71ImageAsset />
      <Ex510ClickCounterLiftedState />
      <Ex56ThreeFieldForm />
      <Ex54ParagraphToggle />
      <Ex51TextInputReader />
      <Ex52ClickCounter />
      <Ex45GeneralButton buttonText="This is General Button" buttonAction={ generalButtonWillExecuteThis }  />
      <Ex44AlertButton alertText="Test alert text" />
      <Ex43AlertButton />
      <Ex42ConsoleButton consoleText="Hello from App.tsx" />
      <Ex41ConsoleButton />
    
      <Ex34ContactList contacts={ persons } />

      <Ex32bColorList2 colors={someArrayOfColors}/>

      <Ex32ColorList color1="yellow" color2="white" color3="black"/>

      <Header />
      <Greeter name="Max" />

    </>
  )
}

export default App
