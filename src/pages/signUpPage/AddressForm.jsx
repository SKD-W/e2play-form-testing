import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import googleIcon from "./assets/Google.png";
import arrowRgt from "./assets/arrow-right.svg";
// import PersonalForm from "./PersonalForm";
import "./PersonalForm.scss";
import { useState } from "react";
import ProfileForm from "./ProfileForm";
// 


// get formData for address details <form/>
const addressValidationSchema = yup.object().shape({
    address: yup.string().nullable(),
    city: yup.string().nullable(),
    state: yup.string().nullable(),
});
    

function AddressForm() {
    const [currentForm, setCurrentForm] = useState(2);

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(addressValidationSchema)
    });

    const handleSignIn = async () => {
        const emailOptions = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
    
        const selectedEmail = await prompt('Choose your email:', emailOptions.join('\n'));
    
        if (selectedEmail && emailOptions.includes(selectedEmail)) {
          // Simulate signing in with the selected email
          console.log(`Signed in with email: ${selectedEmail}`);
        } else {
          console.log('Sign-in canceled or invalid email selected.');
        }
    };

    const onSubmit = async (formData) => {
        try {
            const response = await axios.post(/* post response */ "https://jsonplaceholder.typicode.com/posts", formData);
            console.log("Response Data:", response.data);

            setCurrentForm(currentForm => currentForm + 1);
        } catch (error) {
            console.error("Axios Error:", error);
        }
    };
    

  return ( // there's a bug that doesn't allow the enter button to be trigger when the user don't input any details in this form
    <div className="address-form-details">
      <div className="form-input-box">
            {currentForm === 2 && (
                <form action="submitForm" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Sign Up</h1>
                    <div>
                        <input type="text" id="address" name="address" placeholder="Address (optional)" {...register("address")} />
                    </div>
                    <br/>
                    <div>
                        <input type="text" id="city" name="city" placeholder="City (optional)" {...register("city")} />
                    </div>
                    <br/>
                    <div>
                        <input type="text" id="state" name="state" placeholder="State (optional)" {...register("state")} />
                    </div>
                    <br/>
                    <button type="submit"><img src={arrowRgt} alt="arrow-right-icon" style={{width: "25px"}} /></button>
                    <p className="google-page" onClick={handleSignIn}><a href="">or <span>Sign in</span><img src={googleIcon} alt="google-icon" style={{width: "25px"}} /></a></p>
                </form>
            )}

            {/* profile form here */}
            {currentForm === 3 && (
                <ProfileForm />
            )}

        </div>
    </div>
  );
}

export default AddressForm;
