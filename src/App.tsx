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
import Ex72Menu from './Exercises7/Ex72Menu';
import Ex61RestaurantMenu from './Exercises6/Ex61RestaurantMenu';
import UserName from './TypeScriptExercises/UserName';
import UserNameSingleProp from './TypeScriptExercises/UserNameSingleProp';
import UserNameExternallyTyped from './TypeScriptExercises/UserNameExternallyTyped';
import { UserData } from './TypeScriptExercises/UserNameTypes'
import RouterDemo from './RouterDemo/RouterDemo';
import Ex81MapDemo from './Exercises8/Ex81MapDemo';
import Ex82DynamicBookList from './Exercises8/Ex82DynamicBookList';
import Ex92UncontrolledForm from './Exercises9/Ex92UncontrolledForm';
import Ex83DynamicBookList from './Exercises8/Ex83FilteringBookList';
import Ex91ControlledForm from './Exercises9/Ex91ControlledForm';
import TestDemoComponent from './testDemo/TestDemoComponent';
import Ex95InvestmentCalculator from './Exercises9/Ex95InvestmentCalculator';
import LifeCycleDemo from './lifeCycleDemo/LifeCycleDemo';
import APIAccessDemo from './useEffectDemo/APIAccessDemo';
import Ex101QuoteFetcher from './Exercises10/Ex101QuoteFetcher';
import Ex102UserListFilter from './Exercises10/Ex102UserListFilter';


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


  const batmanInfo : UserData = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 40
  }

  return (
    <>    
      <Ex102UserListFilter />

      <Ex101QuoteFetcher />
      <LifeCycleDemo />

      <Ex95InvestmentCalculator />
      
      <Ex92UncontrolledForm />
      <Ex91ControlledForm />
      <Ex83DynamicBookList />
      <Ex82DynamicBookList />
      <Ex81MapDemo books={['Book A', 'Book B', 'Book C']} />   
      <Ex61RestaurantMenu />
      <RouterDemo />
      <UserNameExternallyTyped userData={batmanInfo}/>     
      <UserNameSingleProp userData={{ firstName: "Clark", lastName: "Kent", age: 35}}/>
      <UserName firstName={"John"} lastName="Doe" age={25}/>
      <Ex72Menu />
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
