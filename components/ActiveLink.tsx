import Link from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";

const style:CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
  
};

interface Props{
  text:string,
  href:string
}

export const ActiveLink: FC<Props> = (props) => {
  const { href, text } = props;
  const { asPath, pathname } = useRouter();
  return (
    <Link href={href} style={pathname === href ? style : undefined}>
      {text}
    </Link>
  );
};
