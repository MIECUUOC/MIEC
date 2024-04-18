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

const ComputerSupportPage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Computer-Support - 计算机支持专业"

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "计算机支持专业",
        title3: "掌握计算机技能, 开启精彩人生. 我们的\"计算机支持专业培训\"项目助您实现梦想! 在这里, 通过1560小时的密集学习将让您掌握多项专业技能, 并且提供两个120小时的必修实习项目让您成为备受行业认可的计算机支持专家. 我们有最先进的教学设施、最专业的师资团队、最真实的实战环境, 带您探索计算机技术的奥秘, 我们的资格证书将为您打开通往成功的大门. 无论您是行业新人还是转换职业, 机会就在眼前, 改变从这里开始",
        title4: "成就卓越人生, 从这里启程",
        title5: "实现技能进阶与职业蜕变",
        title6: "开启成功之门, 铸就非凡人生",
        title7: "专业培训, 助力您的职业发展",
        title8: "加入计算机支持专业大家庭",
        title9: "成为全面的计算机支持专家",
        title10: "我们的课程体系涵盖了计算机支持领域的方方面面, 从基础的软件应用到先进的网络管理, 从常规的故障诊断到系统的优化配置, 22门课程让您成为一名全能型的计算机支持专家, 在职场中拥有更多的选择和机会",
        title11: "专业计算机技能, 开启璀璨未来",
        title12: "加入我们, 成为计算机支持领域的佼佼者",
        title13: "问题专区",
        title14: "如果您有任何其他问题, 请随时联系我们"
    }

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: '省教育部认证机构',
            body: "我们的技术学院是魁北克省教育部认证的职业教育机构, 我们的计算机支持专业培训项目获得了官方认可. 通过学习, 学生将获得魁北克省承认的专业文凭, 为未来的职业生涯奠定坚实基础"
        },
        {
            no: 'Two',
            expand: false,
            heading: "量身定制的培训课程",
            body: "我们的技术学院开设的1800小时\"计算机支持专业培训\"课程, 根据行业需求量身定制. 我们的课程设置涵盖了计算机支持的各个方面, 从软件应用到网络管理, 让学生成为全能型人才, 在职场中游刃有余"
        },
        {
            no: 'Three',
            expand: false,
            heading: '拥有广阔的就业前景',
            body: '我们的技术学院与魁北克省内众多知名IT公司和企业建立了长期合作关系. 凭借我们的专业培训和官方认证, 毕业生在求职时将具有巨大优势, 无论是新人入行, 还是转换职业, 都是您通往成功的金牌之选!'
        }
    ];

    const iconBoxClassNames = "icon btn btn-circle btn-lg btn-primary pe-none mb-5"

    const serviceList = [
        {
            id: 1,
            linkUrl: '#',
            title: "全方位技能培养",
            icon: 'uil-book-open',
            description: "我们的课程设置全面, 从基础软件应用到先进网络管理的方方面面. 无论系统优化, 还是故障诊断, 您都将成为真正的专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "实战教学环境",
            icon: 'uil-shield-exclamation',
            description: "我们拥有先进的教学设施和设备,为您提供实战环境. 在这里, 您亲身实践, 积累操作经验, 为未来的职业生涯打下坚实基础"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "就业方向广泛",
            icon: 'uil-laptop-cloud',
            description: "计算机支持技能让您可以在IT公司、大型企业、政府机构等多个领域择业. 无论创业或就职, 您都有广阔的舞台和发展空间"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "移民的绝佳选择",
            icon: 'uil-chart-line',
            description: "计算机支持专业是魁北克省PEQ技术移民的热门选择. 您不仅收获了一技之长, 更为移民之路铺平了道路,实现移民梦想"
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
            amount: 5729,
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
            amount: 22,
            color: 'btn-soft-aqua',
            title: "课程数量",
            icon: 'uil-trophy'
        }
    ];

    const accordionList = [
        [
            {
                no: 'One',
                expand: false,
                heading: "如何满足课程的法语要求?",
                body: "我们提供专业的法语前置课程, 帮助您提升法语能力, 达到课程要求的入学标准. 我们的法语课程由经验丰富的教师授课, 您将在短时间内掌握所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径,申请条件相对宽松. 作为长期紧缺的技术型人才, 计算机支持专业的毕业生在PEQ移民申请中享有很大优势"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "计算机支持行业是魁北克省乃至整个加拿大的热门行业, 对计算机支持专业人才的需求也在不断增加. 通过我们的PEQ课程,您将成为备受青睐的高端技术人才"
            },
            {
                no: 'Four',
                expand: false,
                heading: "为什么选择我们的服务?",
                body: "我们是加拿大魁北克PEQ项目的领军者, 我们最权威的专业移民顾问和团队将为您提供全程的申请指导,助您早日获得魁北克省的永久居留权"
            }
        ]
    ];

    const classInfo = [
        {
            id: "962-012",
            title: "确定是否适合该职业和培训过程",
            hours: "30",
            credits: "2"
        },
        {
            id: "962-025",
            title: "分析计算机系统的架构和操作",
            hours: "75",
            credits: "5"
        },
        {
            id: "962-038",
            title: "利用老旧技术操作系统的功能",
            hours: "120",
            credits: "8"
        },
        {
            id: "962-043",
            title: "应用问题解决方法",
            hours: "45",
            credits: "3"
        },
        {
            id: "962-053",
            title: "研究信息",
            hours: "30",
            credits: "2"
        },
        {
            id: "962-068",
            title: "开发实用程序",
            hours: "120",
            credits: "8"
        },
        {
            id: "962-074",
            title: "在各种工作情况下互动",
            hours: "60",
            credits: "4"
        },
        {
            id: "962-088",
            title: "发掘应用软件的可能性",
            hours: "120",
            credits: "8"
        },
        {
            id: "962-096",
            title: "探索使用新技术的操作系统的可能性",
            hours: "90",
            credits: "6"
        },
        {
            id: "962-106",
            title: "创建和使用数据库",
            hours: "90",
            credits: "6"
        },
        {
            id: "962-116",
            title: "安装计算机的硬件和软件",
            hours: "90",
            credits: "6"
        },
        {
            id: "962-122",
            title: "管理时间",
            hours: "30",
            credits: "2"
        },
        {
            id: "962-135",
            title: "用法语沟通",
            hours: "75",
            credits: "5"
        },
        {
            id: "962-148",
            title: "管理网络资源的访问",
            hours: "120",
            credits: "8"
        },
        {
            id: "962-157",
            title: "安装网络的可共享资源",
            hours: "105",
            credits: "7"
        },
        {
            id: "962-166",
            title: "评估电信设施的可能性",
            hours: "90",
            credits: "6"
        },
        {
            id: "962-173",
            title: "管理职业生涯",
            hours: "45",
            credits: "3"
        },
        {
            id: "962-186",
            title: "解决计算机问题",
            hours: "90",
            credits: "6"
        },
        {
            id: "962-194",
            title: "优化计算机性能",
            hours: "15",
            credits: "1"
        },
        {
            id: "962-205",
            title: "在电话帮助台提供技术支持",
            hours: "75",
            credits: "5"
        },
        {
            id: "962-218",
            title: "确保工作场所计算机的正常运行",
            hours: "120",
            credits: "8"
        },
        {
            id: "962-228",
            title: "在工作场所为客户提供服务",
            hours: "120",
            credits: "8"
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
                    <div
                        className="row gy-10 gx-lg-8 gx-xl-12 mb-14 mb-md-16 align-items-center justify-content-center">
                        <div className="col-md-10 col-lg-6 col-sm-12">
                            <figure className="rounded">
                                <img className="w-auto" src="/img/PEQ/cs-min.jpg" alt="Photo"/>
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
                            {serviceList.map((item) => (
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

                    {/*<ContactForms t={contactformst} pageInfo={{p: currentPage}}/>*/}

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

export default ComputerSupportPage;
