import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex gap-6 justify-center py-10 border-t">
      <Link href={"https://github.com/Vrogdish"}>
        <Image
          src={"/images/github.png"}
          alt=""
          width={40}
          height={40}
          className="h-9 w-9"
        />
      </Link>
      <Link href={"https://twitter.com/Vrogdish"}>
        <Image
          src={"/images/twitter.png"}
          alt=""
          width={40}
          height={40}
          className="h-9 w-9"
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/cedric-gache-12628a266/"}>
        <Image
          src={"/images/linkedin.png"}
          alt=""
          width={40}
          height={40}
          className="h-9 w-9"
        />
      </Link>
    </footer>
  );
}
