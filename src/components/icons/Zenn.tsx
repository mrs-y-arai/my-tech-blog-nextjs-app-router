import { SVGProps } from "react";

export default function Zenn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="27"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M.264 23.771h4.984a.8.8 0 0 0 .645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72a.63.63 0 0 0-.557.323L.03 23.361c-.088.176.029.41.234.41m17.181-.352l6.479-10.408a.477.477 0 0 0-.41-.733h-4.691a.52.52 0 0 0-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779a.65.65 0 0 0 .586-.353"
      ></path>
    </svg>
  );
}
