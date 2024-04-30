import { CREATED_YEAR } from "~/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  const copyRightYear = () => {
    if (year === CREATED_YEAR) return year;

    return `${CREATED_YEAR} - ${year}`;
  };

  return (
    <>
      <footer className="bg-background w-screen px-5 py-3 text-center">
        <small className="text-white">&copy; {copyRightYear()} Yuki Arai</small>
      </footer>
    </>
  );
}
