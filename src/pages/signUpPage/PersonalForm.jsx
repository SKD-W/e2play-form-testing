import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import signUpImg from "./assets/Asset 13.png";
import arrowRgt from "./assets/arrow-right.svg";
import "./PersonalForm.scss";
import AddressForm from "./AddressForm";
import googleIcon from "./assets/Google.png";
import { useState } from "react";
// 


// get formData for Personal details <form/>
const e2pValidationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    sms: yup.string().required("Phone number is required").matches(/^\d{11}$/, "Phone number must be 11 digits"),
    dateOfBirth: yup.date().nullable().required("Date of birth is required").transform((originalValue) => {
        return originalValue === "" ? null : originalValue;
    })
    .transform((originalValue) => (originalValue === "" || isNaN(new Date(originalValue)) ? null : originalValue))
    .max(new Date(), "Date of birth cannot be in the future").test("is-over-18", "You must be at least 18 years old", function (value) {
        const currentDate = new Date();
        const userDateOfBirth = new Date(value);
        const userAge = currentDate.getFullYear() - userDateOfBirth.getFullYear();
        const birthMonth = currentDate.getMonth() - userDateOfBirth

        return userAge > 18 || (userAge === 18 && birthMonth >= 0);
    }),
});  

function PersonalForm() {
    const [currentForm, setCurrentForm] = useState(1);

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(e2pValidationSchema)
    });

    // () => for email validation
    const handleSignIn = async (event) => {
        try {
          const emailOptions = ["user1@example.com", "user2@example.com", "user3@example.com"];
          
          const selectedEmail = await window.prompt('Choose your email:', emailOptions.join('\n'));
          event.preventDefault();
      
          if (selectedEmail && emailOptions.includes(selectedEmail)) {
            console.log(`Signed in with email: ${selectedEmail}`);
          } else {
            console.error('Sign-in canceled or invalid email selected.');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
    };

    // () => for login
    

    // async () => { }
    const onSubmit = async (formData) => {
        try {
            const response = await axios.post(/* post response */ "https://jsonplaceholder.typicode.com/posts", formData);
            console.log("Response Data:", response.data);

            setCurrentForm(currentForm => currentForm + 1);
        } catch (error) {
            console.error("Axios Error:", error);
        }

        setCurrentForm(currentForm + 1);
    };

  return (
    <div className="personal-form-details">
        <div className="personal-grid-form">
            <div className="row">
                <div className="col-lg-6 image-form-box">
                    <img src={signUpImg} alt="" />
                </div>
                <div className="col-lg-6 form-input-box">
                    {currentForm === 1 && (
                        <form action="submitForm" onSubmit={handleSubmit(onSubmit)}>
                            <h1>Sign Up</h1>
                            <div>
                                <input type="text" id="firstName" name="firstName" placeholder="First Name" {...register("firstName")} />
                                {errors.firstName &&
                                    <p>{errors.firstName.message}</p>
                                }
                            </div>
                            <br/>
                            <div>
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name" {...register("lastName")} />
                                {errors.lastName &&
                                    <p>{errors.lastName.message}</p>
                                }
                            </div>
                            <br/>
                            <div>
                                <input type="text" id="phoneNumber" name="phoneNumber" placeholder="SMS" {...register("sms")} />
                                {errors.sms &&
                                    <p>{errors.sms.message}</p>
                                }
                            </div>
                            <br/>
                            <div>
                                <input type="date" id="dateOfBirth" name="dateOfBirth" placeholder="" {...register("dateOfBirth")} />
                                {errors.dateOfBirth &&
                                    <p>{errors.dateOfBirth.message}</p>
                                }
                            </div>
                            <br/>
                            <button type="submit"><img src={arrowRgt} alt="arrow-right-icon" style={{width: "25px"}} /></button>
                            <div>
                                <p className="google-page" onClick={handleSignIn}><a href="">or <span>Sign in</span><img src={googleIcon} alt="google-icon" style={{width: "25px"}} /></a></p>
                            </div>
                        </form>
                    )}

                    {/* address form here */}
                    {currentForm === 2 && (
                        <AddressForm />
                    )}
                    <div>
                        <p className="login-page">Already have an account? <a href="">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{margin: "25px 0 -20px", padding: "5px 0"}} />
        <p className="t-c">By clicking this button you confirm that you have read and agree to the <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a> of the company and confirm that you are of legal age.</p>
    </div>
  );
}

export default PersonalForm;
