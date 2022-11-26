import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "BearerTQQR4UhS0gEaZqY00cv_Q-9n1JMigWlAcvsInYMNUE4z6CSE6E_5CJzuSpmdF_UbssIX4JcPCxUAAb9pyE_bpZUdxNxSbHfWLtNhxIGWJMtSSxNa26GbhcFr7DtpY3Yx",
  },
});
