import { welcomeMessage, aboutText, graduate } from "../data";

export default function Welcome() {
  return (
    <section
      id="about"
      className="grid gap-4 px-4 py-6 sm:px-8 md:grid-cols-2 lg:px-10"
    >
      <div className="glass rounded-3xl p-6 sm:p-8">
        <h2 className="section-title">Welcome 💜</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-white/85 sm:text-base">{welcomeMessage}</p>
      </div>
      <div className="glass rounded-3xl p-6 sm:p-8">
        <h2 className="section-title">About {graduate.firstName}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-white/85 sm:text-base">{aboutText}</p>
      </div>
    </section>
  );
}
