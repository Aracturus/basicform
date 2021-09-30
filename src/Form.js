import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Form = () => {
  // this will keep track on the input field data

  let [inputField, setInputField] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  let [cards, newCards] = useState([]);

  async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    newCards(await response.json());
  }

  //this data will store the submit Data

  useEffect(() => {
    document.querySelector(".btn-danger").disabled = true;
    let cardsView = document.getElementById("cards");
    console.log(cardsView);
  }, []);

  let updateData = (event) => {
    let { name, value } = event.target;
    console.log(name);
    console.log(value);

    setInputField((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  //signup data

  let newSignUp = () => {
    if (inputField.name.length < 3) {
      alert("Please Enter Valid Name");
    } else if (!inputField.email.includes(".com")) {
      alert(".com should be Present in your mail Id");
    } else if (inputField.password.length < 6) {
      alert("Password length should be minimum of size 6");
    } else if (
      !inputField.password.includes("!") &&
      !inputField.password.includes("$")
    ) {
      alert("Passworld should have both '!' and '$'");
    }
    console.log(inputField);

    localStorage.setItem("name", JSON.stringify(inputField));
  };

  //storing the data

  let submitData = (e) => {
    e.preventDefault();
    console.log(inputField);

    if (localStorage.length === 0) {
      setInputField((data) => {
        return {
          ...data,
          name: "",
          email: "",
          password: "",
        };
      });

      document.querySelector(".btn-danger").disabled = false;
      document.querySelector(".btn-green").disabled = true;
    } else {
      let data = localStorage.getItem("name");
      let data1 = JSON.parse(data);

      if (
        data1.name === inputField.name &&
        data1.email === inputField.email &&
        data1.password === inputField.password
      ) {
        getData();
      }
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="row">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputName">Name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="exampleInputName"
                    placeholder="Your Name"
                    value={inputField.name}
                    name="name"
                    onChange={updateData}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="mt-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control mt-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={inputField.email}
                    name="email"
                    onChange={updateData}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="mt-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mt-2"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={inputField.password}
                    name="password"
                    onChange={updateData}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-green mt-3"
                  onClick={submitData}
                >
                  Log In
                </button>

                <button
                  type="submit"
                  className="btn btn-danger ms-3 mt-3"
                  onClick={newSignUp}
                >
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Cards cards={cards} />
    </>
  );
};

export default Form;
