"use client";

import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';

import { userInfoRequest } from "features/user/userSlice";
import UserInfo from "@/components/UserInfo/UserInfo";

import styles from "./page.module.css";

const Profile = () => {

  const dispatch = useDispatch();
  const userToken = getCookie('cmAccessToken') as void;

  useEffect(() => {
    if (String(userToken)) {
      dispatch(userInfoRequest(userToken))
    }

  }, [userToken])

  return (
    <section>
      <UserInfo />
    </section>
  );
};

export default Profile;
