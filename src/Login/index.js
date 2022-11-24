import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = "gagan@admin.com";
  const adminPassword = "gagan123";

  const [email, setEmail] = useState("gagan@admin.com");
  const [password, setPassword] = useState("gagan123");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem("is_authenticated", true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: "success",
            title: "Successfully logged in!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Incorrect email or password.",
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="conatiner">
      <div className="row justify-content-center my-5">
        <div className="col-lg-4">
          <form
            onSubmit={handleLogin}
            className="bg-dark p-4 shadow bg-black rounded-4"
          >
            <h2 className="text-center text-light mb-3">Admin Login</h2>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label text-light">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="type gagan@admin.com"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-light">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="type gagan123"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" class="btn btn-light">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
