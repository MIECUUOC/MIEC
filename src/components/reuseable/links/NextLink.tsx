import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactElement, ReactNode } from 'react';

// ==============================================================
type NextLinkProps = {
  href: string;
  className?: string;
  title: string | ReactElement;
};
// ==============================================================

export const renderString = (s: any): ReactNode => {
  if (typeof s === 'string') {
    // Split the title string by newline characters and insert <br /> elements
    return s.split('\n').map((line, index, array) => (
      <span key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </span>
    ));
  } else {
    return s; // If title is a ReactElement, just return it
  }
};

const NextLink: FC<NextLinkProps> = (props) => {
  const { href, className, title } = props;
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  if (router.pathname !== '/')
    return (
      <Link href={`/${href}`} className={className}>
        {renderString(title)}
      </Link>
    );
  else if (href.toString().startsWith('#')) {
    return (
      <Link href={href} className={className} onClick={handleScroll}>
        {renderString(title)}
      </Link>
    );
  } else {
    return (
      <Link href={href} className={className}>
        {renderString(title)}
      </Link>
    );
  }
};

export default NextLink;
