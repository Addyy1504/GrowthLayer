const BOOKING_URL =
  "https://calendly.com/growthlayerstudio/30min?embed_domain=growthlayerstudio.in&embed_type=Inline";

export default function BookCall() {
  return (
    <main className="min-h-screen bg-[#3EF4E4] text-black relative overflow-hidden pt-24 sm:pt-28">
      {/* background glow */}
      <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-white blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-black/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-14">
        {/* ✅ Heading now visible */}
        <h1 className="text-3xl md:text-4xl font-black">Book a Call</h1>

        <p className="mt-2 text-black/80 max-w-2xl">
          Pick a slot that works for you. You’ll instantly get a confirmation + calendar invite.
        </p>

        {/* Calendly embed */}
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-4xl rounded-3xl overflow-hidden border border-black/10 bg-white shadow-2xl">
            <iframe
              title="Book a call"
              src={BOOKING_URL}
              className="w-full h-[78vh] md:h-[76vh]"
              frameBorder="0"
              allow="clipboard-write; fullscreen"
            />
          </div>
        </div>

        <div className="mt-6 text-sm text-black/70 text-center">
          If this doesn’t load,{" "}
          <a
            href="https://calendly.com/growthlayerstudio/30min"
            target="_blank"
            rel="noreferrer"
            className="text-black underline underline-offset-4 font-semibold"
          >
            open booking in a new tab
          </a>
          .
        </div>
      </div>
    </main>
  );
}
