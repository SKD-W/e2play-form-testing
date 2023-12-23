// import {useForm} from "react-hook-form";
// import * as yup from "yup";
// import {yupResolver} from "@hookform/resolvers/yup";
// import "./SignUpII.scss";

// function SignUpII() {
//     const AddressForm = () => {
//         const formik = useFormik({
//             initialValues: {
//                 address: "",
//                 city: "",
//                 state: "",
//             },
//             addValidationSchema: addValidationSchema, onSubmit: (values) => {
//                 console.log(values);
//             }
//         });
//     }

//     const addValidationSchema = yup.object().shape({
//         address: yup.string().required("Address is required"),
//         city: yup.string().required("state is required"),
//         state: yup.string().required("State is required"),
//     });

//     const {register, handleSubmit, formState:{errors}} = useForm({
//         resolver: yupResolver(validationSchema)
//     });

//   return (
//     <div className="address-form-details">
//         <div className="address-grid-form">
//             <div className="form-input-box">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <h1>Sign Up</h1>
//                     <div>
//                         <input type="text" id="address" name="address" placeholder="Address" {...register("address")} />
//                         {errors.firstName &&
//                             <p>{errors.address.message}</p>
//                         }
//                     </div>
//                     <br/>
//                     <div>
//                         <input type="text" id="city" name="city" placeholder="City" {...register("city")} />
//                         {errors.lastName &&
//                             <p>{errors.city.message}</p>
//                         }
//                     </div>
//                     <br/>
//                     <div>
//                         <input type="text" id="state" name="state" placeholder="State" {...register("state")} />
//                         {errors.sms &&
//                             <p>{errors.state.message}</p>
//                         }
//                     </div>
//                     <br/>
//                     <button type="submit"><img src={arrowRgt} alt="arrow-right-icon" style={{width: "25px"}} /></button>
//                     <p className="login-page">Already have an account? <a href="">Login</a></p>
//                 </form>
//             </div>
//             <p className="t-c">By clicking this button you confirm that you have read and agree to the <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a> of the company and confirm that you are of legal age.</p>
//         </div>
//     </div>
//   );
// }

// export default SignUpII;
