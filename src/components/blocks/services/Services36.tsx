import { FC } from 'react';
import Link from 'next/link';
// -------- data -------- //
import { services } from 'data/demo-33';
import Browser from 'icons/lineal/Browser';
import Pentool from 'icons/lineal/Pentool';
import SearchTwo from 'icons/lineal/SearchTwo';
import Smartphone from 'icons/lineal/Smartphone';
import VideoEditing from 'icons/lineal/VideoEditing';
import Puzzle from 'icons/solid-mono/Puzzle';
import color from 'utils/color';
import Image from 'next/image';
import { TFunction } from 'next-i18next';
import { renderString } from 'components/reuseable/links/NextLink';

type TeamsProps = {
  t: TFunction;
};

const Services36: FC<TeamsProps> = ({ t }) => {
  const services = [
    {
      id: 1,
      src: 'img/MIEC/teams/JL.png',
      color: color.aqua,
      name: t('teamMembers.0.name'),
      description: renderString(t('teamMembers.0.description'))
    },
    {
      id: 2,
      src: 'img/MIEC/teams/JB.png',
      color: color.fuchsia,
      name: t('teamMembers.1.name'),
      description: renderString(t('teamMembers.1.description'))
    },
    {
      id: 3,
      src: 'img/MIEC/teams/MT.png',
      color: color.yellow,
      name: t('teamMembers.2.name'),
      description: renderString(t('teamMembers.2.description'))
    },
    {
      id: 4,
      src: 'img/MIEC/teams/BZ.png',
      color: color.leaf,
      name: t('teamMembers.3.name'),
      description: renderString(t('teamMembers.3.description'))
    }
    // {
    //   id: 5,
    //   src: 'img/MIEC/teams/TL.png',
    //   color: color.orange,
    //   name: '刘丁元 Tony Liu',
    //   description: <p>Matrix College & Veritas College 招生负责人</p>
    // }
    // {
    //   id: 6,
    //   Icon: Browser,
    //   color: color.grape,
    //   title: 'Web Design',
    //   description: `Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.`
    // }
  ];

  return (
    <div className="row d-flex align-items-start gy-10 mb-10 mb-md-15" id="teams">
      <div className="col-lg-5 position-lg-sticky" style={{ top: '8rem' }}>
        <h3 className="display-2 mb-lg-15">
          {t('projectPlannersTitle')}
          <br />
          {t('projectPlannersSubtitle')}
        </h3>

        <p className="mb-5">{t('projectPlannersDescription')}</p>

        <Link href="/" className="btn btn-lg btn-primary btn-icon btn-icon-end">
          {t('moreDetails')} <i className="uil uil-arrow-up-right" />
        </Link>
      </div>

      <div className="col-lg-6 ms-auto">
        {services.map(({ color, id, name, description, src }) => (
          <div className={`card bg-soft-${color} mb-6`} key={id}>
            <div className="card-body d-flex flex-row">
              <div className="col-3 d-flex align-items-center">
                <img className={`me-5 img-fluid`} src={src} alt="" />
              </div>

              <div className="ms-5">
                <h3 className="fs-21 mb-2">{name}</h3>
                <div className="mb-0">{description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services36;
