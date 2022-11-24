import React from "react";
import Swal from "sweetalert2";
const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Logging Out",
      text: "Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem("is_authenticated", false);
            setIsAuthenticated(false);
          },
        });
      }
    });
  };

  return (
    <button type="button" className="btn btn-primary" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
