import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import useAuth from "../Hook/useAuth";
import SocialLogIn from "../Components/SocialLogIn";
import toast from "react-hot-toast";
import axios from "axios";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            const result = await signInUser(email, password);

            console.log(result.user);


            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
                email: result?.user?.email
            },
                {
                    withCredentials: true
                }
            )
            //console.log(result.user);
            console.log(data);
            navigate(from);
            toast.success('Signin Successful')
        }
        catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (

        <div className=" mx-[1%] md:mx[10%] lg:mx-[20%] rounded-xl border-2 mt-24">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h1 className="text-2xl text-center my-10 pt-6">Please Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto"
            >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email"
                        className="input input-bordered"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-600">Email is Required</span>}
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="input input-bordered"
                        {...register("password", { required: true })}
                    />

                    <span className="absolute top-12 right-1" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <IoEyeOffSharp></IoEyeOffSharp> : <FiEye></FiEye>
                        }
                    </span>

                    {errors.password && <span className="text-red-600">
                        Password is Required</span>}

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-black text-white font-bold text-xl">Login</button>
                </div>
            </form>
            <p className="text-center mt-4"
                data-aos="zoom-in"
                data-aos-duration="1000">Do not have an account?
                <Link className="text-blue-600 font-bold" to="/register"> Register</Link> </p>

            <div className="md:w-3/4 lg:w-1/2 mx-auto pb-6"
                data-aos="zoom-in"
                data-aos-duration="1000">
                <SocialLogIn ></SocialLogIn>
            </div>

        </div>

    );
};

export default Login;