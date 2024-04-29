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
import Accordion from "../../../src/components/reuseable/accordion";

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
            id: "pl11",
            no: "5857",
            img: "/img/programs/pl-wm.jpg",
            name: "文秘专业",
            url: `/${locale}/programs/peq/secretarial`
        },
        {
            id: "pl08",
            no: "5195",
            img: "/img/programs/pl-hj.jpg",
            name: "焊接与装配",
            url: `/${locale}/programs/peq/welding-fitting`
        },
        {
            id: "pl10",
            no: "5250",
            img: "/img/programs/pl-jzsj.jpg",
            name: "建筑设计",
            url: `/${locale}/programs/peq/architectural-design`
        },
        {
            id: "pl09",
            no: "5225",
            img: "/img/programs/pl-gysj.jpg",
            name: "工业设计",
            url: `/${locale}/programs/peq/industrial-design`
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
        title7: "我们有最专业的律师团队解决问题, 助您移民成功",
        title8: "常见问题",
        title9: "如果您还有其他问题, 请联系我们",
        title10: "项目对比",
        title11: "对比其他项目, 移民快人一步"
    }

    // const processList2 = [
    //     {
    //         no: '01',
    //         title: '极速Offer',
    //         subtitle: '自有学院, 48小时获得Offer'
    //     },
    //     {
    //         no: '02',
    //         title: '获批CAQ及学签',
    //         subtitle: '获得CAQ及学签, 期间学习法语前置'
    //     },
    //     {
    //         no: '03',
    //         title: 'DEP职业培训',
    //         subtitle: '职业培训及法语培训,获得毕业证'
    //     },
    //     {
    //         no: '04',
    //         title: '申请CSQ (魁北克永居)',
    //         subtitle: '2个月获得CSQ, 准备申请加拿大绿卡'
    //     },
    // ];

    const accordionList = [
        [
            {
                no: 'One',
                expand: false,
                heading: "PEQ项目与其他移民项目相比有何优势?",
                body: "PEQ项目是最安全快速的移民项目, 处理时间相对较短. 同时, 对于在魁北克获得文凭并有一定工作经验的申请人, 其条件相对宽松. 符合条件的申请人在我们的辅助下可以更容易地获得魁北克省的永久居留权"
            },
            {
                no: 'Three',
                expand: false,
                heading: "我要参加法语考试? 我的法语不够好怎么办?",
                body: "PEQ项目对申请人有一定的法语能力要求. 如果您的法语水平不足, 我们建议您参加我们的法语强化课程, 帮助您在短时间内达到所需的语言水平. 我们的学校由经验丰富的教师授课, 为申请人提高其法语能力"
            },
            {
                no: 'Five',
                expand: false,
                heading: "申请PEQ项目对学历有什么要求?",
                body: "PEQ项目要求申请人必须拥有魁北克省教育机构颁发的文凭或学位证书, 如职业技术文凭(DEP)、大专(DEC)、本科学位、研究生等. 对于法语学位或文凭的申请人, 无需满足任何工作经验的要求即可递交申请"
            },
            {
                no: 'Six',
                expand: false,
                heading: "我是法语毕业生, 是否要提供语言成绩?",
                body: "对于完全由法语授课的全日制学习项目的毕业生, 在申请PEQ项目时无需提供语言成绩证明, 您的法语能力通过已完成的纯法语教育来证明. 我们建议您参加我们的法语强化课程, 以进一步提高语言能力和成绩"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "申请PEQ项目需要哪些材料? 需要多长时间?",
                body: "PEQ项目需要提交的材料包括身份证明、学历证明、语言成绩证明等. 具体的材料清单会根据您的情况有所不同, 我们的专业顾问团队会为您提供全程的申请指导, 也会确保您的申请材料完整、准确, 更快通过"
            },
            {
                no: 'Four',
                expand: false,
                heading: "获得永居身份后, 我是否必须留在魁北克工作?",
                body: "通过PEQ项目获得永居身份后, 您可以选择在魁北克省内工作, 也可以在加拿大的其他省份工作. 但我们会建议您可以先在魁北克工作一段时间, 积累工作经验, 这对您未来在加拿大的职业发展会有很大帮助"
            },
            {
                no: 'Seven',
                expand: false,
                heading: "获得永居身份后, 我的家人是否可以随行?",
                body: "通过PEQ项目获得永居身份后, 您可以为您的配偶和子女申请随行移民. 符合条件的家属可获得申请人相同的永居身份, 子女可在加拿大接受免费的公立教育. 我们专业的顾问可为您的家属申请提供无忧服务"
            },
            {
                no: 'Eight',
                expand: false,
                heading: "获得永居身份后, 我是否可申请加拿大国籍?",
                body: "通过PEQ项目获得永居身份后, 您可以在满足一定居住要求的情况下申请加拿大国籍. 成为加拿大公民, 您享有加拿大工作、生活、投票等全部权利, 并持有加拿大护照. 我们可为您提供申请国籍的专业指导"
            }
        ]
    ];

    const classNameListType = "btn btn-primary btn-lg btn-block mb-3 " +
        "d-flex justify-content-center align-items-center text-white text-center font-weight-bold font-size-lg font-size-md font-size-xsm font-size-sm";

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


                    <div className="peq-section mt-18 mb-6">
                        <h2 className="fs-15 text-uppercase text-muted mb-3 text-center">{mainContent.title10}</h2>
                        <h3 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">
                            {mainContent.title11}
                        </h3>
                        <div className="peq-cards">

                            <div className="peq-card">
                                <div className="peq-image">
                                    <img src="/img/PEQ/gzdb.jpg" alt="photo-d"/>
                                    <div className="peq-title">
                                        <h3>雇主担保项目移民</h3>
                                    </div>
                                </div>

                                <div className="peq-content">
                                    <ul>
                                        <li>雇主招聘: 雇主需发布3个月以上广告</li>
                                        <li>雇主申请: 证明无法本地招聘约3个月</li>
                                        <li>政府批准: 加拿大政府审批, 约4个月</li>
                                        <li>工签申请: 申请人获得资格申请, 约3个月</li>
                                        <li>工签获批: 提供体检等材料, 约2个月</li>
                                        <li>加国永居: 提交申请, 大约12个月或以上</li>
                                        <li>总共耗时: 40个月或更长时间拿下移民资格</li>
                                    </ul>
                                </div>

                                <div className="peq-body">
                                    <p>雇主担保项目移民是漫长且复杂的过程, 通常需要40个月或更长时间才能拿下移民资格.
                                        申请人不仅需要等待雇主招聘和政府审批, 还需满足全职工作一年以上等条件,
                                        而且也面临诸多不确定性风险, 比如雇主方面和政府方面. 申请人还需达到语言和学历要求,
                                        进一步增加了申请难度</p>
                                </div>
                            </div>


                            <div className="peq-card">
                                <div className="peq-image">
                                    <img src="/img/PEQ/peqxm.jpg" alt="photo-d"/>
                                    <div className="peq-title">
                                        <h3>PEQ项目移民</h3>
                                    </div>
                                </div>

                                <div className="peq-content">
                                    <ul>
                                        <li>自有学院: 48小时急速获得OFFER</li>
                                        <li>入学准备: 进入我们的法语课程学习</li>
                                        <li>学签批准: 4个月左右获得学生签证</li>
                                        <li>专业学习: 14-18个月的全日制课程</li>
                                        <li>魁省永居: 约6个月左右CSQ申请通过</li>
                                        <li>加国永居: 10-12个月PR永居申请通过</li>
                                        <li>总共耗时: 40个月内成功拿下移民资格</li>
                                    </ul>
                                </div>
                                <div className="peq-body">
                                    <p>
                                        我们定制的法语PEQ项目移民是一条高效、确定性强的绿色移民通道. 通过我们专业的法语课程学习,
                                        申请人最快可在40个月内获得移民资格, 整个过程简单明确, 没有任何风险.
                                        PEQ是希望以最短时间实现稳定移民梦想的申请人的理想选择
                                    </p>
                                </div>
                            </div>


                            <div className="peq-card">
                                <div className="peq-image">
                                    <img src="/img/PEQ/ee.jpg" alt="photo-d"/>
                                    <div className="peq-title">
                                        <h3>联邦移民通道</h3>
                                    </div>
                                </div>

                                <div className="peq-content">
                                    <ul>
                                        <li>本科学习: 4年全日制本科教育</li>
                                        <li>经验认证: 3年加拿大内外工作经验</li>
                                        <li>提交申请: 进入候选人池, 有效期12个月</li>
                                        <li>获得邀请: 根据分数获得邀请, 时间不定</li>
                                        <li>准备材料: 获得邀请后60天内准备材料</li>
                                        <li>正式申请: 提交永居申请, 约6个月审核周期</li>
                                        <li>总共耗时: 6-8年以上完成留学和移民申请</li>
                                    </ul>
                                </div>
                                <div className="peq-body">
                                    <p>联邦移民通道是及其漫长的过程, 需要6-8年或更长时间才能完成学习、工作和移民申请.
                                        申请人需要投入大量时间提升学历和积累工作经验, 还要通过语言考试达到CLB7级以上,
                                        并等待时间不确定的邀请. 此外, 申请人还需准备大量材料, 如学历认证和体检等,
                                        周期长达数月之久. 整个过程风险较高, 难度巨大</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-18 mb-6">
                        <h2 className="fs-15 text-uppercase text-muted mb-3 text-center">{mainContent.title8}</h2>
                        <h3 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">
                        {mainContent.title9}
                        </h3>

                        <div className="accordion-wrapper" id="accordion">
                            <div className="row">
                                {accordionList.map((items, i) => {
                                    return (
                                        <div className="col-md-6" key={i}>
                                            {items.map((item) => (
                                                <Accordion key={item.no} {...item} />
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <ContactForms t={contactformst} pageInfo={{p: currentPage}}/>
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
