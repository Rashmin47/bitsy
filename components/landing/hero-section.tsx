import { RocketIcon, SparkleIcon, ZapIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { HeroGradient } from "./background-gradient";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <HeroGradient />
      <div className="relative section-container section-padding">
        <div className="text-center">
          <Badge>
            Powered by AI <SparkleIcon className="size-4 inline-block ml-2" />
          </Badge>
          <h1>
            Find Your Perfect
            <span className="block gradient-text">AI Learning Partner</span>
          </h1>
          <p className="hero-subheading">
            Join communities, set your learning goals, and get matched with
            partners who share your passion. Chat, collaborate, and grow
            together with AI-powered insights.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="link-button hero-button-outline group"
              >
                <span className="hero-button-content">
                  <RocketIcon className="hero-button-icon-outline group-hover:rotate-12 group-hover:text-primary" />
                  Get Started for Free
                </span>
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button
                size="lg"
                className="link-button hero-button-primary group"
              >
                <span className="hero-button-content">
                  <ZapIcon className="hero-button-icon-primary group-hover:scale-125 group-hover:rotate-12" />
                  Buy a Plan
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
