import Axios from "axios";
Axios.defaults.baseURL = "https://art-of-ai-auction.jedlik.cloud";

export default {
  getAllKategoria() {
    return Axios.get("/api/categories")
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  // getAllValami() {
  //   return Axios.get("/valamik")
  //     .then((resp) => {
  //       //console.log(resp.data);
  //       return resp.data;
  //     })
  //     .catch((err) => {
  //       //console.log(err);
  //       return Promise.reject(err);
  //     });
  // },
  getPaintsByCategoryId(categoryId) {
    return Axios.get(`/api/paintings/${categoryId}`)
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  // saveUser(újobjektum) {
  //   return Axios.post("/valamik", újobjektum).then(() => {});
  // },
  // updateUser(módosítottObjektum, id) {
  //   return Axios.put(`/valamik/${id}`, módosítottObjektum).then(() => {});
  // },
};
