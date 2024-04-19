import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import ContactForms from "../../../src/components/otherBlocks/ContactForms";

const PEQPage: NextPage = () => {
    // get current locale
    const router = useRouter();
    const {locale} = router;

    const currentPage = "PEQ - 魁北克经验类移民项目"

    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const peqContents = {
        iconTitle: "MIEC旗下拥有多家职业学院, 让您的移民之旅一路通畅",
        schoolInfo: [
            {
                key: "peqs01",
                name: "Veritas College",
                img: "/img/MIEC/programs/peqs1.png"
            },
            {
                key: "peqs02",
                name: "Aviron College",
                img: "/img/MIEC/programs/peqs3.png"
            },
            {
                key: "peqs03",
                name: "Herzing College",
                img: "/img/MIEC/programs/peqs5.png"
            },
            {
                key: "peqs04",
                name: "Ascent College",
                img: "/img/MIEC/programs/peqs4.png"
            },
            {
                key: "peqs05",
                name: "Academy of Learning Career College",
                img: "/img/MIEC/programs/peqs7.png"
            },
            {
                key: "peqs06",
                name: "Matrix College",
                img: "/img/MIEC/programs/peqs6.png"
            },
            {
                key: "peqs07",
                name: "Cégep de la Gaspésie et des Îles",
                img: "/img/MIEC/programs/peqs8.png"
            },
            {
                key: "peqs08",
                name: "Cégep Marie-Victorin",
                img: "/img/MIEC/programs/peqs2.png"
            },
            {
                key: "peqs09",
                name: "College Superieur de Montreal",
                img: "/img/MIEC/programs/peqs10.png"
            },
            {
                key: "peqs10",
                name: "Ecole Hoteliere de la capital",
                img: "/img/MIEC/programs/peqs9.png"
            }
        ]
    }

    const programsList = [
        {
            id: "pl01",
            no: "5298",
            img: "/img/programs/pl-qx.jpg",
            name: "汽车机械",
            url: `/${locale}/programs/peq/auto-mechanics`
        },
        {
            id: "pl05",
            no: "5750",
            img: "/img/programs/pl-gyzt.jpg",
            name: "住宅与商业制图",
            url: `/${locale}/programs/peq/residential-commercial-drafting`
        },
        {
            id: "pl03",
            no: "5295",
            img: "/img/programs/pl-dg.jpg",
            name: "电气技术",
            url: `/${locale}/programs/peq/electricity`
        },
        {
            id: "pl04",
            no: "5229",
            img: "/img/programs/pl-jsjzc.jpg",
            name: "计算机支持",
            url: `/${locale}/programs/peq/computer-support`
        },
        {
            id: "pl12",
            no: "",
            img: "/img/programs/pl-cs.jpg",
            name: "西餐厨师和糕点",
            url: `/${locale}/programs/peq/western-cuisine-pastry`
        },
        {
            id: "pl08",
            no: "5195",
            img: "/img/programs/pl-hj.jpg",
            name: "焊接与装配",
            url: `/${locale}/programs/peq/welding-fitting`
        },
        {
            id: "pl09",
            no: "5225",
            img: "/img/programs/pl-gysj.jpg",
            name: "工业设计",
            url: `/${locale}/programs/peq/industrial-design`
        },
        {
            id: "pl10",
            no: "5250",
            img: "/img/programs/pl-jzsj.jpg",
            name: "建筑设计",
            url: `/${locale}/programs/peq/architectural-design`
        },
        {
            id: "pl11",
            no: "5857",
            img: "/img/programs/pl-wm.jpg",
            name: "文秘专业",
            url: `/${locale}/programs/peq/secretarial`
        }
        // {
        //     id: "pl02",
        //     no: "5858",
        //     img: "/img/programs/pl-hl.jpg",
        //     name: "家庭护理",
        //     url: `/${locale}/programs/peq/home-care`
        // },
        // {
        //     id: "pl06",
        //     no: "5319",
        //     img: "/img/programs/pl-mg.jpg",
        //     name: "木工技术",
        //     url: `/${locale}/programs/peq/carpentry`
        // },
        // {
        //     id: "pl07",
        //     no: "5333",
        //     img: "/img/programs/pl-gn.jpg",
        //     name: "管道和供暖",
        //     url: `/${locale}/programs/peq/plumbing-heating`
        // },
    ]

    const accordions = [
        {
            no: 'One',
            expand: true,
            heading: "什么是PEQ项目",
            body: "魁北克经验类移民项目(PEQ)是魁北克省政府提供的一项快速通道移民计划. 该项目允许在魁北克省工作或学习的申请人,通过简化的申请流程,快速获得魁北克省的移民身份. MIEC旗下拥有多所魁北克省的多所大专院校,我们可以为申请人提供优质的学习和工作机会,帮助申请人满足PEQ项目的申请条件"
        },
        {
            no: 'Two',
            expand: false,
            heading: "我们项目的优势",
            body: "通过我们的项目,申请人可以更快毕业, 原18个月课程可以缩短到14个月. 与其他移民项目相比,我们PEQ项目的申请流程更加简化,审理速度更快,申请人可以在更短的时间内获得移民身份. 并且我们还可以帮您解决法语以及法语考试的问题, 选择我们的服务, 就是您移民加拿大成功的开始"
        },
        {
            no: 'Three',
            expand: false,
            heading: "为什么选择我们",
            body: "我们在魁北克省教育和就业领域拥有广泛的人脉和资源,我们可以为申请人提供量身定制最合适的学习或工作计划,帮助申请人满足PEQ项目的申请条件. 同时,我们也将全程为申请人提供专业的申请指导和材料准备服务,确保申请过程的顺利进行. 选择MIEC,就是选择一条通往魁北克省的快速通道!"
        }
    ];

    const mainContent = {
        title1: "MIEC",
        title2: "魁北克经验类移民",
        title3: "魁北克经验类移民项目(PEQ)是魁北克省政府提供的一项快速通道移民计划. 该项目允许在魁北克省工作或学习的申请人, 通过简化的申请流程, 快速获得魁北克省的移民身份.",
        title4: "我们旗下拥有多所魁北克省顶尖大专院校, 我们可以为申请人提供最为优质的学习和工作机会, 帮助申请人满足PEQ项目的申请条件. 而且相比于其他机构, 我们旗下院校的学费更低, 且毕业速度更快, 让您的移民之路快人一步.",
        title5: "我们定制的PEQ项目是最快最安全的移民通道",
        title6: "我们提供最优质法语培训, 助您快速满足PEQ条件",
        title7: "我们有最专业的律师团队解决问题, 助您移民成功"
    }

    const processList2 = [
        {
            no: '01',
            title: '极速Offer',
            subtitle: '自有学院, 48小时获得Offer'
        },
        {
            no: '02',
            title: '获批CAQ及学签',
            subtitle: '获得CAQ及学签, 期间学习法语前置'
        },
        {
            no: '03',
            title: 'DEP职业培训',
            subtitle: '职业培训及法语培训,获得毕业证'
        },
        {
            no: '04',
            title: '申请CSQ (魁北克永居)',
            subtitle: '2个月获得CSQ, 准备申请加拿大绿卡'
        },
    ];

    useLightBox();
    return (
        <div className="page-frame bg-pale-primary">
            <PageProgress/>
            {/* ========== header section ========== */}
            <header className="wrapper">
                <Navbar language t={navt}/>
            </header>

            <main className="content-wrapper">
                <RoundContainer>

                    <div className="row mb-18 gx-md-8 gy-10 align-items-center">
                        <div className="col-lg-6 offset-lg-1 order-lg-2 position-relative">
                            <figure className="rounded">
                                <img className="img-fluid" src="/img/PEQ/t3.jpg" alt=""/>
                            </figure>

                            <div
                                className="card shadow-lg position-absolute text-center d-none d-md-block"
                                style={{bottom: '10%', left: '-10%'}}
                            >
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <h2 className="fs-16 text-uppercase text-blue fw-bolder mb-3">{mainContent.title1}</h2>
                            <h3 className="display-4 mb-4 me-lg-n5">{mainContent.title2}</h3>
                            <p className="fs-18">{mainContent.title3}</p>
                            <p className="mb-8 fs-18">{mainContent.title4}</p>

                            <ul className="icon-list bullet-bg bullet-soft-primary">
                                <li className="fw-bolder">
                                    <i className="uil uil-check"/>
                                    <span>{mainContent.title5}</span>
                                </li>

                                <li className="fw-bolder">
                                    <i className="uil uil-check"/>
                                    {mainContent.title6}
                                </li>

                                <li className="fw-bolder">
                                    <i className="uil uil-check"/>
                                    {mainContent.title7}
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/*<div className="mb-18">*/}
                    {/*    <h2 className="display-4 mb-3 text-center">申请流程</h2>*/}
                    {/*    <p className="lead fs-lg mb-8 text-center">*/}
                    {/*        我们的流程 <span className="underline">全程加速</span> 保证您快速移民*/}
                    {/*    </p>*/}

                    {/*    <div className="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">*/}
                    {/*        {processList2.map(({no, title, subtitle}, i) => {*/}
                    {/*            const iconColor = i === 0 ? 'btn-primary' : 'btn-soft-primary';*/}

                    {/*            return (*/}
                    {/*                <div className="col-md-6 col-lg-3" key={no}>*/}
                    {/*                      <span className={`icon btn btn-circle btn-lg pe-none mb-4 ${iconColor}`}>*/}
                    {/*                        <span className="number">{no}</span>*/}
                    {/*                      </span>*/}

                    {/*                    <h4 className="mb-1">{title}</h4>*/}
                    {/*                    <p>{subtitle}</p>*/}
                    {/*                </div>*/}
                    {/*            );*/}
                    {/*        })}*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <Fragment>
                        <h2 className="display-3 px-xxl-10 mb-4 text-center">我们的学院</h2>
                        <h2 className="fs-18 text-uppercase text-muted text-center mb-8">{peqContents.iconTitle}</h2>
                        <div className="px-lg-5 mb-14 mb-md-19">
                            <div className="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center justify-content-center">
                                {peqContents.schoolInfo.map((item) => (
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3" key={item.key}>
                                        <figure className="px-3 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                                            <img src={item.img} alt={item.name} className="img-fluid"/>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Fragment>

                    <div id="programs-list" className="container py-4 py-md-5 mb-10">
                        <div className="row mb-8 text-center">
                            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                                <h2 className="fs-16 text-uppercase text-primary mb-3">提供专业</h2>
                                <h3 className="display-4 mb-8">我们拥有最全面的专业及最专业的学校讲师</h3>
                            </div>
                        </div>

                        <div className="grid grid-view projects-masonry">
                            <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                                {programsList.map(({id, img, name, url}) => (
                                    <div className="project item col-md-6 col-xl-4 product" key={id}>
                                        <figure className="lift rounded mb-6">
                                            <Link href={url} passHref legacyBehavior>
                                                <a>
                                                    <Image
                                                        width={1300}
                                                        height={1132}
                                                        src={img}
                                                        alt={name}
                                                        style={{width: '100%', height: 'auto'}}
                                                    />
                                                </a>
                                            </Link>
                                        </figure>

                                        <div className="project-details d-flex justify-content-center flex-column">
                                            <div className="post-header">
                                                <div className={`post-category mb-2`}></div>
                                                <a href={url} className="post-title h3 text-center d-block">{name}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <ContactForms t={contactformst} pageInfo={{p: currentPage}} />
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
            ...(await serverSideTranslations(locale, ['common', 'nav', 'contactForms', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default PEQPage;
