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
// import ContactForms from "../../../../src/components/otherBlocks/ContactForms";

const Teams: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    // const {t: contactformst} = useTranslation('contactForms')

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "住宅与商业制图专业",
        title3: "掌握建筑制图技能,开启精彩人生. 我们的\"住宅与商业制图专业培训\"项目助您实现梦想! 在这里, 通过1800小时的密集学习将让您掌握多项专业技能, 让您成为备受行业认可的优秀制图师. 我们有最先进的教学设施、最专业的师资团队、最真实的实战环境, 带您探索建筑制图的奥秘, 我们的资格证书将为您打开通往成功的大门. 无论您是行业新人还是转换职业, 机会就在眼前, 改变从这里开始",
        title4: "成就金牌人生, 从这里启程",
        title5: "量身定制培训, 实现技能进阶与职业蜕变",
        title6: "开启成功之门, 铸就非凡人生",
        title7: "专业培训, 支持您的职业发展",
        title8: "加入建筑制图专业大家庭",
        title9: "精心设计建筑制图专业, 成为制图专家",
        title10: "我们的课程体系涵盖了建筑制图行业的方方面面, 从基础的绘图原理到先进的计算机辅助制图, 从常规的建筑图纸到复杂的结构设计, 25个技能模块让您成为一名全能型的制图专家, 在职场中拥有更多的选择和机会",
        title11: "专业建筑制图技能, 开启璀璨未来",
        title12: "加入我们的课程, 成为全能制图专家",
        title13: "问题专区",
        title14: "如果您有任何其他问题, 请随时联系我们"
    }

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: '魁北克省教育部认证机构',
            body: "我们的技术学院是魁北克省教育部认证的职业教育机构, 我们的住宅与商业制图专业培训项目获得了官方认可. 通过学习, 学生将获得魁北克省承认的专业文凭, 为未来的职业生涯奠定坚实基础"
        },
        {
            no: 'Two',
            expand: false,
            heading: "业内口碑领先的培训课程",
            body: "我们的技术学院开设的1800小时\"住宅与商业制图专业培训\"课程在业内享有极高声誉. 我们全面的课程设置, 涵盖了建筑制图的25项核心技能, 让学生成为真正的全能型人才, 在职场中傲视同侪"
        },
        {
            no: 'Three',
            expand: false,
            heading: '毕业即就业, 前景无限广阔',
            body: '我们的技术学院与魁北克省内众多知名建筑公司和设计院建立了长期合作关系. 凭借我们的专业培训和官方认证, 毕业生在求职时将具有巨大优势. 无论是新人入行, 还是转换职业, 都是您通往成功的金牌之选!'
        }
    ];

    const iconBoxClassNames = "icon btn btn-circle btn-lg btn-primary pe-none mb-5"

    const serviceList2 = [
        {
            id: 1,
            linkUrl: '#',
            title: "全面技能培养",
            icon: 'uil-book-open',
            description: "我们的课程设置全面, 涵盖从手工绘图到计算机辅助设计的方方面面. 无论是建筑设计, 还是结构分析, 您将成为真正的专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "真实实战环境",
            icon: 'uil-shield-exclamation',
            description: "我们拥有先进的教学设施和软件, 为您提供最真实的实战环境. 在这里, 您将亲身实践, 积累宝贵的设计经验"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "广阔就业方向",
            icon: 'uil-laptop-cloud',
            description: "建筑制图技能让您可以在建筑设计院、工程公司、房地产开发等多个领域择业. 无论是创业还是就职, 您将拥有广阔的舞台"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "移民绝佳选择",
            icon: 'uil-chart-line',
            description: "住宅与商业制图专业是魁北克省PEQ技术移民的热门选择. 完成学业, 您不仅收获了一技之长, 更为移民之路铺平了道路"
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
            amount: 5750,
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

    const classInfo = [
        {
            id: "755-002",
            title: "在建筑工地上应用健康和安全概念",
            hours: "30",
            credits: "2"
        },
        {
            id: "825-011",
            title: "确定他们是否适合贸易和培训过程",
            hours: "15",
            credits: "1"
        },
        {
            id: "825-211",
            title: "使用求职技巧",
            hours: "15",
            credits: "1"
        },
        {
            id: "825-258",
            title: "进入劳动力队伍",
            hours: "120",
            credits: "8"
        },
        {
            id: "825-262",
            title: "使用计算机",
            hours: "30",
            credits: "2"
        },
        {
            id: "825-273",
            title: "绘制体系结构组件",
            hours: "45",
            credits: "3"
        },
        {
            id: "825-287",
            title: "使用绘图软件应用程序的基本功能",
            hours: "105",
            credits: "7"
        },
        {
            id: "825-297",
            title: "制作建筑对象的图纸",
            hours: "105",
            credits: "7"
        },
        {
            id: "825-308",
            title: "为单户住宅制定建筑计划",
            hours: "120",
            credits: "8"
        },
        {
            id: "825-315",
            title: "使用绘图软件应用程序的高级功能",
            hours: "75",
            credits: "5"
        },
        {
            id: "825-324",
            title: "制作钢筋混凝土图纸",
            hours: "60",
            credits: "4"
        },
        {
            id: "825-332",
            title: "记录施工现场数据",
            hours: "30",
            credits: "2"
        },
        {
            id: "825-346",
            title: "与管道相关的研究信息",
            hours: "90",
            credits: "6"
        },
        {
            id: "825-356",
            title: "制定管道计划",
            hours: "90",
            credits: "6"
        },
        {
            id: "825-362",
            title: "绘制墙体截面图和详图",
            hours: "30",
            credits: "2"
        },
        {
            id: "825-372",
            title: "估算材料和设备的数量",
            hours: "30",
            credits: "2"
        },
        {
            id: "825-384",
            title: "制作钢结构装配图纸",
            hours: "60",
            credits: "4"
        },
        {
            id: "825-398",
            title: "制作钢结构施工图",
            hours: "120",
            credits: "8"
        },
        {
            id: "825-408",
            title: "为多户住宅制定建筑计划",
            hours: "120",
            credits: "8"
        },
        {
            id: "825-413",
            title: "电力相关研究信息",
            hours: "45",
            credits: "3"
        },
        {
            id: "825-423",
            title: "制定电气计划",
            hours: "45",
            credits: "3"
        },
        {
            id: "825-437",
            title: "制作演示图",
            hours: "105",
            credits: "7"
        },
        {
            id: "825-446",
            title: "通气相关研究信息",
            hours: "90",
            credits: "6"
        },
        {
            id: "825-457",
            title: "制定通风计划",
            hours: "105",
            credits: "7"
        },
        {
            id: "825-468",
            title: "制定商业建筑计划",
            hours: "120",
            credits: "8"
        }
    ];

    const accordionList = [
        [
            {
                no: 'One',
                expand: false,
                heading: "如何满足课程的法语要求?",
                body: "我们提供专业的法语前置课程, 帮助您快速提升法语能力, 达到课程要求的入学标准. 我们的法语课程由经验丰富的教师授课, 通过有针对性的训练, 您将在短时间内掌握专业汽修所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径, 申请条件相对宽松. 作为长期紧缺的技术型人才, 汽修专业的毕业生在PEQ移民申请中享有很大优势"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "汽修行业是魁北克省乃至整个加拿大的紧缺行业, 随着汽车保有量的不断增长, 对汽修技师的需求也在不断增加. 通过我们的PEQ课程, 您将掌握全面的汽修技能, 成为备受企业青睐的高端技术人才"
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
                                <img className="w-auto" src="/img/PEQ/am2.jpg" alt="Photo"/>
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

                    {/*<ContactForms t={contactformst} />*/}

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

export default Teams;
