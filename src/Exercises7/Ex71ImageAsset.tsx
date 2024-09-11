import mountain from '../assets/helloworld.png';

export default function Ex71ImageAsset() {

    const somePathToYourImage = "../assets/helloworld.png"

    return (
        <div>
            <h1>Hello Asset World</h1>
            <img src={mountain}/>
        </div>
    )
}
