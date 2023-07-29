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
import { SetProfile } from "../redux/slice/profileSlice";
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

  // LoginRequest
export async function LoginRequest(UserEmail, password) {
    try {
      store.dispatch(ShowLoader());
      let URL = `${BaseURL}/login`;
  
      let PostBody = { UserEmail, password };
  
      let res = await axios.post(URL, PostBody);
  
      if (res.data["status"] === "success") {
        setToken(res.data["token"]);
        setUserDetails(res.data["data"][0]);
        SuccessToast("Login Success");
        store.dispatch(HideLoader());
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        store.dispatch(HideLoader());
        return false;
      }
    } catch (e) {
      // console.log(e)
      store.dispatch(HideLoader());
      ErrorToast("Invalid Email or Password");
      return false;
    }
  }

  // GetProfileDetails
export async function GetProfileDetails() {
    try {
      store.dispatch(ShowLoader());
  
      let URL = `${BaseURL}/profileDetails`;
      let res = await axios.get(URL, axiosConfig);
  
      store.dispatch(HideLoader());
  
      if (res.status === 200) {
        store.dispatch(SetProfile(res.data["data"][0]));
      } else {
        ErrorToast("Something Went Wrong");
      }
    } catch (e) {
      store.dispatch(HideLoader());
      ErrorToast("Something Went Wrong");
      return false;
    }
  }