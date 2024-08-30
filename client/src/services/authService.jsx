import {
  userLogin,
  userRegister,
} from "../components/Redux/featurs/authAction";
import store from "../components/Redux/store";
export const handleLogin = async (e, email, password, role) => {
  e.preventDefault();

  if (!role || !email || !password) {
    return alert("Please provide all fields");
  }

  try {
    const resultAction = await store.dispatch(
      userLogin({ email, password, role })
    );

    if (userLogin.fulfilled.match(resultAction)) {
      // Handle successful login
      console.log("Login successful", resultAction.payload);
    } else {
      // Handle failed login
      console.error("Login failed", resultAction.error);
      alert("Login failed: " + resultAction.error.message);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const handleRegister = async ({
  e,
  email,
  password,
  role,
  name,
  hospitalName,
  organizationName,
  website,
  address,
  phone,
}) => {
  e.preventDefault();

  try {
    const resultAction = await store.dispatch(
      userRegister({
        email,
        password,
        role,
        name,
        hospitalName,
        organizationName,
        website,
        address,
        phone,
      })
    );

    if (userRegister.fulfilled.match(resultAction)) {
      // Handle successful registration
      console.log("Registration successful", resultAction.payload);
      
      // Optionally navigate to login page or show a success message
    } else {
      // Handle failed registration
      console.error("Registration failed", resultAction.payload);
      alert("Registration failed: " + resultAction.payload);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
