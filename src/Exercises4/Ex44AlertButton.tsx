import classes from './Ex41ConsoleButton.module.css';


export default function Ex43AlertButton({ alertText }) {

    return (
        <div className={ classes.button } onClick={ ()  => {
            alert('Button Clicked'); 
            console.log(alertText)
        }}>Alert Button2</div>
    )
}
