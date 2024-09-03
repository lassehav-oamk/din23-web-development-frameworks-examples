import classes from './Ex41ConsoleButton.module.css';

export default function Ex41ConsoleButton() {

    function buttonIsClicked() {
        console.log('Hello World from onClick');
    }

    return (
        <div className={ classes.button } onClick={ buttonIsClicked }>ConsoleButton</div>
    )
}
