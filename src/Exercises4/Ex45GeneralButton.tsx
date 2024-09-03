import classes from './Ex41ConsoleButton.module.css';


export default function Ex45GeneralButton({ buttonText, buttonAction }) {
    
    return (
        <div className={ classes.button } onClick={ buttonAction }>{ buttonText }</div>
    )
}
