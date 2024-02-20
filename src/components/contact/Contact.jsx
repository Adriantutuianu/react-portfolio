import { useState } from "react";
import Lottie from "lottie-react";
import lottieCard from "../../icons/Animation - contact.json";
import MailImage from "../../icons/email img.png";
import LinkedInImage from "../../icons/linkedin.png";
import GithubImage from "../../icons/github img.png";
import { Form, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Render Contact component
  return (
    <main className="contact main-section">
      <h1 className="title">
        Let`s get <span> in touch!</span>
      </h1>
      <div className="contact-wrap">
        <a
          className="item item--mail"
          href="mailto:adriantutuianu01@gmail.com?subject=Contact Adrian"
          title="Email Adrian at adriantutuianu01@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contact-img" src={MailImage} alt="Mail image" />
          <span>Email Adrian</span>
        </a>
        <a
          className="item item--linkedin"
          href="https://www.linkedin.com/in/adrian-tutuianu"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="contact-img"
            src={LinkedInImage}
            alt="linkedin image"
          />
          <span>/in/adriantutuianu</span>
        </a>
        <a
          className="item item--github"
          href="https://github.com/Adriantutuianu"
          title="Github"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contact-img" src={GithubImage} alt="github image" />
          <span>/adriantutuianu</span>
        </a>
      </div>
      <Form className="contact-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            size="sm"
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            size="sm"
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            size="sm"
            required
          />
        </Form.Group>
        <Button
          className="btn-form"
          variant="secondary"
          type="submit"
          size="sm"
        >
          {" "}
          Send!
        </Button>
      </Form>
      <Lottie
        className="lottie-contact-letter"
        animationData={lottieCard}
        loop={true}
      />
    </main>
  );
};

export default Contact;
