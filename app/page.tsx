import {
  About,
  Header,
  Intro,
  Projects,
  Services,
  Statistic,
  FeedBacks,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start relative z-[900] mb-[38rem] md:mb-[26rem]">
      <Header />
      <Intro />
      <Services />
      <Statistic />
      <About />
      <Projects />
      <FeedBacks />
      <div className="fixed bottom-0 w-full -z-[1]">
        <Footer />
      </div>
    </main>
  );
}
