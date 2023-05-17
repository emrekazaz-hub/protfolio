import "./Contact.css";
const PDF_FILE_URL = "http://localhost:3000/cvbeta.pdf";

const Contact = () => {
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
    style={{paddingTop: "10%"}}
      id="toContact"
      className="container contact-syle"
    >
      <header className="card-header">Contact Me</header>
      <div className="container">
        <div class="mb-3">
          <label
            for="exampleFormControlInput1"
            class="form-label form-labe-color"
          >
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label form-labe-color"
          >
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Herhangi bisey yaz"
            rows="3"
          ></textarea>
          <div className="d-flex justify-content-center button-padding gap-5">
            <button type="button" class="btn btn-color">
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
