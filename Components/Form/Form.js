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
      <div className={styles.secDiv1}>
        <label className={styles.formlabel}>Name</label>
        <input
          name="name"
          value={name.value}
          className={styles.forminput}
          type="text"
          onChange={handleChange}
          placeholder="Enter your Full Name"
        />
        {name.error ? <div className={styles.err}>{name.error}</div> : ""}
      </div>

      {/* email field */}
      <div className={styles.secDiv2}>
        <label className={styles.formlabel}>Email</label>
        <input
          className={styles.forminput}
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Enter your Email Address"
        />
        {email.error ? <div className={styles.err}>{email.error}</div> : ""}
      </div>

      {/* phone number field */}
      <div className={styles.secDiv3}>
        <label className={styles.formlabel}>Phone Number</label>
        <input
          name="phone"
          className={styles.forminput}
          type="tel"
          onChange={handleChange}
          placeholder="Enter your phone number with country code"
        />
        {phone.error ? <div className={styles.err}>{phone.error} </div> : ""}
      </div>

      {/* app/link field */}
      <div className={styles.secDiv4}>
        <label className={styles.formlabel}>
          App/Website Link<span>&#40;optional&#41;</span>
        </label>
        <input
          name="link"
          className={styles.forminput}
          type="text"
          onChange={handleChange}
          placeholder="Enter your App/Website you wish to monetise"
        />
      </div>

      {/* monthly revenue field */}
      <div className={styles.secDiv5}>
        <label className={styles.formlabel}>Monthly Revenue&#40;USD&#41;</label>
        <input
          name="monthlyRevenue"
          className={styles.forminput}
          type="text"
          onChange={handleChange}
          required
          placeholder="Enter your Average revenue in USD"
        />
        {monthlyRevenue.error ? (
          <div className={styles.err}>{monthlyRevenue.error} </div>
        ) : (
          ""
        )}
      </div>

      <button type="submit" disabled={disable} className={styles.btn} value="">
        Get Started
      </button>
      <div className={styles.para}>
        By signing up, you agree to our{" "}
        <span className={styles.span}>Terms</span> and{" "}
        <span className={styles.span}>Privacy Policy</span>
      </div>
    </form>
  );
};

export default Form;
