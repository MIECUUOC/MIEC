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

const WesternCuisinePastryPage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Western-Cuisine-Pastry - 西餐厨师和糕点专业"

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "西餐厨师和糕点专业",
        title3: "掌握西餐烹饪和糕点制作技能,开启精彩人生. 我们的\"西餐厨师和糕点专业培训\"项目助您实现梦想! 在这里, 通过1920小时的密集学习将让您掌握多项专业技能, 使您成为备受行业认可的优秀厨师. 我们有最先进的教学厨房、最专业的师资团队、最真实的实战环境, 带您探索西餐和糕点的奥秘, 我们的资格证书将为您打开通往成功的大门. 无论您是行业新人还是转换职业, 机会就在眼前, 改变从这里开始",
        title4: "成就金牌人生, 从这里启程",
        title5: "量身定制, 实现职业蜕变",
        title6: "开启成功之门, 铸就非凡人生",
        title7: "专业培训, 支持职业发展",
        title8: "加入厨师专业大家庭",
        title9: "精心设计课程, 成为全面的厨师大师",
        title10: "我们的课程体系涵盖了西餐和糕点行业的方方面面, 从基础的烹饪原理到创新的糕点设计, 从经典的菜肴制作到现代的餐厅管理. 通过全面的学习, 您将成为一名全能型的西餐厨师和糕点师, 在职场中拥有更多的选择和机会",
        title11: "专业西餐技能, 开启璀璨未来",
        title12: "加入我们的课程, 成为全能厨师",
        title13: "问题专区",
        title14: "如有任何问题, 请联系我们"
    }

    const serviceList = [
        {
            id: 1,
            linkUrl: '#',
            title: "全方位技能培养",
            icon: 'uil-book-open',
            description: "我们的课程设置全面, 涵盖了从经典西餐到创新糕点的方方面面. 无论是烹饪技巧, 还是美学设计, 您都将成为真正的专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "真实餐厅环境",
            icon: 'uil-shield-exclamation',
            description: "我们拥有先进的教学厨房和设备, 为您提供最真实的餐厅环境. 在这里, 您将亲身实践, 积累宝贵的操作经验"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "就业前景广阔",
            icon: 'uil-laptop-cloud',
            description: "西餐厨师和糕点师技能让您可以在高级餐厅、酒店、度假村等多个领域择业. 无论是创业还是就职, 您都将拥有广阔的舞台"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "移民的绝佳选择",
            icon: 'uil-chart-line',
            description: "西餐厨师和糕点专业是魁北克省PEQ技术移民的热门选择. 完成学业, 您不仅收获了一技之长, 更为移民之路铺平了道路"
        }
    ];

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: '魁北克省教育部认证机构',
            body: "我们的学院是魁北克省教育部认证的职业教育机构, 我们的西餐厨师和糕点专业培训获得了官方认可. 通过学习, 学生将获得魁北克省承认的专业文凭, 为未来的职业生涯奠定坚实基础"
        },
        {
            no: 'Two',
            expand: false,
            heading: "业内口碑领先的培训课程",
            body: "我们的学院开设的1920小时\"西餐厨师和糕点专业培训\"课程在业内享有极高声誉. 我们全面的课程设置, 涵盖了西餐烹饪和糕点制作的各项核心技能, 让学生在职场中脱颖而出"
        },
        {
            no: 'Three',
            expand: false,
            heading: '毕业即就业,前景无限广阔',
            body: '我们的学院与魁北克省内众多知名餐厅、酒店建立了合作关系. 凭借我们的专业培训和官方认证, 您在求职时将具有巨大优势. 无论是新人入行还是转换职业, 都是您通往成功的金牌之选!'
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
            amount: 5311,
            color: 'btn-soft-purple',
            title: "课程编号",
            icon: 'uil-presentation-check'
        },
        {
            id: 2,
            amount: 1920,
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
            amount: 33,
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
                body: "我们提供专业的法语前置课程, 帮助您快速提升法语能力, 达到课程要求的入学标准. 我们的法语课程由经验丰富的教师授课, 通过有针对性的训练, 您将在短时间内掌握所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径, 申请条件相对宽松. 作为长期紧缺的技术型人才, 西餐厨师和糕点专业的毕业生在PEQ移民申请中享有很大优势, 而且也容易就业"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "餐饮行业是魁北克省乃至整个加拿大的支柱产业, 西餐厨师和糕点师的需求也在不断增加. 通过我们的PEQ课程, 您将掌握全面的西餐烹饪和糕点制作技能, 成为备受企业青睐的高端技术人才"
            },
            {
                no: 'Four',
                expand: false,
                heading: "为什么选择我们的服务?",
                body: "我们是加拿大魁北克PEQ项目的领军者, 我们的专业移民顾问和团队将助您早日获得魁北克省的永久居留权. 同时, 我们与当地餐厅、酒店有着密切的合作关系, 为可以为您提供优质的就业机会"
            }
        ]
    ];

    const iconBoxClassNames = "icon btn btn-circle btn-lg btn-primary pe-none mb-5"

    const classInfo = [
        {
            id: 1,
            title: "了解行业和培训过程",
            hours: "30",
            credits: "2"
        },
        {
            id: 2,
            title: "采取食品卫生和安全预防措施",
            hours: "30",
            credits: "2"
        },
        {
            id: 3,
            title: "采取健康和安全预防措施",
            hours: "30",
            credits: "2"
        },
        {
            id: 4,
            title: "评估食物的感官品质",
            hours: "45",
            credits: "3"
        },
        {
            id: 5,
            title: "将烹饪技术与食材相结合",
            hours: "30",
            credits: "2"
        },
        {
            id: 6,
            title: "进行与厨房组织相关的活动",
            hours: "30",
            credits: "2"
        },
        {
            id: 7,
            title: "准备水果和蔬菜",
            hours: "60",
            credits: "4"
        },
        {
            id: 8,
            title: "制作基本的准备工作",
            hours: "90",
            credits: "6"
        },
        {
            id: 9,
            title: "建立专业关系",
            hours: "30",
            credits: "2"
        },
        {
            id: 10,
            title: "准备汤类",
            hours: "45",
            credits: "3"
        },
        {
            id: 11,
            title: "制作基本面食",
            hours: "60",
            credits: "4"
        },
        {
            id: 12,
            title: "准备肉类、家禽和野味",
            hours: "105",
            credits: "7"
        },
        {
            id: 13,
            title: "准备鱼类、软体动物和甲壳类动物",
            hours: "90",
            credits: "6"
        },
        {
            id: 14,
            title: "准备开胃菜和头盘",
            hours: "60",
            credits: "4"
        },
        {
            id: 15,
            title: "准备甜点",
            hours: "105",
            credits: "7"
        },
        {
            id: 16,
            title: "设计均衡的菜单",
            hours: "60",
            credits: "4"
        },
        {
            id: 17,
            title: "提供早餐服务",
            hours: "60",
            credits: "4"
        },
        {
            id: 18,
            title: "制作烹饪演示",
            hours: "45",
            credits: "3"
        },
        {
            id: 19,
            title: "提供当日菜单服务",
            hours: "60",
            credits: "4"
        },
        {
            id: 20,
            title: "提供生产菜单服务",
            hours: "45",
            credits: "3"
        },
        {
            id: 21,
            title: "确保宴会和餐饮服务的生产",
            hours: "75",
            credits: "5"
        },
        {
            id: 22,
            title: "提供自助餐服务",
            hours: "45",
            credits: "3"
        },
        {
            id: 23,
            title: "提供套餐和单点菜单服务",
            hours: "135",
            credits: "9"
        },
        {
            id: 24,
            title: "融入工作环境",
            hours: "105",
            credits: "7"
        },
        {
            id: 25,
            title: "制作配料",
            hours: "60",
            credits: "4"
        },
        {
            id: 26,
            title: "制作基本面食产品",
            hours: "75",
            credits: "5"
        },
        {
            id: 27,
            title: "制作饼干和支撑物",
            hours: "30",
            credits: "2"
        },
        {
            id: 28,
            title: "制作巧克力产品",
            hours: "30",
            credits: "2"
        },
        {
            id: 29,
            title: "制作经典的甜点",
            hours: "60",
            credits: "4"
        },
        {
            id: 30,
            title: "制作装饰品",
            hours: "30",
            credits: "2"
        },
        {
            id: 31,
            title: "制作当代甜点",
            hours: "75",
            credits: "5"
        },
        {
            id: 32,
            title: "制作冰淇淋产品",
            hours: "30",
            credits: "2"
        },
        {
            id: 33,
            title: "创造盘装甜点",
            hours: "60",
            credits: "4"
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
                                <img className="w-auto" src="/img/PEQ/cc1.jpg" alt="Photo"/>
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

export default WesternCuisinePastryPage;
