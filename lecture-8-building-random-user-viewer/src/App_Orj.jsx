import { useEffect, useState } from "react";

import "./App.css";

// 1-useEffect(() => {},  []  )
// 2-fetch
// 3-setState()                                                            

// const MOCK_DATA = {
//   title: "Mr",
//   first: "Murat",
//   last: "Irmak",
//   email: "mrtriver@hotmail.com",
//   address: "Rue Maritain",
//   city: "Montreal"
// };



function App() {
  // const { title, first, last, email, address, city } = MOCK_DATA; // destructuring



  const [serverData, setServerData] = useState(null)          //*********3-setState()

  useEffect(() => {                                       //*********1-useEffect()

fetch("https://randomuser.me/api/?results=1")
           .then((response) => response.json())           //*********2-fetch  Here inside we can also put handleGetUserClick()
           .then((data) => {
           console.log("data", data);
           setServerData(data)
  })
  },  []  )


if(!serverData){                                         //*******Bouncer: if serverData is not present return null
  return null
}

  //Destructure only the data we need out of the first element of serverData.results
  const firstUser = serverData.results[0] 
  console.log("firstUser", firstUser)

  const title = firstUser.name.title
  const firstName = firstUser.name.first
  const lastName = firstUser.name.last
  const address1 = firstUser.location.street.number + " " + firstUser.location.street.name
  const address2 = firstUser.location.city + " " + firstUser.location.state + " " + firstUser.location.country + " " + firstUser.location.postalcode
  const email = firstUser.email
  const username = firstUser.login.username
  const pictureUrl = firstUser.picture.large 
  
  
  function handleGetUserClick(){
    fetch("https://randomuser.me/api/?results=1")
           .then((response) => response.json())           //Just Copy-Paste fetch here then call it from input --> onClick 
           .then((data) => {
           console.log("data", data);
           setServerData(data)
  })
  }


  
  return (
    <div>
      <header>
        <h2>Random User Profile Viewer</h2>
      </header>

      <main>
        <div className="data-fetcher">
          <label htmlFor="get-user-btn">
            Click the button to obtain a random user button
          </label>
          <input type="button"
                 name="get-user-btn" 
                 value="Get Random User" 
                 onClick = {()=> handleGetUserClick()     //FUnction statement

                  }
                 />
        </div>
        <section className="user-data">
          <span>
            <div>{title + " " + firstName + " " + lastName}</div>
            <div>{address1}</div>
            <div>{address2}</div>
            <div>{email}</div>
            <div>{username}</div>
          </span>

          <span>
            <img src={pictureUrl} alt="user profile" />
          </span>
        </section>
      </main>
    </div>
  );
}

export default App;
