import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import {
  getToken,
  setEmail,
  setOtp,
  setToken,
  setUserDetails,
} from "../helper/SessionHelper";
import { BaseURL } from "../helper/config";

import { HideLoader, ShowLoader } from "../redux/slice/settingsSlice";
import store from "../redux/store/store";
const axiosConfig = { headers: { token: getToken() } };

// Registration Request
export async function RegistrationRequest(
    UserEmail,
    firstName,
    lastName,
    mobile,
    password,
    photo
  ) {
    try {
      store.dispatch(ShowLoader());
      let URL = `${BaseURL}/registration`;
  
      let PostBody = {
        UserEmail,
        firstName,
        lastName,
        mobile,
        password,
        photo,
      };
  
      let res = await axios.post(URL, PostBody);
      store.dispatch(HideLoader());
  
      if (res.status === 201) {
        if (res.data["status"] === "fail") {
          ErrorToast("Email Already Exist");
        } else {
          SuccessToast("Registration Success");
          return true;
        }
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    } catch (e) {
      store.dispatch(HideLoader());
      ErrorToast("Something Went Wrong");
      return false;
    }
  }