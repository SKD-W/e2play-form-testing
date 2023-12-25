import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import arrowRgt from "./assets/arrow-right.svg";
import "./PersonalForm.scss";
// 


// get formData for profile details <form/>
const profileValidationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Please Confirm Password"),
});
    

function ProfileForm() {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(profileValidationSchema),
    });

    const onSubmit = async (formData) => {
        try {
            const response = await axios.post(/* post response */ "https://jsonplaceholder.typicode.com/posts", formData);
            console.log("Response Data:", response.data);
        } catch (error) {
            console.error("Axios Error:", error);
        }
    };

  return (
    <div className="profile-form-details">
      <div className="form-input-box">
            <form action="submitForm" onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign Up</h1>
                <div>
                    <input type="text" id="username" name="username" placeholder="Create Username" {...register("username")} />
                    {errors.username &&
                        <p>{errors.username.message}</p>
                    }
                </div>
                <br/>
                <div>
                    <input type="text" id="pWrd" name="pWrd" placeholder="Create Password" {...register("password")} />
                    {errors.password &&
                        <p>{errors.password.message}</p>
                    }
                </div>
                <br/>
                <div>
                    <input type="text" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" {...register("confirmPassword")} />
                    {errors.confirmPassword &&
                        <p>{errors.confirmPassword.message}</p>
                    }
                </div>
                <br/>
                <button type="submit"><img src={arrowRgt} alt="arrow-right-icon" style={{width: "25px"}} /></button>
            </form>
        </div>
    </div>
  );
}

export default ProfileForm;
