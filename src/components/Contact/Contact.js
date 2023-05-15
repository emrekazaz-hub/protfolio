import "./Contact.css";

const Contact = () => {

  return (
    <section
      id="toContact"
      className="container contact-syle"
      style={{ background: "#0b0418" }}
    >
      <header className="card-header">Contact Me</header>
      <div className="container">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label form-labe-color">
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
          <label for="exampleFormControlTextarea1" class="form-label form-labe-color">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Herhangi bisey yaz"
            rows="3"
          ></textarea>
          <div className="d-flex justify-content-center button-padding">
          <button type="button" class="btn btn-dark">
            Send
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
