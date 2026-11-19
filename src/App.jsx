import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Background } from "./components/Effects";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Welcome from "./components/Welcome";
import { Details, Programme, Timeline } from "./components/Info";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import { Wishes, Rsvp, Footer } from "./components/Extras";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Home = () => (
  <>
    <Hero />
    <Countdown />
    <Welcome />
    <Rsvp />
  </>
);

const EventPage = () => (
  <>
    <Details />
    <div className="grid lg:grid-cols-2 lg:gap-6">
      <Programme />
      <Timeline />
    </div>
  </>
);

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-[100dvh] w-full overflow-x-clip">
        <Background />
        <TopNav />
        <main className="mx-auto w-full max-w-6xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/wishes" element={<Wishes />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
