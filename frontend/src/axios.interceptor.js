import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default () => {
  axios.interceptors.response.use(
    (response) => {
      if (!cookies.get("access") && cookies.get("refresh")) {
        axios
          .post("/auth/login/refresh/", {
            refresh: cookies.get("refresh"),
          })
          .then(
            (res) =>
              cookies.set("access", res.data.access, {
                path: "/",
                maxAge: 86400,
              }) //Set access token on 1 day
          );
      }
      return response;
    },
    (err) => {
      const status = err.response?.status || 500;
      switch (status) {
        case 401: {
          window.location.replace("/login");
          return Promise.reject(err);
        }
      }
    }
  );

  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};
