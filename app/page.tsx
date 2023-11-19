import { About, Header, Intro, Services, Statistic } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <Header />
      <Intro />
      <Services />
      <Statistic />
      <About />
    </main>
  );
}
