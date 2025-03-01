import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {ServiceCard3} from "../../../src/components/reuseable/service-cards";
import ContactForms from "../../../src/components/otherBlocks/ContactForms";
import Target from "../../../src/icons/lineal/Target";
import AwardTwo from "../../../src/icons/lineal/AwardTwo";
import {renderString} from "../../../src/components/reuseable/links/NextLink";
import {useState} from "react";
import PricingCard4 from "../../../src/components/reuseable/pricing-cards/PricingCard4";

const French: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')
    const [activeYearly, setActiveYearly] = useState(false);

    const currentPage = "French - 法语直通"

    const whatWeAre = [
        {id: 1, Icon: Target, title: '我们的使命', description: '为学生提供卓越法语教育, 助力实现移民和职业目标'},
        {id: 2, Icon: AwardTwo, title: '我们的价值观', description: '专业、创新、包容、以学生为中心, 也以考试为中心'}
    ];

    const faqList = [
        {
            id: 1,
            title: '课程安排灵活吗?',
            description: `我们提供全日制和非全日制课程, 以及一对一和更多定制课程等, 您可以根据自己的时间安排选择适合的课程. 无论您是零基础还是希望提高法语水平, 我们都有适合您的课程`
        },
        {
            id: 2,
            title: '教学方式有什么特色?',
            description: `我们采用沉浸式教学模式, 营造身临其境的语言环境. 通过小组讨论、情景模拟等互动方式, 提高学生的语言应用能力. 同时, 我们将法语文化融入教学, 帮助学生更好地理解国家文化`
        },
        {
            id: 3,
            title: '课程结束后如何衡量学习效果?',
            description: `完成我们的课程后, 您将可以参加法语考试, 这对您的移民之路非常重要. 我们可以帮您预约我们的法语考试中心, 让您专心应对考试, 如果您需要更多针对考试的服务, 也欢迎联系我们了解更多`
        },
        {
            id: 4,
            title: '学校提供哪些课外活动?',
            description: `我们的课程会定期组织丰富多彩的文化活动, 如法国电影欣赏、美食品鉴、节日庆祝等. 通过这些活动, 学生可以在轻松愉悦的氛围中练习法语, 体验法国文化, 结交来自世界各地的朋友`
        }
    ];

    const context = {
        text1: 'MIEC - 法语教育首选',
        text2: '蒙特利尔国际教育中心致力于为学生提供',
        text3: '卓越的法语教育',
        text4: ', 助力实现个人发展和职业理想, 以及移民保障',
        text5: '我们的教学团队由经验丰富的法语教育专家组成, 采用先进的教学理念和方法, 为学生营造沉浸式的学习环境. 通过我们的课程, 学生不仅能掌握扎实的语言技能, 还能深入了解法语国家的文化, 为未来的发展奠定坚实基础',
        text6: '探索我们的课程',
        text7: '个性化、多样化的课程设置, 满足不同法语水平学生的需求',
        text8: '常见问题',
        text9: '了解更多关于MIEC的特色和优势'
    };

    const questions = {
        contentTitle: "常见问题",
        mainTitle: "查看常见问题,欢迎随时咨询",

        questionList: [
            [
                {
                    no: 'One',
                    expand: false,
                    heading: '什么是 EduCanada? 对国际学生有什么好处?',
                    body: `EduCanada 是加拿大政府为国际学生推出的官方教育品牌, 代表了加拿大高质量的教育体系. 通过 EduCanada, 学生可以更便捷地了解和申请加拿大的教育资源, 享受优质的教育服务, 为未来在加拿大的发展奠定基础`
                },
                {
                    no: 'Two',
                    expand: false,
                    heading: 'DELF/DALF/TEF/TCF 考试成绩有什么用途?',
                    body: `这些国际公认的法语考试成绩可以用于申请法语国家的学校和工作签证, 如加拿大的魁北克省、法国、瑞士等. 许多大学和雇主都要求提供法语能力证明, 拥有这些考试成绩可以大大提高您的竞争力, 开拓更广阔的发展机会`
                },
                {
                    no: 'Three',
                    expand: false,
                    heading: '贵校在法语教学和考试方面有哪些优势?',
                    body: `我们拥有经验丰富的教师团队, 他们熟悉法语教学的最新理念和方法,能够因材施教, 提供个性化的指导. 同时, 我们与权威考试机构保持紧密合作, 拥有丰富的考试资源和第一手考情分析, 可以帮助学生更有针对性地备考`
                },
            ],
            [
                {
                    no: 'Four',
                    expand: false,
                    heading: '你们的教学团队由哪些人组成?',
                    body: `我们的教学团队由资深法语教师等多方面人才组成, 他们不仅拥有扎实的法语语言功底, 还深谙法语国家的文化和社会, 能够从多角度帮助学生全面提高法语能力. 并且, 跟随我们的课程学习也会对未来的法语考试大有益处`
                },
                {
                    no: 'Five',
                    expand: false,
                    heading: '除了语言课程, 贵校还提供哪些其他服务?',
                    body: `我们不仅提供语言课程, 还致力于为学生提供全方位的移民支持服务等. 我们有专业的留学咨询团队, 可以为学生提供学习和生活方面的建议. 定期举办交流活动, 帮助学生融入当地生活. 也帮助您更好的完成移民梦想`
                },
                {
                    no: 'Six',
                    expand: false,
                    heading: '学习法语对未来发展有什么益处?',
                    body: `法语是联合国、欧盟等许多重要国际组织的官方语言和工作语言之一. 随着全球化的不断深入, 掌握法语可以让您在国际舞台上拥有更多的机会, 无论是求学、就业还是文化交流, 都能让您如鱼得水, 为个人发展奠定坚实的基础`
                }
            ]
        ]
    }

    const schoolInfo = {
        mainTitle: "我们的考试中心",
        schoolName1: "加拿大国际法语考试中心",
        schoolTitle1: "加拿大 No.1 法语学习考试中心, 加拿大移民局指定的魁北克唯一官方法语考试中心, 以及蒙特利尔法语考试中心",
        schoolBody1: "作为加拿大首屈一指的法语考试和教育机构, 加拿大国际法语考试中心致力于提供高质量的法语教学和考试服务. 我们的法语考试中心由经验丰富的法语教育专家组成, 采用先进的教学方法和技术, 为学生营造沉浸式的学习环境. 我们的考试中心是 Languages Canada 的成员, 也是 DELF/DALF/TEF/TCF 等国际认证法语考试的官方考试中心"
    }

    const otherContent = {
        serviceTitle: "服务列表",
        serviceContext: "最优质的法语教育, 为您的移民之路保驾护航"
    }

    const pricingList3 = [
        {
            monthlyPrice: 0,
            yearlyPrice: 0,
            planName: "法语精通",
            features: ['零到 B2', '无限重读', '名师指导', '真题模拟', '考前培训']
        },
        {
            monthlyPrice: 0,
            yearlyPrice: 0,
            planName: "法语大师",
            features: ['零到 B2', '无限重读', '名师指导', '真题模拟', '考前培训', '保驾护航']
        },
        {
            monthlyPrice: 0,
            yearlyPrice: 0,
            planName: "法语冲刺",
            features: ['任何基础', '量身定制', '名师指导', '真题模拟', '考前培训']
        }
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
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-14 align-items-center">
                        <div className="col-lg-6 position-relative">
                            <div
                                className="shape bg-soft-primary rounded-circle rellax w-20 h-20"
                                style={{top: '-2rem', left: '-1.9rem'}}
                            />

                            <figure className="rounded">
                                <img src="/img/French/f1.jpg" alt="Image Here"/>
                            </figure>
                        </div>

                        <div className="col-lg-6">
                            <h2 className="display-4 mb-3">{context.text1}</h2>
                            <p className="lead fs-lg">
                                {context.text2}
                                <span className="underline">{context.text3}</span> {context.text4}
                            </p>
                            <p className="mb-6">
                                {context.text5}
                            </p>

                            <div className="row gx-xl-10 gy-6">
                                {whatWeAre.map(({id, title, description, Icon}) => (
                                    <div className="col-md-6" key={id}>
                                        <ServiceCard3 title={title} description={description}
                                                      Icon={<Icon className="icon-svg-sm me-4"/>}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row gx-md-8 gx-xl-12 gy-10 mb-16">
                        {faqList.map((item) => (
                            <div className="col-lg-6" key={item.id}>
                                <div className="d-flex flex-row">
                                    <div>
                                        <span className="icon btn btn-sm btn-circle btn-primary pe-none me-5">
                                            <i className="uil uil-comment-exclamation"/>
                                        </span>
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p className="mb-0">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div>
                        <div className="row text-center mt-20">
                            <div className="col-md-11 col-lg-9 col-xl-8 mx-auto">
                                <h2 className="fs-16 text-uppercase text-muted mb-3">{otherContent.serviceTitle}</h2>
                                <h3 className="display-4 mb-10 px-xxl-10">
                                    {otherContent.serviceContext}
                                </h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-11 mx-auto">
                                <div className="pricing-wrapper mb-10 mb-md-14">
                                    <div className="row gy-6 mt-3 mt-md-5">
                                        {pricingList3.map((item, i) => (
                                            <div className={`col-md-6 col-lg-4 ${i === 1 && 'popular'}`} key={i}>
                                                <PricingCard4 roundedButton bulletBg {...item}
                                                              activeYearly={activeYearly}/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/*<div className="peq-section mt-18 mb-6">*/}
                    {/*    <h2 className="fs-15 text-uppercase text-muted mb-3 text-center">{otherContent.serviceTitle}</h2>*/}
                    {/*    <h3 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">*/}
                    {/*        {otherContent.serviceContext}*/}
                    {/*    </h3>*/}
                    {/*    <div className="peq-cards">*/}

                    {/*        <div className="peq-card">*/}
                    {/*            <div className="peq-image">*/}
                    {/*                <img src="/img/PEQ/gzdb.jpg" alt="photo-d"/>*/}
                    {/*                <div className="peq-title">*/}
                    {/*                    <h3>雇主担保项目移民</h3>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className="peq-content">*/}
                    {/*                <ul>*/}
                    {/*                    <li>雇主招聘: 雇主需发布3个月以上广告</li>*/}
                    {/*                    <li>雇主申请: 证明无法本地招聘约3个月</li>*/}
                    {/*                    <li>政府批准: 加拿大政府审批, 约4个月</li>*/}
                    {/*                    <li>工签申请: 申请人获得资格申请, 约3个月</li>*/}
                    {/*                    <li>工签获批: 提供体检等材料, 约2个月</li>*/}
                    {/*                    <li>加国永居: 提交申请, 大约12个月或以上</li>*/}
                    {/*                    <li>总共耗时: 40个月或更长时间拿下移民资格</li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}

                    {/*            <div className="peq-body">*/}
                    {/*                <p>雇主担保项目移民是漫长且复杂的过程, 通常需要40个月或更长时间才能拿下移民资格.*/}
                    {/*                    申请人不仅需要等待雇主招聘和政府审批, 还需满足全职工作一年以上等条件,*/}
                    {/*                    而且也面临诸多不确定性风险, 比如雇主方面和政府方面. 申请人还需达到语言和学历要求,*/}
                    {/*                    进一步增加了申请难度</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}


                    {/*        <div className="peq-card">*/}
                    {/*            <div className="peq-image">*/}
                    {/*                <img src="/img/PEQ/peqxm.jpg" alt="photo-d"/>*/}
                    {/*                <div className="peq-title">*/}
                    {/*                    <h3>PEQ项目移民</h3>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className="peq-content">*/}
                    {/*                <ul>*/}
                    {/*                    <li>自有学院: 48小时急速获得OFFER</li>*/}
                    {/*                    <li>入学准备: 进入我们的法语课程学习</li>*/}
                    {/*                    <li>学签批准: 4个月左右获得学生签证</li>*/}
                    {/*                    <li>专业学习: 14-18个月的全日制课程</li>*/}
                    {/*                    <li>魁省永居: 约6个月左右CSQ申请通过</li>*/}
                    {/*                    <li>加国永居: 10-12个月PR永居申请通过</li>*/}
                    {/*                    <li>总共耗时: 40个月内成功拿下移民资格</li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*            <div className="peq-body">*/}
                    {/*                <p>*/}
                    {/*                    我们定制的法语PEQ项目移民是一条高效、确定性强的绿色移民通道. 通过我们专业的法语课程学习,*/}
                    {/*                    申请人最快可在40个月内获得移民资格, 整个过程简单明确, 没有任何风险.*/}
                    {/*                    PEQ是希望以最短时间实现稳定移民梦想的申请人的理想选择*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}


                    {/*        <div className="peq-card">*/}
                    {/*            <div className="peq-image">*/}
                    {/*                <img src="/img/PEQ/ee.jpg" alt="photo-d"/>*/}
                    {/*                <div className="peq-title">*/}
                    {/*                    <h3>联邦移民通道</h3>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className="peq-content">*/}
                    {/*                <ul>*/}
                    {/*                    <li>本科学习: 4年全日制本科教育</li>*/}
                    {/*                    <li>经验认证: 3年加拿大内外工作经验</li>*/}
                    {/*                    <li>提交申请: 进入候选人池, 有效期12个月</li>*/}
                    {/*                    <li>获得邀请: 根据分数获得邀请, 时间不定</li>*/}
                    {/*                    <li>准备材料: 获得邀请后60天内准备材料</li>*/}
                    {/*                    <li>正式申请: 提交永居申请, 约6个月审核周期</li>*/}
                    {/*                    <li>总共耗时: 6-8年以上完成留学和移民申请</li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*            <div className="peq-body">*/}
                    {/*                <p>联邦移民通道是及其漫长的过程, 需要6-8年或更长时间才能完成学习、工作和移民申请.*/}
                    {/*                    申请人需要投入大量时间提升学历和积累工作经验, 还要通过语言考试达到CLB7级以上,*/}
                    {/*                    并等待时间不确定的邀请. 此外, 申请人还需准备大量材料, 如学历认证和体检等,*/}
                    {/*                    周期长达数月之久. 整个过程风险较高, 难度巨大</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <div className="container mt-16 pb-9 ">
                        <div className="row">
                            <div className="mx-auto">
                                <h3 className="display-4 mb-10">{schoolInfo.mainTitle}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 align-items-center mb-18">
                        <div className="col-lg-6 px-4">
                            <img className="image-wrapper bg-image object-fit-cover rounded-4 w-100"
                                 src="/img/French/ff4.jpg" alt="Photo"/>
                        </div>

                        <div className="col-lg-6 px-2 mt-lg-0 mt-md-0 pt-4">
                            <div>
                                <h2 className="display-4 mb-3">{schoolInfo.schoolName1}</h2>

                                <p className="fs-lg">
                                    {renderString(schoolInfo.schoolTitle1)}
                                </p>

                                <p>
                                    {schoolInfo.schoolBody1}
                                </p>

                            </div>
                        </div>
                    </div>


                    {/*<div className="wrapper bg-light">*/}
                    {/*    <div className="container py-12 py-md-14">*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">*/}
                    {/*                <h2 className="fs-15 text-uppercase text-muted mb-3">Happy Customers</h2>*/}
                    {/*                <h3 className="display-4 mb-6 px-xl-10 px-xxl-15">*/}
                    {/*                    Dont take our word for it. See what customers are saying about us.*/}
                    {/*                </h3>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="swiper-container dots-closer mb-6">*/}
                    {/*            <Carousel spaceBetween={0} grabCursor navigation={false}*/}
                    {/*                      breakpoints={carouselBreakpoints}>*/}
                    {/*                {testimonialList2.map((item, i) => (*/}
                    {/*                    <div className="item-inner" key={i}>*/}
                    {/*                        <TestimonialCard3 {...item} />*/}
                    {/*                    </div>*/}
                    {/*                ))}*/}
                    {/*            </Carousel>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="mb-10">
                        <h2 className="fs-15 text-uppercase text-muted mb-3 text-center mt-16">{questions.contentTitle}</h2>
                        <h3 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">
                            {questions.mainTitle}
                        </h3>

                        <div className="accordion-wrapper" id="accordion">
                            <div className="row">
                                {questions.questionList.map((items, i) => {
                                    return (
                                        <div className="col-md-6" key={i}>
                                            {items.map((item) => (
                                                <div key={item.no} className={`card shadow-lg accordion-item`}>
                                                    <div className="card-header" id={`heading${item.no}`}>
                                                        <button
                                                            data-bs-toggle="collapse"
                                                            aria-controls={`collapse${item.no}`}
                                                            data-bs-target={`#collapse${item.no}`}
                                                            aria-expanded={item.expand ? 'true' : 'false'}
                                                            className={item.expand ? 'accordion-button' : 'collapsed'}
                                                        >
                                                            {item.heading}
                                                        </button>
                                                    </div>

                                                    <div
                                                        id={`collapse${item.no}`}
                                                        aria-labelledby={`heading${item.no}`}
                                                        data-bs-parent="#accordionExample"
                                                        className={`accordion-collapse collapse ${item.expand && 'show'}`}
                                                    >
                                                        <div className="card-body">
                                                            <p>{item.body}</p>
                                                        </div>
                                                    </div>
                                                </div>
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
            ...(await serverSideTranslations(locale, ['common', 'majors', 'nav', 'contactForms', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default French;
