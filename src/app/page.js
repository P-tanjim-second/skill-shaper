import Course from "@/components/Course";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import LearningTips from "@/components/LearningTips";
import Slider from "@/components/Slider";
import TreadingNewReleases from "@/components/TreadingNewReleases";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Slider></Slider>
      <Course></Course>
      <LearningTips></LearningTips>
      <Instructor></Instructor>
      <TreadingNewReleases></TreadingNewReleases>
    </>
  )
}
