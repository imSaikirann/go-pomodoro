import { siteLinks } from "@/lib/site-links";

export default function CTA() {
  return (
    <section className="border-t border-neutral-200 px-4 py-20 text-center text-black sm:px-5 sm:py-24">
      <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
        Start your first
        <br />
        focus session now.
      </h2>
      <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-black">
        Open your terminal. One command is all it takes.
      </p>
      <div className="mx-auto mt-10 inline-flex max-w-full rounded-lg border border-neutral-300 bg-neutral-100 px-5 py-4 font-mono text-sm font-semibold text-black sm:px-7">
        npm i -g go-pomodoro
      </div>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={siteLinks.docs}
          className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-7 py-3 font-mono text-sm font-semibold text-black transition hover:border-black"
        >
          Read the docs
        </a>
        <a
          href="https://github.com/imSaikirann/go-pomodoro"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-7 py-3 font-mono text-sm font-semibold text-black transition hover:border-black"
        >
          View source &gt;
        </a>
      </div>
    </section>
  );
}
