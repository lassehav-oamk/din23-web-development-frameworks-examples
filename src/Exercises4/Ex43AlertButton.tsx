import classes from './Ex41ConsoleButton.module.css';


export default function Ex43AlertButton() {

    /*function someName() {
        alert();
    }

    function withParameters(a, b) {
        let c = a + b +1;
        return c;
    }

    const someName2 = () => alert();

    const withParameters2 = (a, b) => {
        // some code 
        // some more code        
    };*/


    return (
        <div className={ classes.button } onClick={ () => alert('Button Clicked') }>Alert Button</div>
    )
}
