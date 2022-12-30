import { useRouter } from "next/router";
import Link from "next/link";

const linkStyle: React.CSSProperties = {
  color: "blue",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: React.FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <>
      <Link legacyBehavior href={href}>
        <a style={asPath === href ? linkStyle : {}}>{text}</a>
      </Link>
    </>
  );
};
