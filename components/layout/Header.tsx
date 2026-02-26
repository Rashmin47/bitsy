"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { MessageCircleIcon, TrophyIcon, UserIcon } from "lucide-react";

export default function Header() {
  const { isSignedIn } = useUser();
  const isPro = true;
  return (
    <header>
      <div className="layout-container">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl space-x-2">
            Bitsy
          </Link>
          {isSignedIn && (
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="font-bold text-xl">
                <Button variant={"ghost"} size={"sm"}>
                  Dashboard
                </Button>
              </Link>
              <Link href="/communities" className="font-bold text-xl">
                <Button variant={"ghost"} size={"sm"}>
                  <UserIcon className="size-4 text-primary" />
                  Communities
                </Button>
              </Link>
              <Link href="/chat" className="font-bold text-xl">
                <Button variant={"ghost"} size={"sm"}>
                  <MessageCircleIcon className="size-4 text-primary" />
                  Chat
                </Button>
              </Link>
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            isPro ? (
              <Badge className="flex items-center gap-2" variant={"outline"}>
                <TrophyIcon className="size-3 text-primary" /> Pro
              </Badge>
            ) : (
              "Free"
            )
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/sign-in">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}

          <UserButton
            appearance={{
              elements: {
                avatarBox: "size-9",
              },
            }}
          />
        </div>
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
