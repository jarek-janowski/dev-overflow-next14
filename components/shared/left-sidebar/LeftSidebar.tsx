"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { SignedOut, SignedIn, useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const AddClerkSignedIn = ({
  add,
  children,
}: {
  add: boolean;
  children: React.ReactNode;
}) => {
  if (!add) return children;
  return <SignedIn>{children}</SignedIn>;
};

const LeftSidebar = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();

  console.log("pathname", pathname);
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r px-6 pb-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <AddClerkSignedIn key={item.route} add={item.route === "/profile"}>
              <Link
                href={item.route}
                className={`${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-dark300_light900"
                } flex items-center justify-start gap-4 bg-transparent p-4`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p
                  className={`${
                    isActive ? "base-bold" : "base-medium"
                  } max-lg:hidden`}
                >
                  {item.label}
                </p>
              </Link>
            </AddClerkSignedIn>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
              <Image
                src="assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="max-lg:hidden">Sign Up</span>
              <Image
                src="assets/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
            </Button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <Link
          href="/"
          className="flex items-center justify-start gap-4 bg-transparent p-4"
          onClick={() => signOut()}
        >
          <Image
            src="/assets/icons/logout.svg"
            alt="logout"
            width={20}
            height={20}
            className="invert-colors"
          />
          <p className="text-dark300_light900 max-lg:hidden">Logout</p>
        </Link>
      </SignedIn>
    </section>
  );
};

export default LeftSidebar;
