import { FC } from 'react';
import useReplaceMe from 'hooks/useReplaceMe';
import { TFunction } from 'next-i18next';
import { renderString } from 'components/reuseable/links/NextLink';

type HeroProps = {
  t: TFunction;
};

const Hero20: FC<HeroProps> = ({ t }) => {
  // enable the text rotator animation
  useReplaceMe();

  return (
    <section className="video-wrapper bg-overlay bg-overlay-gradient px-0 mt-0 min-vh-80">
      <video
        loop
        muted
        autoPlay
        playsInline
        // __idm_id__="1187841"
        id="1187841"
        src="/media/Montreal.MOV"
        poster="/img/photos/Montreal.jpg"
      />

      <div className="video-content">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 col-xl-8 text-center text-white mx-auto ">
              <h1 className="display-1 fs-60 text-white mb-13">
                <span className="rotator-zoom">{t('videoCaption')}</span>
              </h1>

              <p className="lead fs-26 mb-0 mx-xxl-8">{renderString(t('description'))}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero20;
