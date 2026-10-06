import SocialLinks from "./SocialLinks";
import LocalTime from "./LocalTime";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
          <p className="text-sm text-muted">
            {`© ${new Date().getFullYear()} Siddarth Ambannavar`}
          </p>
          <LocalTime />
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
