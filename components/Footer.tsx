import SocialLinks from "./SocialLinks";
import LocalTime from "./LocalTime";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex flex-col items-center gap-1.5 text-center sm:items-start sm:text-left">
          <p className="text-sm text-muted">{`© ${new Date().getFullYear()} Siddarth Ambannavar`}</p>
          <LocalTime />
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
