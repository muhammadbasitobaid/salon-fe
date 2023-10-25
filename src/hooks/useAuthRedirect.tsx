import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("logged_user");
    // Check if the user is already logged in
    if (loggedUser) {
      // If a user is logged in, navigate to the home page
      navigate("/");
    }
  }, [navigate]);
};

export default useAuthRedirect;
