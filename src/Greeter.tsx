export default function Greeter(props) {

    console.log(props);
    return <h1>Have a nice day, { props.name }!</h1>
}