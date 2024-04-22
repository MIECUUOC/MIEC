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

const WeldingFittingPage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Welding-Fitting - 焊接与装配专业"

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "焊接与装配专业",
        title3: "掌握焊接与装配技能, 开启璀璨人生. 我们的\"焊接与装配专业培训\"项目助您实现梦想! 在这里, 通过1800小时的密集学习, 您将掌握多项专业技能, 成为备受行业青睐的优秀焊接工和装配工. 我们拥有一流的教学设施、经验丰富的师资团队、真实的实战环境, 带您探索焊接与装配的奥秘. 我们的资格证书将为您打开通往成功的大门. 无论您是行业新秀还是转换职业, 机遇就在眼前, 改变从这里开始!",
        title4: "铸就辉煌人生, 从这里启航",
        title5: "定制培训, 实现职业飞跃",
        title6: "开启成功之门, 缔造非凡人生",
        title7: "专业培训, 助您职业腾飞",
        title8: "加入焊接专业大家庭",
        title9: "精心打造专业, 成就技术专家",
        title10: "我们的课程体系涵盖了焊接与装配行业的方方面面, 从基础的金属学概念到先进的焊接工艺, 从常规的装配技能到复杂的修改与修理. 通过全面的学习, 您将成为一名全能型的焊接与装配专家, 在职场中拥有无限的选择和机会",
        title11: "专业技能, 开启璀璨未来",
        title12: "加入我们,成为全能专家",
        title13: "问题专区",
        title14: "如有任何问题, 请联系我们"
    }

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: '魁北克省教育部认证机构',
            body: "我们的技术学院是魁北克省教育部认证的职业教育机构, 我们的焊接与装配专业培训项目获得了官方认可. 通过学习, 学生将获得魁北克省承认的专业文凭, 为未来的职业生涯奠定坚实基础"
        },
        {
            no: 'Two',
            expand: false,
            heading: "业内口碑领先的培训课程",
            body: "我们的技术学院开设的1800小时\"焊接与装配专业培训\"课程在业内享有极高声誉. 我们全面的课程设置, 涵盖了焊接与装配的各项核心技能, 让学生成为真正的全能型人才, 在职场中脱颖而出"
        },
        {
            no: 'Three',
            expand: false,
            heading: '毕业即就业, 前景无限宽广',
            body: '我们的技术学院与魁北克省内众多知名制造业企业建立了长期合作关系. 凭借我们的专业培训和官方认证, 毕业生在求职时将具有巨大优势. 无论是新人入行还是转换职业, 都是您通往成功的金牌之选!'
        }
    ];

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
            amount: 5195,
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
            amount: 29,
            color: 'btn-soft-aqua',
            title: "课程数量",
            icon: 'uil-trophy'
        }
    ];

    const serviceList = [
        {
            id: 1,
            linkUrl: '#',
            title: "全方位技能培养",
            icon: 'uil-book-open',
            description: "我们的课程涵盖了从基础金属学到先进焊接工艺的方方面面. 无论是装配技巧, 还是修改与修理, 您都将成为真正的专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "真实项目实战",
            icon: 'uil-shield-exclamation',
            description: "我们拥有先进的教学设施和设备, 为您提供真实项目实战环境. 您将亲身参与各种焊接与装配任务, 积累宝贵的实践经验"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "就业前景广阔",
            icon: 'uil-laptop-cloud',
            description: "焊接与装配技能让您可以在建筑、制造、航空航天等多个行业择业. 无论创业还是就职企业, 您都将拥有广阔的发展舞台"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "移民的绝佳选择",
            icon: 'uil-chart-line',
            description: "焊接与装配专业是魁北克省技术移民的热门选择. 您不仅收获一技之长, 更为移民之路铺平了道路, 实现人生的美好愿景"
        }
    ];

    const accordionList = [
        [
            {
                no: 'One',
                expand: false,
                heading: "如何满足课程的法语要求?",
                body: "我们提供专业的法语前置课程, 帮助您快速提升法语能力, 达到课程要求的入学标准. 我们的法语课程由经验丰富的教师授课, 通过有针对性的训练, 您将在短时间内掌握所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径, 申请条件相对宽松. 作为长期紧缺的技术型人才, 焊接与装配专业的毕业生在PEQ移民申请中享有很大优势, 实现在加拿大工作生活的梦想"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "焊接与装配行业是魁北克省乃至整个加拿大的紧缺行业, 对焊接工和装配工的需求也在不断增加. 通过我们的PEQ课程, 您将掌握全面的焊接与装配技能, 成为备受企业青睐的高端技术人才"
            },
            {
                no: 'Four',
                expand: false,
                heading: "为什么选择我们的服务?",
                body: "我们是加拿大魁北克PEQ项目的领军者, 我们的专业移民顾问和团队将为您提供全程申请指导, 助您早日获得魁北克省的永久居住权. 同时, 也为毕业生提供优质的就业机会和发展平台"
            }
        ]
    ];

    const classInfo = [
        {
            id: "801-712",
            title: "确定是否适合该行业和培训过程",
            hours: "30",
            credits: "2"
        },
        {
            id: "801-722",
            title: "了解职业健康和安全规则",
            hours: "30",
            credits: "2"
        },
        {
            id: "801-737",
            title: "绘制草图和图纸",
            hours: "105",
            credits: "7"
        },
        {
            id: "801-743",
            title: "应用金属学概念",
            hours: "45",
            credits: "3"
        },
        {
            id: "801-757",
            title: "解读图纸和规格",
            hours: "105",
            credits: "7"
        },
        {
            id: "801-762",
            title: "切割黑色和有色金属",
            hours: "30",
            credits: "2"
        },
        {
            id: "801-776",
            title: "使用切割和成型设备",
            hours: "90",
            credits: "6"
        },
        {
            id: "801-782",
            title: "准备零件",
            hours: "30",
            credits: "2"
        },
        {
            id: "801-792",
            title: "应用SMAW焊接工艺",
            hours: "30",
            credits: "2"
        },
        {
            id: "801-807",
            title: "使用SMAW焊接工艺焊接钢材",
            hours: "105",
            credits: "7"
        },
        {
            id: "801-813",
            title: "应用GTAW焊接工艺",
            hours: "45",
            credits: "3"
        },
        {
            id: "801-825",
            title: "使用GTAW焊接工艺焊接钢材",
            hours: "75",
            credits: "5"
        },
        {
            id: "801-834",
            title: "使用GTAW焊接工艺焊接铝材",
            hours: "60",
            credits: "4"
        },
        {
            id: "801-844",
            title: "生产基本装配件",
            hours: "60",
            credits: "4"
        },
        {
            id: "801-852",
            title: "应用GMAW焊接工艺",
            hours: "30",
            credits: "2"
        },
        {
            id: "801-868",
            title: "使用GMAW焊接工艺焊接钢材",
            hours: "120",
            credits: "8"
        },
        {
            id: "801-874",
            title: "使用GMAW焊接工艺焊接铝材",
            hours: "60",
            credits: "4"
        },
        {
            id: "801-884",
            title: "生产简单装配件",
            hours: "60",
            credits: "4"
        },
        {
            id: "801-891",
            title: "应用FCAW焊接工艺",
            hours: "15",
            credits: "1"
        },
        {
            id: "801-908",
            title: "使用FCAW焊接工艺焊接钢材",
            hours: "120",
            credits: "8"
        },
        {
            id: "801-912",
            title: "应用SAW、RW和PAW焊接工艺",
            hours: "30",
            credits: "2"
        },
        {
            id: "801-927",
            title: "解读复杂装配图纸和规格",
            hours: "105",
            credits: "7"
        },
        {
            id: "801-935",
            title: "生产中等复杂度的装配件",
            hours: "75",
            credits: "5"
        },
        {
            id: "801-941",
            title: "在工作场所进行沟通",
            hours: "15",
            credits: "1"
        },
        {
            id: "801-958",
            title: "生产复杂装配件",
            hours: "120",
            credits: "8"
        },
        {
            id: "801-963",
            title: "修改装配件",
            hours: "45",
            credits: "3"
        },
        {
            id: "801-974",
            title: "修理装配件",
            hours: "60",
            credits: "4"
        },
        {
            id: "801-981",
            title: "使用求职技巧",
            hours: "15",
            credits: "1"
        },
        {
            id: "801-996",
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
                                <img className="w-auto" src="/img/PEQ/wf1.jpg" alt="Photo"/>
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

export default WeldingFittingPage;
