// In this example, we are going to make a request to an API and render the data

function App() {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        // I'm guaranteed that whatever code I stick in here, it will only ever run ONCE
        // throughout the entire lifecycle of the entired application
        // (when I say "the entire application", I don't mean just the App component,
        // I literally mean THE ENTIRE applicaiton)

        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                // Can you finish by setting the response to imageUrl and passing this information via props to the Dog component?
                // you need to "setImageUrl" right here with data.message
            })
    }, [])

    return (
        <div>
            <h1>Random Dogs</h1>
            <Dog src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg" />
            <Dog src="https://images.dog.ceo/breeds/spaniel-brittany/n02101388_3280.jpg"/>
            <Dog src="https://images.dog.ceo/breeds/hound-walker/n02089867_146.jpg"/>
        </div>
    )
}

function Dog(props) {
    return (
       <img src={props.src} alt="A Random Dog" />
    )
}