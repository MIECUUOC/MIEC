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

const IndustrialDesignPage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Industrial-Design - 工业设计专业"

    const iconBoxClassNames = "icon btn btn-circle btn-lg btn-primary pe-none mb-5"

    const listContent = {
        className: "课程名称",
        classCode: "课程代码",
        classHours: "时长(小时)",
        classCredits: "学分"
    }

    const countList = [
        {
            id: 1,
            amount: 5225,
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
            amount: 28,
            color: 'btn-soft-aqua',
            title: "课程数量",
            icon: 'uil-trophy'
        }
    ];

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "工业设计专业",
        title3: "我们的\"工业设计专业培训\"项目, 助您实现设计师梦想!通过14个月(含3周企业实习)的深入学习, 您将掌握工业设计的专业技能, 成为备受行业青睐的优秀设计师. 我们拥有先进的教学设施、经验丰富的师资团队, 为您提供全方位的学习支持. 让我们一起探索工业设计的奥秘,创造属于您的辉煌人生!",
        title4: "设计梦想, 从这里启航",
        title5: "量身定制, 成就卓越设计师",
        title6: "开启成功之门, 缔造非凡设计人生",
        title7: "专业培训, 助您事业腾飞",
        title8: "加入工业设计专业大家庭",
        title9: "精心打造课程, 成就设计专家",
        title10: "我们的课程体系全面涵盖工业设计的各个领域, 从机械制图到AutoCAD设计, 从材料工艺到产品结构, 从概念设计到产品建模. 通过系统的学习和实践, 您将掌握行业前沿技术, 成为集创意设计和技术实现于一身的工业设计专家. 让我们共同开启通往成功的大门!",
        title11: "专业技能, 开启璀璨设计人生",
        title12: "招生进行, 成为设计精英",
        title13: "问题专区",
        title14: "如有疑问, 欢迎联系我们"
    }

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: '官方认证, 行业信赖',
            body: "我们的技术学院是魁北克省教育部认证的职业教育机构, \"工业设计专业培训\"项目获得官方认可. 通过完成全部学习, 学生将获得魁北克省颁发的D.E.P.文凭, 这将是您设计职业生涯的金字招牌, 为未来发展奠定坚实基础"
        },
        {
            no: 'Two',
            expand: false,
            heading: "企业实习, 就业无忧",
            body: "我们的\"工业设计专业培训\"项目特别设置了3周的企业实习环节. 通过在真实的工作环境中实践, 学生将全面提升机械制图、AutoCAD绘图、产品设计等专业技能. 这一宝贵的实习经历, 将让您在未来的设计职业生涯中拥有更强的竞争力"
        },
        {
            no: 'Three',
            expand: false,
            heading: '就业广泛, 前景无限',
            body: '工业设计专业人才在魁北克省乃至加拿大有着广阔的就业前景. 制造业、工程咨询、政府部门等都对工业设计专业人才有着巨大需求. 凭借我们的专业培训和官方认证, 您将在求职时拥有巨大优势, 让我们开启成功的职业生涯!'
        }
    ];

    const serviceList = [
        {
            id: 1,
            linkUrl: '#',
            title: "全方位技能培养",
            icon: 'uil-book-open',
            description: "我们的课程涵盖了工业设计的方方面面, 从机械制图到AutoCAD设计, 从材料工艺到产品结构, 让您成为全能设计专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "3周企业实习",
            icon: 'uil-shield-exclamation',
            description: "我们提供3周的企业实习, 让您在真实的工作环境中锻炼专业技能, 积累实战经验, 为未来的设计职业生涯奠定坚实基础"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "就业前景广阔",
            icon: 'uil-laptop-cloud',
            description: "工业设计专业在加拿大和魁北克都有着广阔的就业前景. 制造业、工程咨询、政府部门等都对工业设计人才有着巨大需求"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "移民的绝佳选择",
            icon: 'uil-chart-line',
            description: "工业设计专业是魁北克省技术移民的热门选择, 通过我们的PEQ课程, 您不仅收获一技之长, 更是为移民之路铺平了道路"
        }
    ];

    const accordionList = [
        [
            {
                no: 'One',
                expand: false,
                heading: "如何满足课程的法语要求?",
                body: "我们提供专业的法语强化课程, 帮助您快速提升法语能力, 达到课程入学标准. 我们的法语课程由经验丰富的教师授课, 通过针对性的训练, 您将在短时间内掌握工业设计专业所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径,申请条件相对宽松. 作为长期紧缺的工业设计专业人才, 我们的毕业生在PEQ移民申请中享有很大优势, 可以更快实现在加拿大工作生活的梦想"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "工业设计行业是魁北克省乃至整个加拿大地区的朝阳行业, 对工业设计专业人才的需求也在不断增加. 通过我们的PEQ课程, 您将掌握全面的工业设计技能, 成为备受企业青睐的高端技术人才"
            },
            {
                no: 'Four',
                expand: false,
                heading: "为什么选择我们的服务?",
                body: "我们是加拿大魁北克PEQ项目的领军者, 我们专业的移民顾问和团队可为您提供全程的申请指导, 助您早日获得魁北克省的永久居住权. 同时, 也为毕业生提供优质的就业机会和职业发展平台"
            }
        ]
    ];

    const classInfo = [
        {
            id: "372-311",
            title: "了解职业特点和培训过程",
            hours: "15",
            credits: "1"
        },
        {
            id: "372-035",
            title: "解读技术图纸",
            hours: "75",
            credits: "5"
        },
        {
            id: "372-324",
            title: "解决工业制图应用问题",
            hours: "60",
            credits: "4"
        },
        {
            id: "372-335",
            title: "绘制草图",
            hours: "75",
            credits: "5"
        },
        {
            id: "372-345",
            title: "使用计算机工作站",
            hours: "75",
            credits: "5"
        },
        {
            id: "372-356",
            title: "绘制机械零件详图",
            hours: "90",
            credits: "6"
        },
        {
            id: "372-364",
            title: "表示连接件",
            hours: "60",
            credits: "4"
        },
        {
            id: "372-373",
            title: "表示机构的布置和运动",
            hours: "45",
            credits: "3"
        },
        {
            id: "372-386",
            title: "解读材料和制造工艺的技术信息",
            hours: "90",
            credits: "6"
        },
        {
            id: "372-395",
            title: "绘制装配图",
            hours: "75",
            credits: "5"
        },
        {
            id: "372-407",
            title: "使用计算机辅助设计软件的高级功能",
            hours: "105",
            credits: "7"
        },
        {
            id: "372-054",
            title: "测量与尺寸解析",
            hours: "60",
            credits: "4"
        },
        {
            id: "372-414",
            title: "确定尺寸公差",
            hours: "60",
            credits: "4"
        },
        {
            id: "372-421",
            title: "修改图纸",
            hours: "15",
            credits: "1"
        },
        {
            id: "372-153",
            title: "适应新的组织工作特点",
            hours: "45",
            credits: "3"
        },
        {
            id: "372-507",
            title: "绘制机器底座",
            hours: "105",
            credits: "7"
        },
        {
            id: "372-495",
            title: "绘制机械系统图",
            hours: "75",
            credits: "5"
        },
        {
            id: "372-482",
            title: "寻找或创造就业机会",
            hours: "30",
            credits: "2"
        },
        {
            id: "372-476",
            title: "绘制工业管路和电路图",
            hours: "90",
            credits: "6"
        },
        {
            id: "372-466",
            title: "绘制机构详图",
            hours: "90",
            credits: "6"
        },
        {
            id: "372-456",
            title: "创建三维模型",
            hours: "90",
            credits: "6"
        },
        {
            id: "372-446",
            title: "绘制展开图",
            hours: "90",
            credits: "6"
        },
        {
            id: "372-517",
            title: "设计简单的技术对象",
            hours: "105",
            credits: "7"
        },
        {
            id: "372-436",
            title: "表示传动件",
            hours: "90",
            credits: "6"
        },
        {
            id: "372-526",
            title: "进入劳动力市场",
            hours: "90",
            credits: "6"
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
                                <img className="w-auto" src="/img/PEQ/id.jpg" alt="Photo"/>
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

export default IndustrialDesignPage;
