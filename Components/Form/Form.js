import styles from "./Form.module.css";
import { useValidation } from "../../hooks/useValidation";

export const isText = RegExp(/^[A-Z ]{3,}$/i);
export const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
export const isPhone = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/);

const stateSchema = {
  name: {
    error: "",
  },
  email: {
    error: "",
  },
  phone: {
    error: "",
  },
  link: {
    error: "",
  },
  monthlyRevenue: {
    error: "",
  },
};
const validateShcema = {
  name: {
    required: true,
    validator: {
      regEx: isText,
      error: "Please provide a valid name",
    },
  },
  email: {
    required: true,
    validator: {
      regEx: isEmail,
      error: "Invalid email address",
    },
  },
  phone: {
    required: true,
    validator: {
      regEx: isPhone,
      error: "Please enter a valid phone number",
    },
  },
  link: {
    required: true,
    validator: {
      error: "Please enter a valid url/link.",
    },
  },
  monthlyRevenue: {
    required: true,
    validator: {
      error: "Please enter a valid number.",
    },
  },
};

const Form = () => {
  const { state, disable, handleChange, handleSubmit } = useValidation(
    stateSchema,
    validateShcema
  );
  const { name, email, phone, monthlyRevenue } = state;
  return (
    <form className={styles.formdiv} onSubmit={handleSubmit}>

    {/* name field */}
      <label className={styles.formlabel}>Name</label>
      <input
        name="name"
        value={name.value}
        className={styles.forminput}
        type="text"
        onChange={handleChange}
      />
      {name.error ? <div>{name.error}</div> : ""}
    {/* email field */}
      <label className={styles.formlabel}>Email</label>
      <input
        className={styles.forminput}
        type="email"
        onChange={handleChange}
        name="email"
      />
      {email.error ? <div>{email.error}</div> : ""}
    {/* phone number field */}
      <label className={styles.formlabel}>Phone Number</label>
      <input
        name="phone"
        className={styles.forminput}
        type="tel"
        onChange={handleChange}
      />
      {phone.error ? <div>{phone.error} </div> : ""}
    {/* app/link field */}
      <label className={styles.formlabel}>
        App/Website Link<span>&#40;optional&#41;</span>
      </label>
      <input
        name="link"
        className={styles.forminput}
        type="text"
        onChange={handleChange}
      />
      {/* monthly revenue field */}
      <label className={styles.formlabel}>Monthly Revenue&#40;USD&#41;</label>
      <input
        name="monthlyRevenue"
        className={styles.forminput}
        type="text"
        onChange={handleChange}
        required
      />
      {monthlyRevenue.error ? (<div>{monthlyRevenue.error} </div>):""}
      <button type="submit" disabled={disable} className={styles.btn} value="">
        Get Started
      </button>
    </form>
  );
};

export default Form;
