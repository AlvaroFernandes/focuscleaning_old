import { useForm } from "react-hook-form";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-page">
                <img src="/assets/img/contact/photo1.jpeg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-form dark-bg">
                <div className="section-title">
                  <h2 className="text-white">Lets talk...</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-12">
                      <label>Your Name*</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        {...register("name")}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Email Address*</label>
                      <input
                        type="email"
                        placeholder="E-mail Address"
                        {...register("email")}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Phone Number*</label>
                      <input
                        type="number"
                        placeholder="Phone number"
                        {...register("phone")}
                      />
                    </div>
                    <div className="col-12">
                      <label>Subject*</label>
                      <input
                        type="text"
                        placeholder="Subject"
                        {...register("subject")}
                      />
                    </div>
                    <div className="col-12">
                      <label>Message*</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="Write here..."
                        {...register("message")}
                      />
                    </div>
                  </div>
                  <button type="submit" className="bordered-btn">
                    Send now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
