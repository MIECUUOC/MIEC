// noinspection DuplicatedCode
import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import Accordion from "../../../../../src/components/reuseable/accordion";
import {Fragment} from "react";
import IconBox from "../../../../../src/components/reuseable/IconBox";
import CountUp from "react-countup";
import ContactForms from "../../../../../src/components/otherBlocks/ContactForms";

const ArchitecturalDesignPage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Architectural-Design - 建筑设计专业"

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
            amount: 5250,
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
            amount: 25,
            color: 'btn-soft-aqua',
            title: "课程数量",
            icon: 'uil-trophy'
        }
    ];

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "建筑设计专业",
        title3: "我们的\"建筑设计专业培训\"项目, 助您实现设计师梦想! 通过1800小时(含120小时模拟企业实习)的深入学习, 您将掌握建筑设计的专业技能, 成为备受行业青睐的优秀设计师. 我们拥有先进的教学设施、经验丰富的师资团队, 为您提供全方位的学习支持. 让我们一起探索建筑设计的奥秘, 创造属于您的辉煌人生!",
        title4: "设计梦想, 从这里启航",
        title5: "量身定制, 成就卓越设计师",
        title6: "开启成功之门, 缔造非凡设计人生",
        title7: "专业培训, 助您事业腾飞",
        title8: "加入建筑设计专业大家庭",
        title9: "精心打造课程, 成就设计专家",
        title10: "我们的课程体系全面涵盖建筑设计的各个领域, 从手绘草图到计算机辅助设计, 从建筑制图到三维建模, 从住宅设计到商业空间规划. 通过系统的学习和实践, 您将掌握行业前沿技术, 成为集艺术创意和技术능力于一身的建筑设计专家. 让我们共同开启通往成功的大门!",
        title11: "专业技能, 开启璀璨设计人生",
        title12: "招生进行, 成为设计精英",
        title13: "问题专区",
        title14: "如有任何疑问, 欢迎随时联系我们"
    }

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: '官方认证, 行业信赖',
            body: "我们的技术学院是魁北克省教育部认证的职业教育机构, \"建筑设计专业培训\"项目获得官方认可. 通过完成全部学习, 学生将获得魁北克省颁发的职业教育文凭(DEP), 这将是您设计职业生涯的金字招牌, 为未来发展奠定坚实基础"
        },
        {
            no: 'Two',
            expand: false,
            heading: "模拟实习, 就业无忧",
            body: "我们的\"建筑设计专业培训\"项目特别设置了120小时的模拟企业实习环节. 通过在真实的实战练习, 学生将全面提升建筑设计、图纸绘制、三维建模等专业技能. 这一宝贵的实习经历, 将让您在未来的设计职业生涯中拥有更强的竞争力"
        },
        {
            no: 'Three',
            expand: false,
            heading: '就业广泛, 前景无限',
            body: '建筑设计专业人才在魁北克省乃至加拿大有着广阔的就业前景. 工程公司、建筑设计事务所、开发商、政府机构等都对建筑设计专业人才有着巨大需求. 凭借我们的专业培训和官方认证, 您将在求职时拥有巨大优势, 让我们开启成功的职业生涯!'
        }
    ];

    const serviceList = [
        {
            id: 1,
            linkUrl: '#',
            title: "全方位技能培养",
            icon: 'uil-book-open',
            description: "我们的课程涵盖了建筑设计的方方面面, 从手绘草图到计算机辅助设计, 从建筑制图到三维建模, 让您成为全能型设计专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "120小时模拟实习",
            icon: 'uil-shield-exclamation',
            description: "我们提供120小时的模拟企业实习, 让您在真实项目中锻炼专业技能, 积累实战经验, 为未来的设计职业生涯奠定坚实基础"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "就业前景广阔",
            icon: 'uil-laptop-cloud',
            description: "建筑设计专业在加拿大有着广阔的就业前景. 工程公司、设计事务所、开发商、政府机构等都对建筑设计人才有着巨大需求"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "移民的绝佳选择",
            icon: 'uil-chart-line',
            description: "建筑设计专业是魁北克省技术移民的热门选择, 通过我们的PEQ课程, 您不仅收获一技之长, 更是为移民之路铺平了道路"
        }
    ];

    const accordionList = [
        [
            {
                no: 'One',
                expand: false,
                heading: "如何满足课程的法语要求?",
                body: "我们提供专业的法语强化课程, 帮助您快速提升法语能力, 达到课程入学标准. 我们的法语课程由经验丰富的教师授课, 通过针对性的训练, 您将在短时间内掌握建筑设计专业所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径,申请条件相对宽松. 作为长期紧缺的建筑设计专业人才, 我们的毕业生在PEQ移民申请中享有很大优势, 可以更快实现在加拿大工作生活的梦想"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "建筑设计行业是魁北克省乃至整个加拿大地区的朝阳行业, 对建筑设计专业人才的需求也在不断增加. 通过我们的PEQ课程, 您将掌握全面的建筑设计技能, 成为备受企业青睐的高端技术人才"
            },
            {
                no: 'Four',
                expand: false,
                heading: "为什么选择我们的服务?",
                body: "我们是加拿大魁北克PEQ项目的领军者, 我们专业的移民顾问和团队将可为您提供全程申请指导, 助您早日获得魁北克省的永久居住权. 同时, 也为毕业生提供优质的就业机会和职业发展平台"
            }
        ]
    ];

    const classInfo = [
        {
            id: "325-011",
            title: "了解职业特点和培训过程",
            hours: "15",
            credits: "1"
        },
        {
            id: "325-262",
            title: "学习使用计算机",
            hours: "30",
            credits: "2"
        },
        {
            id: "325-273",
            title: "绘制建筑元素",
            hours: "45",
            credits: "3"
        },
        {
            id: "325-287",
            title: "使用绘图软件的基本功能",
            hours: "105",
            credits: "7"
        },
        {
            id: "325-297",
            title: "绘制建筑体量图",
            hours: "105",
            credits: "7"
        },
        {
            id: "325-356",
            title: "绘制单户住宅建筑图",
            hours: "120",
            credits: "7"
        },
        {
            id: "325-364",
            title: "了解施工现场的健康与安全规则",
            hours: "30",
            credits: "2"
        },
        {
            id: "255-002",
            title: "使用绘图软件的高级功能",
            hours: "75",
            credits: "5"
        },
        {
            id: "325-324",
            title: "绘制混凝土结构图",
            hours: "60",
            credits: "4"
        },
        {
            id: "325-332",
            title: "进行现场测量",
            hours: "30",
            credits: "2"
        },
        {
            id: "325-346",
            title: "查找管道系统相关信息",
            hours: "90",
            credits: "6"
        },
        {
            id: "325-356",
            title: "绘制管道系统图",
            hours: "90",
            credits: "6"
        },
        {
            id: "325-362",
            title: "绘制墙体剖面图和技术细节图",
            hours: "30",
            credits: "2"
        },
        {
            id: "325-372",
            title: "确定材料和设备的数量",
            hours: "30",
            credits: "2"
        },
        {
            id: "325-384",
            title: "绘制钢结构总图",
            hours: "60",
            credits: "4"
        },
        {
            id: "325-398",
            title: "绘制钢结构制造图",
            hours: "120",
            credits: "8"
        },
        {
            id: "325-408",
            title: "绘制多户住宅建筑图",
            hours: "120",
            credits: "8"
        },
        {
            id: "325-413",
            title: "查找电气系统相关信息",
            hours: "45",
            credits: "3"
        },
        {
            id: "325-423",
            title: "绘制电气系统图",
            hours: "45",
            credits: "3"
        },
        {
            id: "325-437",
            title: "绘制建筑插图",
            hours: "105",
            credits: "7"
        },
        {
            id: "325-211",
            title: "使用求职技巧",
            hours: "15",
            credits: "1"
        },
        {
            id: "325-446",
            title: "查找通风系统相关信息",
            hours: "90",
            credits: "6"
        },
        {
            id: "325-457",
            title: "绘制通风系统图",
            hours: "105",
            credits: "7"
        },
        {
            id: "325-468",
            title: "绘制商业建筑图",
            hours: "120",
            credits: "8"
        },
        {
            id: "325-258",
            title: "进入劳动力市场",
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
                                <img className="w-auto" src="/img/PEQ/ad1.jpg" alt="Photo"/>
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


                        {/*{countList.map((item, index) => (*/}
                        {/*    <div key={index}>*/}
                        {/*        <p key={index}>{item.id}</p>*/}
                        {/*        <h2>{item.title}</h2>*/}
                        {/*        <h3>{item.amount}</h3>*/}
                        {/*        <h3>{item.icon}</h3>*/}
                        {/*        <h3>{item.color}</h3>*/}
                        {/*    </div>*/}
                        {/*))}*/}



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

export default ArchitecturalDesignPage;
