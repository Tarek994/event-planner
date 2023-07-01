import { useForm } from "react-hook-form";
import "./contact.css";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="head">
        <h3 className="con-title">Hello let's be in touch </h3>
        <p className="con-bio">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio autem
          praesentium eos harum ipsum accusantium? Autem maiores soluta alias,
          dolore nostrum blanditiis, provident incidunt officia quo possimus,
          dolorem expedita id!
        </p>
      </div>
      <form
        action="https://formsubmit.co/ghalitarek510@gmail.com"
        target="_blank"
        onSubmit={onSubmit}
        method="post"
      >
        <div className="inputs">
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-red mt-1">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}

          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red mt-1">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          <input
            name="subject"
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
          />
          {errors.message && (
            <p className="text-red mt-1">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
        </div>
        <div className="message">
          <textarea
            name="message"
            rows="7"
            className="form-control"
            id="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="box">
          <input
            name="submit"
            type="submit"
            className="form-control bold"
            id="submit"
            value="SEND EMAIL"
          />
        </div>
      </form>
    </div>
  );
};
export default Contact;
