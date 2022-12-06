import { HeadComponent, Hero } from "../components/";

export default function Home() {
  return (
    <>
      <HeadComponent
        title="Talha Ejaz | A resident of internet"
        description="My corner of internet to rant. I own this place to share my thoughts that might be too hot for social media or thoughts I want to be out there, not caring about their reach."
      />

      <Hero />
    </>
  );
}
