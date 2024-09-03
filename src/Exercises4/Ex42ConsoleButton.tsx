import classes from './Ex41ConsoleButton.module.css';

export default function Ex42ConsoleButton({ consoleText }) {

    function buttonIsClicked() {
        console.log(consoleText);
    }

    return (
        <div className={ classes.button } onClick={ buttonIsClicked }>ConsoleButton</div>
    )
}
