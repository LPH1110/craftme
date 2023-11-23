import {
  About,
  Header,
  Intro,
  Projects,
  Services,
  Statistic,
  FeedBacks,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start overflow-x-hidden">
      <Header />
      <Intro />
      <Services />
      <Statistic />
      <About />
      <Projects />
      <FeedBacks />
      <Contact />
      <Footer />
    </main>
  );
}
