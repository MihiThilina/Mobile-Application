import axios from "../axios";

class User {

  postUser = async (data) => {
    console.log("awaaaaaaaaaaaaaaaaa"+data.Address);
    const promise = new Promise((resolve, reject) => {
      axios.post("http://localhost:4000/users", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return resolve(err);
        });
    });
    return await promise;
  };



}

export default new User();
