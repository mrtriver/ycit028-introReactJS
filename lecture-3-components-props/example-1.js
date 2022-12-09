 console.log("HELLO", window.ReactDOM);   //ReactDOM is the library

function App(){
    return(
        <div>
            <HelloWold firstName="Murat" lastName="Irmak" />
        </div>
    );
}

function HelloWold(props){
    console.log("props", props);
    return <div>Hi {props.firstName} </div>;
}
