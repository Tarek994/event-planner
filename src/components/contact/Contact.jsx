import { useForm } from "react-hook-form";
import "./contact.css"

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
    <div id='contact' className='contact'>
      <div className="head">
        <h3 className="con-title">Hello let's be in touch </h3>
        <p className="con-bio">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Optio autem praesentium eos harum ipsum accusantium?
            Autem maiores soluta alias, dolore nostrum blanditiis,
            provident incidunt officia quo possimus, dolorem expedita id!</p>
      </div>
    </div>
  )
}
 export default Contact