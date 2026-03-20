import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StoryPreview from "@/components/home/StoryPreview";
import LuvDropsPreview from "@/components/home/LuvDropsPreview";
import HelpCards from "@/components/home/HelpCards";
import WhoThisIsFor from "@/components/home/WhoThisIsFor";
import MediaPreview from "@/components/home/MediaPreview";
import BookNelCTA from "@/components/home/BookNelCTA";
import StayConnected from "@/components/shared/StayConnected";
import InlineCTA from "@/components/shared/InlineCTA";
import { createPageUrl } from "@/utils";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StoryPreview />
      <LuvDropsPreview />
      <HelpCards />
      {/* Mid-page CTA: Start With Clarity */}
      <InlineCTA
        variant="accent"
        eyebrow="Start Here"
        title="Start With Clarity"
        description="A single conversation can change the direction you're heading. Nel is happy to connect and talk through where you are and what might help."
        primaryLabel="Book a Conversation"
        primaryTo={createPageUrl("BookNel")}
        secondaryLabel="Hear Nel's Story"
        secondaryTo={createPageUrl("TheJourney")}
      />
      <WhoThisIsFor />
      <MediaPreview />
      <StayConnected source="home-page" />
      <BookNelCTA />
    </div>
  );
}