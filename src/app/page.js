import Course from "@/components/Course";
import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import Slider from "@/components/Slider";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Slider></Slider>
      <Course></Course>
      <LearningTips></LearningTips>
    </>
  )
}
