import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// importing the module css for the logout styles "styles"
import styles from "../pages/styles/Settings.module.css";

// importing the react icon logout symb
import { FiLogOut } from "react-icons/fi";

 function Logout() {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {

    // for confirming logout!
    let res=confirm("Do you want to logout !")

    if(res){
    logout();        // this fn is for the removing the tokens by using the AUTH
    navigate("/login");
    }

  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Logout  <FiLogOut style={{marginBottom:-4,marginLeft:2}} />
        </h1>
        <p className={styles.subtitle}>
          You can logout from your account here
        </p>

        {/* for handling the logout function */}
        <button
          className={styles.logoutBtn}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;