"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API = void 0;
var BASE_URL = "http://localhost:8000/api/genius";
var API = {
  LOGIN: "".concat(BASE_URL, "/login"),
  GET_GOVT_JOB: function GET_GOVT_JOB(id) {
    return "".concat(BASE_URL, "/govt-jobs/").concat(id);
  },
  CREATE_GOVT_JOB: "".concat(BASE_URL, "/govt-jobs/create"),
  UPDATE_GOVT_JOB: function UPDATE_GOVT_JOB(id) {
    return "".concat(BASE_URL, "/govt-jobs/").concat(id);
  },
  DELETE_GOVT_JOB: function DELETE_GOVT_JOB(id) {
    return "".concat(BASE_URL, "/govt-jobs/").concat(id);
  },
  GET_ALL_GOVT_JOBS: "".concat(BASE_URL, "/govt-jobs"),
  GET_PRIVATE_JOB: function GET_PRIVATE_JOB(id) {
    return "".concat(BASE_URL, "/pri-jobs/pri/").concat(id);
  },
  CREATE_PRIVATE_JOB: "".concat(BASE_URL, "/pri-jobs/pri/create"),
  UPDATE_PRIVATE_JOB: function UPDATE_PRIVATE_JOB(id) {
    return "".concat(BASE_URL, "/pri-jobs/pri/").concat(id);
  },
  DELETE_PRIVATE_JOB: function DELETE_PRIVATE_JOB(id) {
    return "".concat(BASE_URL, "/pri-jobs/pri/").concat(id);
  },
  GET_ALL_PRIVATE_JOBS: "".concat(BASE_URL, "/pri-jobs"),
  GET_WALK_IN: "".concat(BASE_URL, "/walk-in"),
  CREATE_WALK_IN: "".concat(BASE_URL, "/walk-in"),
  UPDATE_WALK_IN: function UPDATE_WALK_IN(id) {
    return "".concat(BASE_URL, "/walk-in/").concat(id);
  },
  DELETE_WALK_IN: "".concat(BASE_URL, "/walk-in"),
  GET_ALL_WALK_INS: "".concat(BASE_URL, "/walk-in")
}; // const BASE_URL = "http://localhost:8000/api/auth";
// // exports.BASE_URL = "https://sarkari-genius.onrender.com";
// // exports.BASE_URL = "http://127.0.0.1:7000"
// // import { BASE_URL } from "./ApiURL";
// // const BASE_URL = "http://localhost:7000";
// // const BASE_URL = "https://sarkari-genius.onrender.com";
// // ✅ Cards APIs
// const APIGovtCards = {
//   getCardDetails: (id) => `${BASE_URL}/cards/${id}`,
//   createCard: `${BASE_URL}/cards/create`,
//   updateCard: (id) => `${BASE_URL}/cards/${id}`,
//   deleteCard: (id) => `${BASE_URL}/cards/${id}`,
//   getAllCards: `${BASE_URL}/cards`,
// };
// // ✅ Auth APIs
//  const APILoginRegister = {
//   login: `${BASE_URL}/user/login`,
//   register: `${BASE_URL}/user/register`,
// };
// // ✅ Private Jobs APIs
//  const APIPrivateJobs = {
//   getPrivateJobDetails: (id) => `${BASE_URL}/jobs/pri/${id}`,
//   createPrivateJob: `${BASE_URL}/jobs/pri/create`,
//   updatePrivateJob: (id) => `${BASE_URL}/jobs/pri/${id}`,
//   deletePrivateJob: (id) => `${BASE_URL}/jobs/pri/${id}`,
//   getAllPrivateJobs: `${BASE_URL}/jobs/pri`,
// };
// module.exports = {APIPrivateJobs,APILoginRegister,APIGovtCards ,APIGovtJobs ,BASE_URL};

exports.API = API;