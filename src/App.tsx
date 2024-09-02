import './App.css'
import Header from './Header'
import Greeter from './Greeter'

function Hello() {
  return <h1>Hello World</h1>
}

function App() {

  let a = "Lasse Haverinen";
  let b = 2;
  let c = 6;

  const colors = ['blue', 'red', 'yellow', 'green'];

  return (
    <>
      <Header />
      <Greeter name="Max" example={2}/>
      <Greeter name="Tina"/>
      <Greeter name="Something else" />
    </>
  )
}

export default App
