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

export const handleRegister = async (e, email, password, role, name, hospitalName, organizationName, website, address, phone) => {
  e.preventDefault();

  // Prepare data object conditionally
  const registrationData = {
    email,
    password,
    role,
    website,
    address,
    phone,
  };

  if (role === "admin" || role === "donar") {
    registrationData.name = name;
  }

  if (role === "hospital") {
    registrationData.hospitalName = hospitalName;
  } else if (role === "organization") {
    registrationData.organizationName = organizationName;
  }

  try {
    const resultAction = await store.dispatch(userRegister(registrationData));

    if (userRegister.fulfilled.match(resultAction)) {
      console.log("Registration successful", resultAction.payload);
      
    } else {
      console.error("Registration failed", resultAction.payload);
      alert("Registration failed: " + resultAction.payload);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};