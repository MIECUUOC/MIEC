import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import { Footer9 } from 'components/blocks/footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation} from 'next-i18next';
import Carousel from "../../src/components/reuseable/Carousel";
import carouselBreakpoints from "../../src/utils/carouselBreakpoints";
import {TeamCard2} from "../../src/components/reuseable/team-cards";
import color from "../../src/utils/color";
import {renderString} from "../../src/components/reuseable/links/NextLink";

const Teams: NextPage = () => {
    const { t: navt } = useTranslation('nav');
    const { t: teamst } = useTranslation('teams');
    const { t: footert } = useTranslation('footer');

    // console.log(renderString(teamst('teamMembers')))

    const mainteams = [
        {
            id: 1,
            image: '/img/MIEC/teams/JL.png',
            color: color.aqua,
            name: teamst('teamMembers.0.name'),
            description: renderString(teamst('teamMembers.0.description'))
        },
        {
            id: 2,
            image: '/img/MIEC/teams/JB.png',
            color: color.fuchsia,
            name: teamst('teamMembers.1.name'),
            description: renderString(teamst('teamMembers.1.description'))
        },
        {
            id: 3,
            image: '/img/MIEC/teams/MT.png',
            color: color.yellow,
            name: teamst('teamMembers.2.name'),
            description: renderString(teamst('teamMembers.2.description'))
        },
        {
            id: 4,
            image: '/img/MIEC/teams/BZ2.png',
            color: color.leaf,
            name: teamst('teamMembers.3.name'),
            description: renderString(teamst('teamMembers.3.description'))
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

    const chinaTeams = [
        {
            id: 1,
            name: "徐靖博",
            image: "/img/MIEC/teams/xjbjpg.jpg"
        }
    ]

    useLightBox();
    return (
        <div className="page-frame bg-pale-primary">
            <PageProgress />
            {/* ========== header section ========== */}
            <header className="wrapper">
                <Navbar language t={navt} />
            </header>

            <main className="content-wrapper">
                <RoundContainer>
                    <div className="row text-center mb-10 mb-lg-15 mt-n5">
                        <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
                            <h2 className="fs-30 text-uppercase text-muted mb-5">{teamst('projectPlannersTitle')}</h2>
                            <h3 className="display-3 px-xl-10 mb-5">{teamst('projectPlannersSubtitle')}</h3>
                            <h4 className=" px-xl-10 mb-0">{teamst('projectPlannersDescription')}</h4>
                        </div>
                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">

                        <div className="">
                            <div className="swiper-container text-center mb-6">
                                <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 mb-16 mb-md-19">
                                    {mainteams.map((item, index) => (
                                        <div className="col-md-6 col-lg-3" key={item.id}>
                                            <div className="position-relative">
                                                <div
                                                    className="shape rounded bg-soft-primary rellax d-md-block"
                                                    style={{
                                                        zIndex: 0,
                                                        width: '98%',
                                                        height: '98%',
                                                        right: '-0.75rem',
                                                        bottom: '-0.75rem'
                                                    }}
                                                />

                                                <div className="card shadow-lg">
                                                    <figure className="card-img-top">
                                                        <img className="img-fluid" src={item.image}
                                                             srcSet={item.image} alt=""/>
                                                    </figure>

                                                    <div style={{minHeight: '240px'}} className="card-body px-3 py-2">
                                                        <h4 className="mb-2">{renderString(teamst(`teamMembers.${index}.name`))}</h4>
                                                        <p className="mb-0" style={{
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 4,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden'
                                                        }}>
                                                            {renderString(teamst(`teamMembers.${index}.description`))}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center mb-10 mb-lg-15 mt-n5">
                        <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
                            <h2 className="fs-30 text-uppercase text-muted mb-5">{teamst('teamTitle')}</h2>
                            <h3 className="display-3 px-xl-10 mb-0">{teamst('teamSubtitle')}</h3>
                        </div>
                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
                        <div className="col-lg-4">
                            <h3 className="display-5 mb-5">{teamst('sections.0.title')}</h3>
                            <p>{teamst('sections.0.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                <Carousel
                                    grabCursor
                                    navigation={false}
                                    breakpoints={carouselBreakpoints}
                                    autoplay={{delay: 2500, disableOnInteraction: false}}
                                >
                                    {consultantTeams.map((team, index) => (
                                        <TeamCard2
                                            key={team.id}
                                            name={teamst(`consultantTeams.${index}.name`)}
                                            image={team.image}
                                            description={teamst(`consultantTeams.${index}.description`)}
                                            designation={teamst(`consultantTeams.${index}.designation`)}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
                        <div className="col-lg-4">
                            <h3 className="display-5 mb-5">{teamst('sections.1.title')}</h3>
                            <p>{teamst('sections.1.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                <Carousel
                                    grabCursor
                                    navigation={false}
                                    breakpoints={carouselBreakpoints}
                                    autoplay={{delay: 2500, disableOnInteraction: false}}
                                >
                                    {admissionsTeams.map((team, index) => (
                                        <TeamCard2
                                            key={team.id}
                                            name={teamst(`admissionsTeams.${index}.name`)}
                                            image={team.image}
                                            description={teamst(`admissionsTeams.${index}.description`)}
                                            designation={teamst(`admissionsTeams.${index}.designation`)}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
                        <div className="col-lg-4">
                            <h3 className="display-5 mb-5">{teamst('sections.2.title')}</h3>
                            <p>{teamst('sections.2.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                <Carousel
                                    grabCursor
                                    navigation={false}
                                    breakpoints={carouselBreakpoints}
                                    autoplay={{delay: 2500, disableOnInteraction: false}}
                                >
                                    {teachersTeams.map((team, index) => (
                                        <TeamCard2
                                            key={team.id}
                                            name={teamst(`teachersTeams.${index}.name`)}
                                            image={team.image}
                                            description={teamst(`teachersTeams.${index}.description`)}
                                            designation={teamst(`teachersTeams.${index}.designation`)}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
                        <div className="col-lg-4">
                            <h3 className="display-5 mb-5">{teamst('sections.3.title')}</h3>
                            <p>{teamst('sections.3.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                <Carousel
                                    grabCursor
                                    navigation={false}
                                    breakpoints={carouselBreakpoints}
                                    autoplay={{delay: 2500, disableOnInteraction: false}}
                                >
                                    {lawersTeams.map((team, index) => (
                                        <TeamCard2
                                            key={team.id}
                                            name={teamst(`LawersTeams.${index}.name`)}
                                            image={team.image}
                                            description={teamst(`LawersTeams.${index}.description`)}
                                            designation={teamst(`LawersTeams.${index}.designation`)}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>


                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
                        <div className="col-lg-4">
                            <h3 className="display-5 mb-5">{teamst('sections.4.title')}</h3>
                            <p>{teamst('sections.4.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                <Carousel
                                    grabCursor
                                    navigation={false}
                                    breakpoints={carouselBreakpoints}
                                    autoplay={{delay: 2500, disableOnInteraction: false}}
                                >
                                    {chinaTeams.map((team, index) => (
                                        <TeamCard2
                                            key={team.id}
                                            name={teamst(`ChinaTeams.${index}.name`)}
                                            image={team.image}
                                            description={teamst(`ChinaTeams.${index}.description`)}
                                            designation={teamst(`ChinaTeams.${index}.designation`)}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </RoundContainer>
            </main>
            <Footer9 t={footert}/>
        </div>
    );
};

export async function getStaticProps({locale}: { locale: string }) {
    console.log(`Current locale: ${locale}`);
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'teams', 'majors', 'nav', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default Teams;
