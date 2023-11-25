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
    <main className="flex flex-col items-center justify-start">
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
