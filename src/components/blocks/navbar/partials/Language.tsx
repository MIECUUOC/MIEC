// language list

import { useRouter } from 'next/router';
import { FC, useState } from 'react';
const supportLanguage = ['中文', 'en', 'fr'];

const Language: FC = () => {
  const { push, pathname, locale } = useRouter();
  const [language, setLanguage] = useState(locale === 'zh' ? '中文' : locale);
  const handleClick = (l: string) => {
    setLanguage(l);
    l = l == '中文' ? 'zh' : l;
    push(pathname, undefined, { locale: l });
  };

  return (
    <li className="nav-item dropdown language-select text-uppercase">
      <a
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        className="nav-link dropdown-item dropdown-toggle"
      >
        {language}
      </a>

      <ul className="dropdown-menu">
        {supportLanguage.map((lang) => (
          <li className="nav-item" key={lang}>
            <button className="dropdown-item" onClick={() => handleClick(lang)}>
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Language;
