import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "./contact-section.css";


const whatsappNumber =
  "919011247245";


const contactDetails = [

  {
    icon: <FaEnvelope />,

    title: "Email Us",

    value:
      "brightbrainsolutions.in@gmail.com",

    link:
      "mailto:brightbrainsolutions.in@gmail.com",
  },


  {
    icon: <FaPhoneAlt />,

    title: "Call Us",

    value:
      "+91 90112 47245",

    link:
      "tel:+919011247245",
  },


  {
    icon: <FaMapMarkerAlt />,

    title: "Our Location",

    value:
      "Maharashtra, India",

    link: null,
  },

];


function ContactSection() {


  const handleSubmit = (event) => {

    event.preventDefault();


    const formData =
      new FormData(
        event.currentTarget
      );


    const fullName =
      formData.get("fullName");


    const phoneNumber =
      formData.get("phoneNumber");


    const emailAddress =
      formData.get("emailAddress");


    const service =
      formData.get("service");


    const projectMessage =
      formData.get(
        "projectMessage"
      );


    const message = `Hello BrightBrain,

I would like to discuss a project.

Name: ${fullName}

Phone: ${phoneNumber}

Email: ${emailAddress}

Required Service: ${service}

Project Requirements:
${projectMessage}

Please share the next steps.

Thank you.`;


    const whatsappUrl =

      `https://wa.me/${whatsappNumber}` +

      `?text=${encodeURIComponent(
        message
      )}`;


    window.open(

      whatsappUrl,

      "_blank",

      "noopener,noreferrer"

    );

  };


  const openGeneralWhatsApp = () => {


    const message =

      "Hello BrightBrain, I would like to know more about your academic and technology services.";


    const whatsappUrl =

      `https://wa.me/${whatsappNumber}` +

      `?text=${encodeURIComponent(
        message
      )}`;


    window.open(

      whatsappUrl,

      "_blank",

      "noopener,noreferrer"

    );

  };


  return (

    <section

      className="contact-section"

      id="contact"

    >


      <div className="contact-container">


        <div className="contact-content">


          <div className="contact-section-label">

            <span></span>

            Let&apos;s Work Together

          </div>


          <h2>

            Have an Idea?

            <span>

              {" "}

              Let&apos;s Build It Together.

            </span>

          </h2>


          <p className="contact-introduction">

            Whether you need support for an academic project,
            research work, website, mobile application,
            software solution or an AI-based idea,
            share your requirements with us.

          </p>


          <div className="contact-benefits">


            <div>

              <FaCheckCircle />

              <span>

                Requirement-focused solutions

              </span>

            </div>


            <div>

              <FaCheckCircle />

              <span>

                Clear and professional communication

              </span>

            </div>


            <div>

              <FaCheckCircle />

              <span>

                Structured development approach

              </span>

            </div>


            <div>

              <FaCheckCircle />

              <span>

                Academic and technical guidance

              </span>

            </div>


          </div>


          <div className="contact-details">


            {contactDetails.map(

              (detail) => (

                <div

                  className="contact-detail"

                  key={detail.title}

                >


                  <div className="contact-detail-icon">

                    {detail.icon}

                  </div>


                  <div>


                    <span>

                      {detail.title}

                    </span>


                    {detail.link ? (

                      <a href={detail.link}>

                        {detail.value}

                      </a>

                    ) : (

                      <p>

                        {detail.value}

                      </p>

                    )}


                  </div>


                </div>

              )

            )}


          </div>


        </div>


        <div className="contact-form-wrapper">


          <div className="contact-form-heading">


            <p>

              START A CONVERSATION

            </p>


            <h3>

              Tell Us About Your Project

            </h3>


            <span>

              Fill in your details and requirements.

              We&apos;ll connect with you to discuss

              the next steps.

            </span>


          </div>


          <form

            className="contact-form"

            onSubmit={handleSubmit}

          >


            <div className="contact-form-row">


              <div className="contact-form-group">


                <label htmlFor="fullName">

                  Full Name

                </label>


                <input

                  id="fullName"

                  name="fullName"

                  type="text"

                  placeholder="Enter your full name"

                  autoComplete="name"

                  required

                />


              </div>


              <div className="contact-form-group">


                <label htmlFor="phoneNumber">

                  Phone Number

                </label>


                <input

                  id="phoneNumber"

                  name="phoneNumber"

                  type="tel"

                  placeholder="+91 XXXXX XXXXX"

                  autoComplete="tel"

                  required

                />


              </div>


            </div>


            <div className="contact-form-group">


              <label htmlFor="emailAddress">

                Email Address

              </label>


              <input

                id="emailAddress"

                name="emailAddress"

                type="email"

                placeholder="Enter your email address"

                autoComplete="email"

                required

              />


            </div>


            <div className="contact-form-group">


              <label htmlFor="service">

                Select Service

              </label>


              <select

                id="service"

                name="service"

                defaultValue=""

                required

              >


                <option

                  value=""

                  disabled

                >

                  Choose the service you need

                </option>


                <option value="Academic Project">

                  Academic Project

                </option>


                <option value="Research Support">

                  Research Support

                </option>


                <option value="Web Development">

                  Web Development

                </option>


                <option value="Mobile Application">

                  Mobile Application

                </option>


                <option value="AI and ML Solution">

                  AI & ML Solution

                </option>


                <option value="Software Development">

                  Software Development

                </option>


                <option value="IT Training">

                  IT Training

                </option>


                <option value="Other Requirement">

                  Other Requirement

                </option>


              </select>


            </div>


            <div className="contact-form-group">


              <label htmlFor="projectMessage">

                Project Requirements

              </label>


              <textarea

                id="projectMessage"

                name="projectMessage"

                rows="5"

                placeholder="Tell us about your idea, requirements or project..."

                required

              ></textarea>


            </div>


            <button

              className="contact-submit-button"

              type="submit"

            >


              Send Inquiry on WhatsApp


              <FaArrowRight />


            </button>


          </form>


          <button

            className="contact-whatsapp-button"

            type="button"

            onClick={
              openGeneralWhatsApp
            }

            aria-label="Contact BrightBrain on WhatsApp"

          >


            <FaWhatsapp />


            Continue on WhatsApp


          </button>


        </div>


      </div>


    </section>

  );

}


export default ContactSection;