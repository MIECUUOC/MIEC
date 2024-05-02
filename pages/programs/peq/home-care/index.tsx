import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import Accordion from "../../../../src/components/reuseable/accordion";
import {Fragment} from "react";
import IconBox from "../../../../src/components/reuseable/IconBox";
import CountUp from "react-countup";
import ContactForms from "../../../../src/components/otherBlocks/ContactForms";

const HomeCarePage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Home-Care - 家庭护理专业"

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "护理专业",
        title3: "护理事业是现代社会的重要支柱, 护理人才需求巨大, 发展前景广阔. 在我们870小时的认证课程中, 您将掌握成为一名优秀护理工作者所需的全面技能. 课程结束后, 您还可以选择在我院继续深造, 最终成为一名执牌护士. 更令人振奋的是, 根据魁北克现行政策, 学习护理专业最多可获得五万加币的补助. 作为护理人员, 您将有机会帮助病患康复, 为长者提供悉心照料, 用爱心点亮他人的生命之光. 让我们携手踏上这段神圣的护理之旅, 成就卓越, 铸就辉煌!",
        title4: "掌握护理技能, 助力职业发展",
        title5: "理论实践并重, 培养护理精英",
        title6: "护理专业前景广阔, 就业机会多",
        title7: "补助优厚, 深造机会多, 成就非凡",
        title8: "学有所成, 铸就辉煌护理人生",
        title9: "系统专业课程, 培养优秀护理人才",
        title10: "我院护理课程由资深护理专家精心设计, 涵盖护理学各个领域. 从解剖生理学基础到临床护理实践, 从老年护理到儿科护理, 15个环环相扣的教学模块, 让您循序渐进, 全面掌握. 通过系统的理论学习和实践操作, 您将具备扎实的专业知识和过硬的实践技能. 课程结束后, 您还可以选择继续在我院深造, 最终成长为一名执牌护士",
        title11: "点亮生命之光, 成就护理梦想",
        title12: "即刻报名, 开启精彩护理人生",
        title13: "问题解答",
        title14: "常见问题专区"
    }

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: '官方认证, 品质保障',
            body: '我院是魁北克省教育部认可的大专职业教育机构, 护理专业培养项目经过严格评估, 获得官方认证. 完成学业后, 您将获得魁北克省颁发的专业文凭, 这将是您护理事业的敲门砖, 为您今后的职业发展奠定坚实基础'
        },
        {
            no: 'Two',
            expand: false,
            heading: '理论实践, 技能为本',
            body: '我院开设的870小时护理专业课程在业内享有盛誉. 课程全面涵盖护理领域的15项核心技能, 理论与实践紧密结合, 强调动手操作能力. 通过大量的实习实训环节, 确保学生掌握扎实的专业知识和娴熟的实践技能. 课程结束后,学生还可选择继续深造,最终成为一名执牌护士'
        },
        {
            no: 'Three',
            expand: false,
            heading: '补助优厚,机遇无限',
            body: '根据魁北克现行政策, 学习护理专业最多可获得五万加币的补助, 大大减轻了学生的经济压力. 同时, 护理人才需求旺盛, 就业前景十分广阔. 无论是在医院担任重要护理岗位, 还是为社区护理事业贡献才智, 作为我院护理专业的毕业生, 您都将拥有一片充满机遇的广阔天地'
        }
    ];

    const iconBoxClassNames = 'icon btn btn-circle btn-lg btn-primary pe-none mb-5';

    const serviceList2 = [
        {
            id: 1,
            linkUrl: '#',
            title: "全面的专业技能",
            icon: 'uil-book-open',
            description: "我们的课程设计全面细致, 从基础护理到高级护理, 涵盖护理学的方方面面. 您将掌握健康评估、药物治疗、伤口护理、急救等多项护理专业技能, 成为护理专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "丰富的实践机会",
            icon: 'uil-shield-exclamation',
            description: "我院拥有完备的实验实训室, 为学生提供接近真实的医疗环境. 通过大量实习操作和临床实践, 您将快速积累宝贵的临床工作经验, 为未来护理工作奠定坚实基础"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "光明的职业前景",
            icon: 'uil-laptop-cloud',
            description: "随着社会老龄化加剧, 护理专业人才需求旺盛. 我院毕业生可在医院、疗养院、社区医疗服务等领域大展拳脚. 无论是在大型医疗机构担任护理要职, 还是成为私人护理员, 都有非常好的发展前景"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "助力移民梦想",
            icon: 'uil-chart-line',
            description: "护理专业是魁北克省紧缺人才职业之一, 属于优先移民类别. 通过我院的专业学习, 您不仅能掌握实用的护理技能, 还能满足该省技术移民的申请条件以及享受优厚补助, 为移民加拿大铺平道路"
        }
    ];

    const listContent = {
        className: "课程名称",
        classCode: "课程代码",
        classHours: "时长(小时)",
        classCredits: "学分"
    }

    const countList = [
        {
            id: 1,
            amount: 5858,
            color: 'btn-soft-purple',
            title: "课程编号",
            icon: 'uil-presentation-check'
        },
        {
            id: 2,
            amount: 870,
            color: 'btn-soft-red',
            title: "课程时长",
            icon: 'uil-users-alt'
        },
        {
            id: 3,
            amount: 58,
            color: 'btn-soft-yellow',
            title: "项目学分",
            icon: 'uil-user-check'
        },
        {
            id: 4,
            amount: 15,
            color: 'btn-soft-aqua',
            title: "课程数量",
            icon: 'uil-trophy'
        }
    ];

    const classInfo = [
        {
            id: "751-702",
            title: "确定自己是否适合该职业和培训过程",
            hours: "30",
            credits: "2"
        },
        {
            id: "751-714",
            title: "建立助人关系",
            hours: "60",
            credits: "4"
        },
        {
            id: "751-724",
            title: "对有认知障碍、心理健康问题或神经发育障碍的客户采取关系方法",
            hours: "60",
            credits: "4"
        },
        {
            id: "751-734",
            title: "确定满足有身体疾病和残疾的客户需求的适当方法",
            hours: "60",
            credits: "4"
        },
        {
            id: "751-745",
            title: "提供与日常生活活动(ADL)相关的护理",
            hours: "75",
            credits: "5"
        },
        {
            id: "751-752",
            title: "预防感染和污染",
            hours: "30",
            credits: "2"
        },
        {
            id: "751-768",
            title: "为日常活动提供辅助性护理",
            hours: "120",
            credits: "8"
        },
        {
            id: "751-772",
            title: "处理涉及风险的情况",
            hours: "30",
            credits: "2"
        },
        {
            id: "751-787",
            title: "与在家或替代生活环境中需要辅助性护理的客户合作",
            hours: "105",
            credits: "7"
        },
        {
            id: "751-794",
            title: "处理家庭、社会和文化背景",
            hours: "60",
            credits: "4"
        },
        {
            id: "751-802",
            title: "为临终和临终护理的客户提供帮助",
            hours: "30",
            credits: "2"
        },
        {
            id: "751-813",
            title: "考虑在日常生活活动的协助中涉及的药物管理和基本侵入性护理的规则和程序",
            hours: "45",
            credits: "3"
        },
        {
            id: "751-824",
            title: "根据客户的临床实际情况提供辅助性护理",
            hours: "60",
            credits: "4"
        },
        {
            id: "751-832",
            title: "进行急救",
            hours: "30",
            credits: "2"
        },
        {
            id: "751-845",
            title: "为需要短期护理的客户提供辅助性护理",
            hours: "75",
            credits: "5"
        }
    ];

    const accordionList = [
        [
            {
                no: 'One',
                expand: false,
                heading: "如何满足课程的法语要求?",
                body: "我们提供专业的法语前置课程, 帮助您快速提升法语能力, 达到课程要求的入学标准. 通过有针对性的训练, 您将在短时间内掌握专业所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径, 申请条件相对宽松. 作为长期紧缺的技术型人才, 护理专业的毕业生在PEQ移民申请中享有很大优势"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "护理专业人才在整个加拿大都是稀缺人才, 就业前景广阔. 随着社会老龄化的加剧, 对护理人员的需求不断增加. 通过我们的课程, 您将掌握护理技能"
            },
            {
                no: 'Four',
                expand: false,
                heading: "为什么选择我们的服务?",
                body: "我们是加拿大魁北克PEQ项目的领军者, 我们最权威的专业移民顾问和团队将为您提供全程的申请指导, 助您早日获得魁北克省的永久居留权"
            }
        ]
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
                    <div
                        className="row gy-10 gx-lg-8 gx-xl-12 mb-14 mb-md-16 align-items-center justify-content-center">
                        <div className="col-md-10 col-lg-6 col-sm-12">
                            <figure className="rounded">
                                <img className="w-auto" src="/img/PEQ/hl.jpg" alt="Photo"/>
                            </figure>
                        </div>

                        <div className="col-lg-6">
                            <h2 className="fs-15 text-uppercase text-muted mb-3">{contentList.title1}</h2>
                            <h3 className="display-4 mb-4">{contentList.title2}</h3>
                            <p>{contentList.title3}</p>

                            <div className="accordion accordion-wrapper" id="accordionExample">
                                {accordions.map((item) => (
                                    <Accordion type="plain" key={item.no} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <Fragment>
                        <div className="row">
                            <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center mb-4">
                                <h2 className="fs-15 text-uppercase text-muted mb-3 ">{contentList.title4}</h2>
                                <h3 className="display-4 mb-5 mb-10">{contentList.title5}</h3>
                            </div>
                        </div>

                        <div className="row gx-md-8 gy-8 text-center mb-14 mb-md-17">
                            {serviceList2.map((item) => (
                                <div key={item.id} className="col-md-6 col-lg-3">
                                    <IconBox icon={item.icon} className={iconBoxClassNames}/>
                                    <h4>{item.title}</h4>
                                    <p className="mb-3">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </Fragment>

                    <div className="row">
                        <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                            <h2 className="fs-15 text-uppercase text-muted mb-3 ">{contentList.title6}</h2>
                            <h3 className="display-4 mb-5 mb-10">{contentList.title7}</h3>
                        </div>
                    </div>
                    <div className="row gx-lg-0 gy-10 align-items-center mb-15 mb-lg-18">
                        <div className="col-lg-6 order-lg-2 offset-lg-1">
                            <div className="row gx-md-5 gy-5 align-items-center counter-wrapper">
                                {countList.map(({id, icon, title, amount, color}) => (
                                    <div className="col-md-6" key={id}>
                                        <div className="card shadow-lg">
                                            <div className="card-body">
                                                <div className="d-flex d-lg-block d-xl-flex flex-row">
                                                    <div>
                                                        <div
                                                            className={`icon btn btn-circle btn-lg btn-soft-blue pe-none mx-auto me-4 mb-lg-3 mb-xl-0`}>
                                                            <i className={`uil ${icon}`}/>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h3 className="counter mb-1">
                                                            <CountUp end={amount}/>
                                                        </h3>
                                                        <p className="mb-0">{title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <h2 className="display-4 mb-3">{contentList.title8}</h2>
                            <p className="lead fs-lg lh-sm">
                                {contentList.title9}
                            </p>
                            <p className="mb-0">
                                {contentList.title10}
                            </p>
                        </div>
                    </div>


                    <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                        <h2 className="fs-15 text-uppercase text-muted mb-3 ">{contentList.title11}</h2>
                        <h3 className="display-4 mb-5 mb-10">{contentList.title12}</h3>
                    </div>
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">{listContent.className}</th>
                            <th scope="col">{listContent.classHours}</th>
                            <th scope="col">{listContent.classCredits}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {classInfo.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.hours}</td>
                                <td>{item.credits}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>


                    <div className="mt-18 mb-6">
                        <h2 className="fs-15 text-uppercase text-muted mb-3 text-center">{contentList.title13}</h2>
                        <h3 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">
                            {contentList.title14}
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

export default HomeCarePage;
