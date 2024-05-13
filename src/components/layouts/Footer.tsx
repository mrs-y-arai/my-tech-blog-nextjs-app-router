import { CREATED_YEAR } from "~/constants";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const copyRightYear = () => {
    if (year === CREATED_YEAR) return year;

    return `${CREATED_YEAR} - ${year}`;
  };

  return (
    <>
      <footer className="flex w-screen flex-col items-center bg-background px-6 py-5 text-center md:flex-row md:justify-between md:px-10">
        <div className="mb-2 flex items-center gap-2 md:mb-0">
          <Link className="text-xs text-white" href="/privacy-policy">
            プライバシーポリシー
          </Link>
          <Link className="text-xs text-white hover:underline" href="/term">
            利用規約
          </Link>
        </div>
        <small className="text-white">&copy; {copyRightYear()} Yuki Arai</small>
      </footer>
    </>
  );
}
