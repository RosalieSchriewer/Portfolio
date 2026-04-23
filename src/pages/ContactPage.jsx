export default function ContactPage() {
  return (
    <div className="min-h-[60vh] bg-[#EDEDED] flex flex-col items-center justify-center gap-6 px-8 md:px-16 text-center">
      <h2 className="font-koulen uppercase tracking-widest text-[#1a1a1a] text-3xl">
        Get in touch
      </h2>
      <p className="font-sans text-base text-gray-600 max-w-md leading-relaxed">
        Available for freelance and full-time opportunities. Drop me a message
        and I'll get back to you within a day.
      </p>
      <a
        href="mailto:rosalie.schriewer@icloud.com"
        className="bg-[#F2B4C8] rounded-full px-9 py-3 font-koulen uppercase tracking-widest text-sm text-[#1a1a1a] no-underline hover:opacity-80 transition-opacity"
      >
        rosalie.schriewer@icloud.com
      </a>
    </div>
  );
}
