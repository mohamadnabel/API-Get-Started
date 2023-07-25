import { useEffect, useState } from "react";

function App() {
  const [myArray, setMyArray] = useState([]);

  useEffect(() => {
    fechingTheData();
  }, []);
  const fechingTheData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        return response.json();
      })
      .then((Data) => {
        setMyArray(Data);
        console.log(Data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <div className="App">
      {myArray.map((UserInfo, index) => {
        return (
          <div key={index}>
            <ul>
              <li>
                <h2>Your Name : {UserInfo.username}</h2>
              </li>
              <br></br>
              <li>
                {" "}
                <h4>Company Namy is : {UserInfo.company.name}</h4>
              </li>
              <br></br>
              <li>
                <h4>USERINFO ID :{index}</h4>
              </li>
              <br></br>
              <li>
                {" "}
                <h4>Your Phone Num : {UserInfo.phone}</h4>
              </li>
              <br></br>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
