import React from "react";
import "./signin.style.scss";
import { Button, Input } from "../../components/atoms";
import { Google } from "grommet-icons";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useNavigation from "../../hooks/useNavigate/useNavigate";
import { useInput } from "../../hooks";

const SignInPage = () => {
  const navigateTo = useNavigation();
  const { inputValues, onChange, reset } = useInput({
    email: "",
    password: "",
  });

  // handle submit for signInWithEmail button
  const handleLoginWithEmail = (event) => {
    const { email, password } = inputValues;
    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email address.");
    }
    // success action
    console.log(inputValues);
    toast.success("Logged in successfully.");
    navigateTo("/home");
    reset();
  };

  return (
    <div className="signin-main-container">
      <div className="text-container">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/000000/wallet--v1.png"
          alt="wallet--v1"
        />
        <h1 className="heading">Hey,Hello 👋🏻</h1>
        <p className="sub-heading">
          Please input your credentials to access the wallet.
        </p>
        <div className="">
          <Input
            type="email"
            placeholder={"Email"}
            name="email"
            onChangeAction={onChange}
            inputValue={inputValues.email}
          />
          <Input
            type="password"
            placeholder={"Password"}
            name="password"
            onChangeAction={onChange}
            inputValue={inputValues.password}
          />

          <Button
            title={"Login"}
            className="primary"
            onClickAction={handleLoginWithEmail}
          />

          <Button
            icon={<Google color="plain" size="18px"></Google>}
            title={"Sign Up with Google "}
            className="secondary"
            onClickAction={() => {}}
          />
          <p className="sub-heading">
            You dont have an account yet? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
