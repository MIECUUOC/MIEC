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
// import styles from './teams.module.scss';

const Teams: NextPage = () => {
    const { t: navt } = useTranslation('nav');
    const { t: teamst } = useTranslation('teams');
    const { t: footert } = useTranslation('footer');

    // console.log(renderString(teamst('teamMembers')))

    const mainteams = [
        {
            id: 1,
            image: '/img/MIEC/teams/JL1.png',
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
            image: '/img/MIEC/teams/ZBQ.png',
            color: color.leaf,
            name: teamst('teamMembers.3.name'),
            description: renderString(teamst('teamMembers.3.description'))
        }
    ];
    const consultantTeams = [
        {
            id: 3,
            name: 'Eleni',
            image: '/img/MIEC/teams/Eleni.png'
        },
        {
            id:4,
            name: 'Geoffrey',
            image: '/img/MIEC/teams/Geoffrey.png'
        },
        {
            id: 1,
            name: '孙莱祥',
            image: '/img/MIEC/teams/slx.png'
        },
        {
            id: 2,
            name: '李维平',
            image: '/img/MIEC/teams/lwp.png'
        },
    ];
    const sellerTeams = [
        {
            id: 1,
            name: '刘丁元 Tony Liu',
            image: '/img/MIEC/teams/tony.png',
            designation: '招生主管',
            description: 'Matrix College & Veritas College 招生负责人'
        },
        {
            id: 2,
            name: "Hawk",
            image: "/img/MIEC/teams/hh.png"
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
        },
        {
            id: 2,
            name: 'Zehra Kavame',
            image: '/img/MIEC/teams/Zehra.png'
        }
    ];

    const chinaTeams = [
        {
            id: 1,
            name: "安妮",
            image: "/img/MIEC/teams/anni.jpg"
        },
        {
            id: 2,
            name: "徐靖博",
            image: "/img/MIEC/teams/xjbjpg.jpg"
        }
    ]

    const secretaryTeams = [
        {
            id: 1,
            name: "宦方舟",
            image: "/img/MIEC/teams/hfz.png"
        }
    ]


    const marketingTeams = [
        {
            id: 1,
            name: "JOJO",
            image: "/img/MIEC/teams/jojo.png"
        },
        {
            id: 2,
            name: "Yumi Wei",
            image: "/img/MIEC/teams/weiyun.png"
        },
        {
            id: 3,
            name: "Larissa",
            image: "/img/MIEC/teams/Larissa.png"
        }
    ]

    const contentTeams = [
        {
            id: 1,
            name: "毛书君",
            image: "/img/MIEC/teams/mxz.png"
        },
        {
            id: 2,
            name: "Jennifer",
            image: "/img/MIEC/teams/jf.png"
        },
    ]

    const langTeams = [
        {
            id: 1,
            name: 'Sylvain Langlois',
            image: '/img/MIEC/teams/sl.png',
            designation: '执行理事',
            description: '加拿大魁北克法语考试中心主任,加拿大Inter-Edu教育中心主任'
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
                    <div className="row text-center mb-3 mb-lg-6 mt-n5">
                        <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
                            {/*<h2 className="fs-30 text-uppercase text-muted mb-5">{teamst('projectPlannersTitle')}</h2>*/}
                            <h3 className="display-3 px-xl-10 mb-5">{teamst('projectPlannersSubtitle')}</h3>
                            {/*<h4 className=" px-xl-10 mb-0">{teamst('projectPlannersDescription')}</h4>*/}
                        </div>
                    </div>

                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-3 mb-md-2 mb-xl-2 align-items-center">

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


                    <div className="text-center mb-12">
                        <h3 className="display-3 px-xl-10">我们的组织架构图</h3>
                        <a href="/img/MIEC/teams/MIEC4.svg" data-glightbox data-gallery="g1">
                            <img src="/img/MIEC/teams/MIEC4.svg" alt="SVG Icon"
                                 style={{width: '100%', height: 'auto'}}/>
                        </a>
                    </div>
                    {/*<div className={styles['team-org-chart']}>*/}
                    {/*    <div className={styles['container']}>*/}
                    {/*        <h1 className={`${styles['level-1']} ${styles['rectangle']}`}>CEO</h1>*/}
                    {/*        <ol className={styles['level-2-wrapper']}>*/}
                    {/*            <li>*/}
                    {/*                <h2 className={`${styles['level-2']} ${styles['rectangle']}`}>Director A</h2>*/}
                    {/*                <ol className={styles['level-3-wrapper']}>*/}
                    {/*                    <li>*/}
                    {/*                        <h3 className={`${styles['level-3']} ${styles['rectangle']}`}>Manager A</h3>*/}
                    {/*                        <ol className={styles['level-4-wrapper']}>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    A</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    B</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    C</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    D</h4>*/}
                    {/*                            </li>*/}
                    {/*                        </ol>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <h3 className={`${styles['level-3']} ${styles['rectangle']}`}>Manager B</h3>*/}
                    {/*                        <ol className={styles['level-4-wrapper']}>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    A</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    B</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    C</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    D</h4>*/}
                    {/*                            </li>*/}
                    {/*                        </ol>*/}
                    {/*                    </li>*/}
                    {/*                </ol>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <h2 className={`${styles['level-2']} ${styles['rectangle']}`}>Director B</h2>*/}
                    {/*                <ol className={styles['level-3-wrapper']}>*/}
                    {/*                    <li>*/}
                    {/*                        <h3 className={`${styles['level-3']} ${styles['rectangle']}`}>Manager C</h3>*/}
                    {/*                        <ol className={styles['level-4-wrapper']}>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    A</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    B</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    C</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    D</h4>*/}
                    {/*                            </li>*/}
                    {/*                        </ol>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <h3 className={`${styles['level-3']} ${styles['rectangle']}`}>Manager D</h3>*/}
                    {/*                        <ol className={styles['level-4-wrapper']}>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    A</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    B</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    C</h4>*/}
                    {/*                            </li>*/}
                    {/*                            <li>*/}
                    {/*                                <h4 className={`${styles['level-4']} ${styles['rectangle']}`}>Person*/}
                    {/*                                    D</h4>*/}
                    {/*                            </li>*/}
                    {/*                        </ol>*/}
                    {/*                    </li>*/}
                    {/*                </ol>*/}
                    {/*            </li>*/}
                    {/*        </ol>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="row text-center mb-10 mb-lg-15 mt-n5">
                        <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
                            <h2 className="fs-30 text-uppercase text-muted mb-5">{teamst('teamTitle')}</h2>
                            <h3 className="display-3 px-xl-10 mb-0">{teamst('teamSubtitle')}</h3>
                        </div>
                    </div>


                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
                        <div className="col-lg-4">
                            <h3 className="display-5 mb-5">{teamst('sections.8.title')}</h3>
                            <p>{teamst('sections.8.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                <Carousel
                                    grabCursor
                                    navigation={false}
                                    breakpoints={carouselBreakpoints}
                                    autoplay={{delay: 2500, disableOnInteraction: false}}
                                >
                                    {secretaryTeams.map((team, index) => (
                                        <TeamCard2
                                            key={team.id}
                                            name={teamst(`secretaryTeams.${index}.name`)}
                                            image={team.image}
                                            description={teamst(`secretaryTeams.${index}.description`)}
                                            designation={teamst(`secretaryTeams.${index}.designation`)}
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
                            <h3 className="display-5 mb-5">{teamst('sections.10.title')}</h3>
                            <p>{teamst('sections.10.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                <Carousel
                                    grabCursor
                                    navigation={false}
                                    breakpoints={carouselBreakpoints}
                                    autoplay={{delay: 2500, disableOnInteraction: false}}
                                >
                                    {contentTeams.map((team, index) => (
                                        <TeamCard2
                                            key={team.id}
                                            name={teamst(`contentTeams.${index}.name`)}
                                            image={team.image}
                                            description={teamst(`contentTeams.${index}.description`)}
                                            designation={teamst(`contentTeams.${index}.designation`)}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>


                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
                        <div className="col-lg-4">
                            <h3 className="display-5 mb-5">{teamst('sections.5.title')}</h3>
                            <p>{teamst('sections.5.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                <Carousel
                                    grabCursor
                                    navigation={false}
                                    breakpoints={carouselBreakpoints}
                                    autoplay={{delay: 2500, disableOnInteraction: false}}
                                >
                                    {marketingTeams.map((team, index) => (
                                        <TeamCard2
                                            key={team.id}
                                            name={teamst(`marketingTeams.${index}.name`)}
                                            image={team.image}
                                            description={teamst(`marketingTeams.${index}.description`)}
                                            designation={teamst(`marketingTeams.${index}.designation`)}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>


                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
                        <div className="col-lg-4">
                            <h3 className="display-5 mb-5">{teamst('sections.6.title')}</h3>
                            <p>{teamst('sections.6.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                <Carousel
                                    grabCursor
                                    navigation={false}
                                    breakpoints={carouselBreakpoints}
                                    autoplay={{delay: 2500, disableOnInteraction: false}}
                                >
                                    {sellerTeams.map((team, index) => (
                                        <TeamCard2
                                            key={team.id}
                                            name={teamst(`sellerTeams.${index}.name`)}
                                            image={team.image}
                                            description={teamst(`sellerTeams.${index}.description`)}
                                            designation={teamst(`sellerTeams.${index}.designation`)}
                                        />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>


                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-7 mb-md-10 mb-xl-15 align-items-center">
                        <div className="col-lg-4">
                            <h3 className="display-5 mb-5">{teamst('sections.7.title')}</h3>
                            <p>{teamst('sections.7.description')}</p>
                        </div>

                        <div className="col-lg-8">
                            <div className="swiper-container text-center mb-6">
                                {/*<Carousel*/}
                                {/*    grabCursor*/}
                                {/*    navigation={false}*/}
                                {/*    breakpoints={carouselBreakpoints}*/}
                                {/*    autoplay={{delay: 2500, disableOnInteraction: false}}*/}
                                {/*>*/}
                                {/*    {langTeams.map((team, index) => (*/}
                                {/*        <TeamCard2*/}
                                {/*            key={team.id}*/}
                                {/*            name={teamst(`langTeams.${index}.name`)}*/}
                                {/*            image={team.image}*/}
                                {/*            description={teamst(`langTeams.${index}.description`)}*/}
                                {/*            designation={teamst(`langTeams.${index}.designation`)}*/}
                                {/*        />*/}
                                {/*    ))}*/}
                                {/*</Carousel>*/}
                            </div>
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
