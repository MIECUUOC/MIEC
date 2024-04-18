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

const ElectricityPage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Electricity - 电气专业"

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "电气专业",
        title3: "电气是现代世界的命脉, 电气技术人员的职业发展前景广阔、稳定. 在我们的1800小时的认证课程中, 您将掌握进入这个充满活力、不断进化的行业所需的技能. 作为一名电工, 您将有能力为社区带来光明, 为家庭供电, 为企业注入活力. 让我们一起踏上这个精彩的旅程, 成为电气领域的专业人士, 开启人生的新篇章!",
        title4: "掌握电气技能, 点亮美好未来",
        title5: "理论实践并重, 全面提升电气技能",
        title6: "电气专业人才, 前景无限广阔",
        title7: "专业师资团队, 助您成就梦想",
        title8: "电气精英, 开启精彩人生",
        title9: "系统化课程设计, 培养电气专业精英",
        title10: "我们的课程体系由电气行业资深专家精心设计, 涵盖了电气领域的各个方面. 从基础电路原理到先进的自动化控制, 从住宅电气安装到工业电力系统维护, 24个模块环环相扣, 循序渐进. 通过系统学习, 您将全面掌握电气专业技能, 成为一名出类拔萃的电气技术人员",
        title11: "电气专业技能, 开启璀璨人生",
        title12: "立即报名, 成就非凡电气人才",
        title13: "问题解答",
        title14: "疑问专区, 查看常见问题"
    }

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: "官方认证, 质量保证",
            body: "我们旗下院校是魁北克省教育部认可的职业教育机构, 电气专业培训项目经过严格评估, 获得官方认证. 完成学业后, 您将获得魁北克省颁发的专业文凭, 这将是您职业生涯辉煌的开始, 为您在电气行业的发展奠定坚实的基础"
        },
        {
            no: 'Two',
            expand: false,
            heading: "实践导向, 技能为重",
            body: "我们的学院开设的1800小时电气专业培训课程, 在业内享有盛誉. 课程内容全面, 涵盖电气领域24项核心技能, 理论与实践并重, 强调动手操作能力. 通过大量的实践训练, 确保学生掌握扎实的专业知识和过硬的操作技能"
        },
        {
            no: 'Three',
            expand: false,
            heading: "就业市场广阔, 前景无限",
            body: "电气专业人才在魁北克乃至整个加拿大都是稀缺人才, 就业市场广阔. 我们的学院与魁北克省内多家知名电气公司和工程机构保持紧密合作关系, 无论是大公司担任要职, 还是自主创业, 作为我院的毕业生, 都将拥有广阔的职业前景"
        }
    ];

    const iconBoxClassNames = "icon btn btn-circle btn-lg btn-primary pe-none mb-5"

    const serviceList2 = [
        {
            id: 1,
            linkUrl: '#',
            title: "技能全面提升",
            icon: 'uil-book-open',
            description: "我们的课程全面而细致, 从基础电路理论到先进自动化控制, 涵盖电气领域的方方面面. 通过学习, 您将掌握电气设计、故障诊断、系统维护等专业技能, 成为全能的电气技术专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "实践导向教学",
            icon: 'uil-shield-exclamation',
            description: "我院拥有业内一流的实训设施和设备, 为学生提供真实工作环境. 通过大量实操训练和项目实践, 您将快速积累宝贵的工作经验, 为未来的职业发展奠定坚实的基础"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "就业前景广阔",
            icon: 'uil-laptop-cloud',
            description: "电气专业人才在各行各业都有广泛需求. 我院毕业生可在电力公司、制造业、建筑业等多个领域大展拳脚, 无论自主创业或就职大企业, 都有广阔的发展空间和良好的职业前景"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "助力技术移民",
            icon: 'uil-chart-line',
            description: "电气专业是魁北克省PEQ技术移民计划的重点领域之一. 通过我院的专业培训, 您不仅能够掌握一技之长, 还能够满足技术移民的申请条件, 为在加拿大定居的梦想铺平道路"
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
            amount: 5795,
            color: 'btn-soft-purple',
            title: "课程编号",
            icon: 'uil-presentation-check'
        },
        {
            id: 2,
            amount: 1800,
            color: 'btn-soft-red',
            title: "课程时长",
            icon: 'uil-users-alt'
        },
        {
            id: 3,
            amount: 120,
            color: 'btn-soft-yellow',
            title: "项目学分",
            icon: 'uil-user-check'
        },
        {
            id: 4,
            amount: 24,
            color: 'btn-soft-aqua',
            title: "课程数量",
            icon: 'uil-trophy'
        }
    ];

    const classInfo = [
        {
            id: "754-992",
            title: "工作场所的健康与安全预防",
            hours: "30",
            credits: "2"
        },
        {
            id: "783-401",
            title: "确定是否适合该行业和培训过程",
            hours: "15",
            credits: "1"
        },
        {
            id: "783-412",
            title: "使用计算机",
            hours: "30",
            credits: "2"
        },
        {
            id: "783-428",
            title: "验证电路的电压、电流和功率",
            hours: "120",
            credits: "8"
        },
        {
            id: "783-433",
            title: "绘制安装草图和电路图",
            hours: "45",
            credits: "3"
        },
        {
            id: "783-445",
            title: "使用工具",
            hours: "75",
            credits: "5"
        },
        {
            id: "783-453",
            title: "高空作业和材料处理",
            hours: "45",
            credits: "3"
        },
        {
            id: "783-466",
            title: "安装电线管和电缆",
            hours: "90",
            credits: "6"
        },
        {
            id: "783-477",
            title: "安装住宅分支电路和相关保护装置",
            hours: "105",
            credits: "7"
        },
        {
            id: "783-484",
            title: "解释图纸、规范、技术手册和维护程序",
            hours: "60",
            credits: "4"
        },
        {
            id: "783-494",
            title: "安装和维护三相变压器",
            hours: "60",
            credits: "4"
        },
        {
            id: "783-506",
            title: "安装和维护服务入口和应急电源",
            hours: "90",
            credits: "6"
        },
        {
            id: "783-517",
            title: "验证电子电路是否正常工作",
            hours: "105",
            credits: "7"
        },
        {
            id: "783-525",
            title: "验证电气和电子电路的继电器和集成电路逻辑",
            hours: "75",
            credits: "5"
        },
        {
            id: "783-537",
            title: "安装和维护照明系统",
            hours: "105",
            credits: "7"
        },
        {
            id: "783-546",
            title: "安装和维护供热系统",
            hours: "90",
            credits: "6"
        },
        {
            id: "783-555",
            title: "安装铜缆和光纤通信电缆",
            hours: "75",
            credits: "5"
        },
        {
            id: "783-564",
            title: "安装火警系统",
            hours: "60",
            credits: "4"
        },
        {
            id: "783-578",
            title: "安装家庭自动化和住宅电话系统",
            hours: "120",
            credits: "8"
        },
        {
            id: "783-586",
            title: "安装和维护直流和单相交流旋转机及相关控制装置",
            hours: "90",
            credits: "6"
        },
        {
            id: "783-597",
            title: "安装和维护三相交流旋转机及相关控制装置",
            hours: "105",
            credits: "7"
        },
        {
            id: "783-607",
            title: "安装和维护建筑电气系统的可编程控制器",
            hours: "105",
            credits: "7"
        },
        {
            id: "783-615",
            title: "安装和维护建筑电气系统的电子仪表",
            hours: "75",
            credits: "5"
        },
        {
            id: "783-622",
            title: "为就业市场做准备",
            hours: "30",
            credits: "2"
        }
    ];

    const accordionList = [
        [
            {
                no: 'One',
                expand: false,
                heading: "如何满足课程的法语要求?",
                body: "我们提供专业的法语前置课程, 帮助您快速提升法语能力, 达到课程要求的入学标准. 我们的法语课程由经验丰富的教师授课, 通过有针对性的训练, 您将在短时间内掌握电气专业所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径,申请条件相对宽松. 作为长期紧缺的技术型人才, 电气专业的毕业生在PEQ移民申请中享有很大优势"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "电气专业人才在魁北克省乃至整个加拿大都是稀缺人才, 就业前景广阔. 随着社会发展和技术进步, 对电气技术人员的需求不断增加. 通过我们的PEQ课程, 您将掌握全面的电气技能, 成为备受企业青睐的高端技术人才"
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
                                <img className="w-auto" src="/img/PEQ/e1.jpg" alt="Photo"/>
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

export default ElectricityPage;
