import { FC } from 'react';
import Image from 'next/image';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import { TFunction } from 'next-i18next';

type FooterProps = {
  t: TFunction;
};

const Footer9: FC<FooterProps> = ({ t }) => {
  const footerNav = [
    { title: t('nav.0.title'), url: t('nav.0.url') },
    { title: t('nav.1.title'), url: t('nav.1.url') },
    { title: t('nav.2.title'), url: t('nav.2.url') },
    { title: t('nav.3.title'), url: t('nav.3.url') },
    { title: t('nav.4.title'), url: t('nav.4.url') }
  ];

  const helps = [
    { id: 1, title: t('helps.0.title'), url: t('helps.0.url') },
    { id: 1, title: t('helps.1.title'), url: t('helps.1.url') },
    { id: 1, title: t('helps.2.title'), url: t('helps.2.url') }
  ];
  return (
    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <img className="mb-4" src="/img/logo-light.png" srcSet="/img/logo-light@2x.png 2x" alt="" />

              <p className="mb-4">
                {t('copyright1')} <br className="d-none d-lg-block" />
                {t('copyright2')}
              </p>

              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-2 offset-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">{t('needHelp')}</h4>
              <ul className="list-unstyled  mb-0">
                {helps.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">{t('moreInfo')}</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">{t('contact')}</h4>
              <address>{t('address')}</address>
              <NextLink title="Info@miec-uuoc.ca" href="mailto:Info@miec-uuoc.ca" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer9;
