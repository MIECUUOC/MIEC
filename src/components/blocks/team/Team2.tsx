import { FC } from 'react';
// -------- custom component -------- //
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import NextLink, {renderString} from 'components/reuseable/links/NextLink';
import { TeamCard2 } from 'components/reuseable/team-cards';
import { TFunction } from 'next-i18next';
import color from "../../../utils/color";

type TeamProps = {
  t: TFunction;
};

const Team2: FC<TeamProps> = ({ t }) => {
  const mainteams = [
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
  ];
  const consultantTeams = [
    {
      id: 1,
      name: '孙莱祥',
      image: '/img/MIEC/teams/slx.png'
    },
    {
      id: 2,
      name: '李维平',
      image: '/img/MIEC/teams/lwp.png'
    }
  ];
  const admissionsTeams = [
    {
      id: 1,
      name: '刘丁元 Tony Liu',
      image: '/img/MIEC/teams/tony.png',
      designation: '招生主管',
      description: 'Matrix College & Veritas College 招生负责人'
    },
    {
      id: 2,
      name: 'Sylvain Langlois',
      image: '/img/MIEC/teams/sl.png',
      designation: '执行理事',
      description: '加拿大魁北克法语考试中心主任,加拿大Inter-Edu教育中心主任'
    }
  ];
  const teachersTeams = [
    {
      id: 1,
      name: 'Eleni',
      image: '/img/MIEC/teams/Eleni.png'
    },
    {
      id: 2,
      name: 'Geoffrey',
      image: '/img/MIEC/teams/Geoffrey.png'
    }
  ];
  const lawersTeams = [
    {
      id: 1,
      name: 'Stanislav Belevici',
      image: '/img/MIEC/teams/stan.png'
    }
  ];

  return (
    <>
      <div className="row text-center mb-10 mb-lg-15 mt-n5">
        <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
          <h2 className="fs-30 text-uppercase text-muted mb-5">{t('teamTitle')}</h2>
          <h3 className="display-3 px-xl-10 mb-0">{t('teamSubtitle')}</h3>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
        <div className="col-lg-4">
          <h3 className="display-5 mb-5">{t('sections.0.title')}</h3>
          <p>{t('sections.0.description')}</p>
        </div>

        <div className="col-lg-8">
          <div className="swiper-container text-center mb-6">
            <Carousel
              grabCursor
              navigation={false}
              breakpoints={carouselBreakpoints}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {consultantTeams.map((team, index) => (
                <TeamCard2
                  key={team.id}
                  name={t(`consultantTeams.${index}.name`)}
                  image={team.image}
                  description={t(`consultantTeams.${index}.description`)}
                  designation={t(`consultantTeams.${index}.designation`)}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
        <div className="col-lg-4">
          <h3 className="display-5 mb-5">{t('sections.1.title')}</h3>
          <p>{t('sections.1.description')}</p>
        </div>

        <div className="col-lg-8">
          <div className="swiper-container text-center mb-6">
            <Carousel
              grabCursor
              navigation={false}
              breakpoints={carouselBreakpoints}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {admissionsTeams.map((team, index) => (
                <TeamCard2
                  key={team.id}
                  name={t(`admissionsTeams.${index}.name`)}
                  image={team.image}
                  description={t(`admissionsTeams.${index}.description`)}
                  designation={t(`admissionsTeams.${index}.designation`)}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
        <div className="col-lg-4">
          <h3 className="display-5 mb-5">{t('sections.2.title')}</h3>
          <p>{t('sections.2.description')}</p>
        </div>

        <div className="col-lg-8">
          <div className="swiper-container text-center mb-6">
            <Carousel
              grabCursor
              navigation={false}
              breakpoints={carouselBreakpoints}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {teachersTeams.map((team, index) => (
                <TeamCard2
                  key={team.id}
                  name={t(`teachersTeams.${index}.name`)}
                  image={team.image}
                  description={t(`teachersTeams.${index}.description`)}
                  designation={t(`teachersTeams.${index}.designation`)}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
        <div className="col-lg-4">
          <h3 className="display-5 mb-5">{t('sections.3.title')}</h3>
          <p>{t('sections.3.description')}</p>
        </div>

        <div className="col-lg-8">
          <div className="swiper-container text-center mb-6">
            <Carousel
              grabCursor
              navigation={false}
              breakpoints={carouselBreakpoints}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {lawersTeams.map((team, index) => (
                <TeamCard2
                  key={team.id}
                  name={t(`LawersTeams.${index}.name`)}
                  image={team.image}
                  description={t(`LawersTeams.${index}.description`)}
                  designation={t(`LawersTeams.${index}.designation`)}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team2;
