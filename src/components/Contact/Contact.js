import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import React, {useEffect, useState} from "react";
import bgimage from "../Images/ezgif-3-5370643a50.gif";

const PDF_FILE_URL = "http://localhost:3000/cvbeta.pdf";


const Contact = () => {

const [inputEmail , setInputEmail] = useState("");
const [inputText , setInputText] = useState("");

const inputListenerEmail = (e) =>{
  const valueEmail = e.target.value;
  setInputEmail(valueEmail);
};

const inputListenerText = (e) =>{
  const valueText = e.target.value;
  setInputText(valueText);
};

useEffect(() => {
  if (inputEmail !== "") {
    console.log("email: ", inputEmail);
  }
}, [inputEmail]);

useEffect(() => {
  if (inputText !== "") {
    console.log("text: ", inputText);
  }
}, [inputText]);

const buttonCLickListener = (e) => {
  console.log("email : ", inputEmail + "\ntext : " , inputText);
}


  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  
  return (
    <section
      id="toContact"
      className="container contact-syle bg"
    >
      <header className="card-header">Contact Me</header>
      <div className="container">
        <div class="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label form-labe-color"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="emrekzz@outlook.com"
            onChange={inputListenerEmail}
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label form-labe-color"
          >
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Send message.."
            rows="3"
            onChange={inputListenerText}
          ></textarea>
          <div className="d-flex justify-content-center button-padding gap-5">
            <button onClick={buttonCLickListener} type="button" class="btn btn-color">
              Send
            </button>
            <button
              type="button"
              className="btn btn-color"
              onClick={() => {
                handleDownload(PDF_FILE_URL);
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
