import "./globals.css";
import {
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";


export default function Home() {
  return (
    <div className="container relative">
      
      <div className="card hero relative z-10">
        <p className="text-display-1 hero-title">
          Empower Your Support Team <br /> with AI-Driven Excellence
        </p>
        <p className="text-body-1 hero-tagline">
          Seamless Support, Satisfied Customers, Smarter Solutions
        </p>

        <RegisterLink
          className="btn btn-white btn-white-hover-effect btn-big"
        >
          Chat now
        </RegisterLink>
      </div>
    </div>
  );
}
