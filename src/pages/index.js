import { lazy } from "react";

export const Home = lazy(() => import("./Home.jsx"));
export const Contact = lazy(() => import("./Contact.jsx"));
export const About = lazy(() => import("./About.jsx"));
export const Login = lazy(() => import("./Login/Login.jsx"));
export const Logout = lazy(() => import("./Login/Logout.jsx"));
export const User = lazy(() => import("./User/User.jsx"));
export const Report = lazy(() => import("./Report"));
export const TableData = lazy(() => import("./TableData"));
export const Timeline = lazy(() => import("./Timeline/Timeline.jsx"));
export const Unauthorized = lazy(() => import("./Unauthorized.jsx"));
export const Signup = lazy(() => import("./Login/Signup.jsx"));
export const LoginLine = lazy(() => import("./Login/LoginLine.jsx"));
export const LoginFacebook = lazy(() => import("./Login/LoginFacebook.jsx"));
export const LoginGoogle = lazy(() => import("./Login/LoginGoogle.jsx"));
