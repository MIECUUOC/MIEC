import Image from 'next/image';
import { FC, Fragment } from 'react';
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { portfolioList2 } from 'data/portfolio';
import { TFunction } from 'next-i18next';
import Link from 'next/link';

type ProjectProps = {
  t: TFunction;
};

const Portfolio3: FC<ProjectProps> = ({ t }) => {
  const projectList = [
    {
      id: 0,
      url: '/posts/pdf/1',
      category: t('projects.0.category'),
      title: t('projects.0.title'),
      image: { '1x': '/img/MIEC/project/PEQ.png', '2x': '/img/MIEC/project/PEQ@2x.png 2x' }
    },
    {
      id: 2,
      url: '#',
      category: t('projects.1.category'),
      title: t('projects.1.title'),
      image: { '1x': '/img/MIEC/project/TEFAQ.png', '2x': '/img/MIEC/project/TEFAQ@2x.png 2x' }
    },
    {
      id: 3,
      url: '#',
      category: t('projects.2.category'),
      title: t('projects.2.title'),
      image: { '1x': '/img/MIEC/project/Summer_camp.png', '2x': '/img/MIEC/project/Summer_camp@2x.png 2x' }
    },
    {
      id: 4,
      url: '#',
      category: t('projects.3.category'),
      title: t('projects.3.title'),
      image: { '1x': '/img/MIEC/project/uoc.png', '2x': '/img/MIEC/project/uoc@2x.png 2x' }
    }
  ];
  return (
    <div className="overflow-hidden" id="project">
      <div className="container pt-6 pt-lg-5 pb-5 pb-md-0">
        <div className="row">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
            <h2 className="fs-16 text-uppercase text-primary mb-3">{t('aceProjectsTitle')}</h2>
            <h3 className="display-3 mb-10">{t('aceProjectsSubtitle')}</h3>
          </div>
        </div>

        <div className="swiper-container grid-view nav-bottom nav-color mb-14">
          <Carousel
            grabCursor
            slidesPerView={2}
            pagination={false}
            className="overflow-visible"
            breakpoints={{ 768: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {projectList.map(({ id, url, image, category, title }) => (
              <Fragment key={id}>
                <figure className="rounded mb-7">
                  {url != '#' ? (
                    <a href={url}>
                      <img src={image['1x']} srcSet={image['2x']} alt="" />
                    </a>
                  ) : (
                    <img src={image['1x']} srcSet={image['2x']} alt="" />
                  )}
                </figure>

                <div className="project-details d-flex justify-content-center flex-column">
                  <div className="post-header">
                    <h2 className="post-title h3" id="project-title">
                      <NextLink title={title} className="link-dark" href={url} />
                    </h2>
                    <div className="post-category text-ash">{category}</div>
                  </div>
                </div>
              </Fragment>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Portfolio3;
