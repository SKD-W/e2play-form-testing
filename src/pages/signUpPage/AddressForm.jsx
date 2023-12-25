import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import arrowRgt from "./assets/arrow-right.svg";
import "./PersonalForm.scss";
import "./AddressForm.scss";
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

    const onSubmit = async (formData) => {
        try {
            const response = await axios.post(/* post response */ "https://jsonplaceholder.typicode.com/posts", formData);
            console.log("Response Data:", response.data);

            setCurrentForm(currentForm => currentForm + 1);
        } catch (error) {
            console.error("Axios Error:", error);
        }
    };
    

  return (
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
