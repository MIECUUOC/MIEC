import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import Accordion from "../../../src/components/reuseable/accordion";
import {Fragment} from "react";

const Teams: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');

    const upTitle = {
        mainTitle: "MIEC - 名校直通车",
        subTitle: "我们很高兴向您介绍我们的\"名校直通车\"项目, 该项目旨在帮助学生通过修读安省高中文凭和AP或A-Level课程, " +
            "实现进入理想的名牌大学的梦想!",
        otherTitle: "我们项目的优势",
        mapInfo: "我们其中的学院的地址",
        mapTitle: "多伦多联合中学联合了8所顶尖的学院, 也是我们和劳伦斯园大学学院等多所加拿大高级院校的联合项目",
        mapBody: "劳伦斯园大学学院是多伦多一所著名的公立高中, 创建于1936年. 学校以优秀的教学质量和学生成就而闻名, 致力于培养学生的学术能力、领导才能和社区意识. " +
            "通过多伦多联合中学项目, 我国学生可以在劳伦斯园大学学院接受优质的加拿大高中教育, 为申请知名大学做好准备",
        mapButton: "通过地图查看"

    }

    const accordions = [
        {
            no: 'One',
            expand: true,
            heading: '什么是名校直通车',
            body: '名校直通车项目是MIEC精心设计的一项升学计划, MIEC与多伦多地区的多所优质的高中建立了长期合作关系,' +
                ' 我们的学生可以在高中修读课程, 享受优质的教学资源和学习环境. 我们的项目结合了高中文凭和AP或A-Level三个北美主流教育体系的优势, ' +
                '可以最大限度地帮助学生实现升学目标'
        },
        {
            no: 'Two',
            expand: false,
            heading: '我们项目的优势',
            body: '通过我们的课程, 学生可以获得加拿大高中文凭和美国大学学分, 为申请加拿大和美国的大学提供双重保障, ' +
                '课程附带的AP或A-Level课程是世界公认的金标准, 修读课程可以展示学生的学习能力和专业素养, 提高学生在大学申请中的竞争力'
        },
        {
            no: 'Three',
            expand: false,
            heading: '为什么选择我们',
            body: '我们的课程的难度和深度与大学课程相当, 修读我们提供的课程可以帮助学生提前适应大学的学习节奏和方式, ' +
                '为今后的大学学习打下良好基础. 同时MIEC也与加拿大和美国的众多名校建立了良好的合作关系, ' +
                '我们可以为学生提供专业的升学指导和申请服务, 帮助学生顺利进入理想的大学'
        }
    ];

    const forStudents = [
        {
            id: 'fs1',
            title: "注重过程评估，全面发展潜能",
            body: "我们的课程采用过程式评估方式, 学生的最终成绩由70%的平时成绩和30%的期末考试成绩构成. 这一评估体系更加重视学生的平时表现, " +
                "为学生提供了更多展示学习成果的机会. 同时课程的学术难度相对较低, 对学习能力一般的学生更加友好. 获得高中文凭后, " +
                "学生可以与安省本地学生一样, 通过竞争相对缓和的申请通道申请加拿大大学, 在申请中获得特有优势"
        },
        {
            id: 'fs3',
            title: "成绩获国际认可，无需标准化考试",
            body: "加拿大高中成绩在国际上广受认可, 用于申请海外大学, 无需参加SAT等标准化考试. 对于高考成绩不理想或不想参加高考的学生, " +
                "可以利用加拿大高中成绩作为第二重保障, 直接申请世界名校. 已在国内就读高中的学生可通过学分置换的方式抵扣相应的加拿大高中学分. " +
                "高三学生或高中毕业生最短仅需1年时间, 修够8个学分即可获得加拿大高中文凭"
        },
        {
            id: 'fs2',
            title: "丰富选修课程，发挥学科特长",
            body: "我们提供的课程体系提供了多门课程供学生选择, 学生可以根据自身优势和未来学习方向选课, 扬长避短, 发挥学科特长. 对于偏科严重的学生而言, " +
                "通过我们的名校直通车项目提高分数相对更加容易实现，从而增加进入名校的机会"
        },
        {
            id: 'fs4',
            title: "部分大学免雅思托福，降低语言门槛",
            body: "申请海外大学通常需要雅思或者托福成绩, 但对于我们项目的学生, 英国、加拿大、澳大利亚、中国香港、新加坡等国家和地区的许多大学都提供免雅思或托福录取政策, " +
                "只要学生在12年级的英语课程中达到学校要求的成绩即可. 这一政策有效降低了语言成绩要求, 为英语能力一般的学生提供了更多机会"
        }
    ]

    const questions = {
        contentTitle: "问题专区",
        mainTitle: "以下为常见问题，如果您有其他问题请联系我们",

        questionList: [
            [
                {
                    no: 'One',
                    expand: false,
                    heading: "修读名校直通车项目需要多长时间?",
                    body: "修读时长因学生的背景和学习进度而有所不同. 已在国内就读高中的学生可通过学分置换的方式抵扣相应的加拿大高中学分, " +
                        "最短仅需1年时间, 修够8个学分即可获得加拿大高中文凭. 对于其他情况的学生, 我们会提供个性化的学习计划, 确保学生在预期时间内快速的完成学业"
                },
                {
                    no: 'Two',
                    expand: false,
                    heading: "AP和A-Level课程到底对申请大学有什么帮助?",
                    body: "AP课程是美国大学理事会开设的大学先修课程, 而A-Level是英国的高中课程体系, 两者的课程难度和深度都与大学课程相当. " +
                        "在AP考试或A-Level考试中获得高分的学生, 证明其具备优秀的学习能力和学科素养, 在申请大学时更具竞争力. " +
                        "部分美国大学为AP成绩优异的学生提供学分免修或升学优惠政策, 而许多英国大学也认可A-Level成绩. " +
                        "所以, 无论是AP还是A-Level, 都能让我们的孩子在申请大学时赢在起跑线上"
                },
                {
                    no: 'Three',
                    expand: false,
                    heading: "名校直通车项目下的学校师资力量如何?",
                    body: "我们项目下所有学校校方的师资团队由经验丰富的加拿大本地教师组成, 他们熟悉加拿大和美国的课程体系, 深谙国际教育理念. " +
                        "同时教师也会根据学生的特点因材施教, 并提供学习和生活上的全方位指导, 帮助学生全面发展"
                },
            ],
            [
                {
                    no: 'Four',
                    expand: false,
                    heading: "名校直通车项目毕业后, 学生可以申请哪些大学?",
                    body: "通过我们的项目, 学生可以凭借加拿大高中文凭和AP或A-Level课程成绩申请加拿大、美国、英国、澳大利亚等国家的知名大学. 我们的升学指导团队可以" +
                        "根据学生的成绩、兴趣和职业规划,为学生量身定制申请方案,力争帮助每一位学生进入理想的大学"
                },
                {
                    no: 'Five',
                    expand: false,
                    heading: "学生在修读期间的住宿问题如何解决?",
                    body: "我们可以为学生提供多种住宿选择, 包括寄宿家庭、学生公寓等. 寄宿家庭都经过严格筛选, 可以为学生提供安全、舒适的居住环境, " +
                        "并帮助学生更好地融入加拿大的生活. 学生公寓配备齐全的生活设施, 学生可以体验独立生活. 我们会根据学生的需求推荐合适的住宿方案",
                },
                {
                    no: 'Six',
                    expand: false,
                    heading: "名校直通车项目的收费标准是怎样的?",
                    body: "我们的收费标准根据学生选择的课程、学习时长、还有是否选择住宿方式等因素而有所不同. 为了让学生和家长更加了解我们的收费情况, " +
                        "我们提供邮件咨询和预约面谈服务, 您可以通过这些渠道获得详细的收费方案, 我们的主旨也在让更多学生能够负担得起优质的国际教育"
                }
            ]
        ]
    }

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
                    <div className="col mb-n15">
                        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-8 mb-md-12" id="about-us">
                            <div className="col-lg-7 order-lg-2 d-flex justify-content-end align-items-center">
                                <figure>
                                    <img className="w-auto img-fluid rounded-4" src="/img/MIEC/About.png"
                                         srcSet="/img/MIEC/programs/school3.jpg" alt=""/>
                                </figure>
                            </div>

                            <div className="col-lg-5">
                                <h3 className="display-4 mt-xxl-8 mb-3">{upTitle.mainTitle}</h3>
                                <p className="lead fs-lg lh-sm mb-6">{upTitle.subTitle}</p>

                                <div className="accordion accordion-wrapper" id="accordionExample">
                                    {accordions.map((item) => (
                                        <Accordion
                                            type="plain"
                                            key={item.no}
                                            no={item.no}
                                            heading={item.heading}
                                            body={item.body}
                                            expand={item.expand}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div className="container pb-9 pb-md-14">
                                <div className="row">
                                    <div className="mx-auto">
                                        <h3 className="display-4 mb-10">{upTitle.otherTitle}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-md-8 gx-xl-12 gy-10 mt16">
                        {forStudents.map((item) => (
                            <div className="col-lg-6" key={item.id}>
                                <div className="d-flex flex-row">
                                    <div>
                                      <span className="icon btn btn-sm btn-circle btn-primary pe-none me-5">
                                        <i className="uil uil-comment-exclamation"/>
                                      </span>
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p className="mb-0">{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="container mt-16 pb-9 ">
                        <div className="row">
                            <div className="mx-auto">
                                <h3 className="display-4 mb-10">{upTitle.mapInfo}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5766.88446945405!2d-79.41293298758713!3d43.72213917097842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b32e3916a70a7%3A0x123dd9e4f110b02d!2z5Yue5YCr5pav5ZyS5aSn5a245a246Zmi!5e0!3m2!1szh-CN!2sca!4v1712603334957!5m2!1szh-CN!2sca"
                            width="600" height="450" className="col-lg-6 image-wrapper bg-image bg-cover rounded-4"
                            style={{border: "0"}} allowFullScreen={false} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div className="col-lg-6">
                            <div className="p-10 p-md-11 p-lg-13">
                                <h2 className="display-4 mb-3">劳伦斯园大学学院</h2>

                                <p className="lead fs-lg">
                                    {upTitle.mapTitle}
                                </p>

                                <p>
                                    {upTitle.mapBody}
                                </p>

                                <a href="https://maps.app.goo.gl/yvk7QpFZ8TPT2AtbA" target={"_blank"}
                                   className="btn btn-primary rounded-pill mt-2">
                                    {upTitle.mapButton}
                                </a>
                            </div>
                        </div>
                    </div>

                    <Fragment>
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
                    </Fragment>
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
            ...(await serverSideTranslations(locale, ['common', 'nav', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default Teams;
