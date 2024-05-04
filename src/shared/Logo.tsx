import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: string;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-24",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {img ? (
        <Image
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          alt="Logo"
          src={img}
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <Image
          className="hidden max-h-12 dark:block"
          alt="Logo-Light"
          src={imgLight}
        />
      )}
    </Link>
  );
};

export default Logo;
