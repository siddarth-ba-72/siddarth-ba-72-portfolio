import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted text-center sm:text-left">
          {`© ${new Date().getFullYear()} Siddarth Ambannavar · Built with Next.js & Tailwind CSS`}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
