import './App.css'
import Header from './Header'
import Greeter from './Greeter'
import Ex32ColorList from './Exercises3/Ex32ColorList';
import Ex32bColorList2 from './Exercises3/Ex32bColorList2';
import Ex34ContactList from './Exercises3/Ex34ContactList';
import Ex41ConsoleButton from './Exercises4/Ex41ConsoleButton';

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

  return (
    <>
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
