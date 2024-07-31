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

const PlumbingHeatingPage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Secretarial - 文秘专业"

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
            amount: 5857,
            color: 'btn-soft-purple',
            title: "课程编号",
            icon: 'uil-presentation-check'
        },
        {
            id: 2,
            amount: 1935,
            color: 'btn-soft-red',
            title: "课程时长",
            icon: 'uil-users-alt'
        },
        {
            id: 3,
            amount: 129,
            color: 'btn-soft-yellow',
            title: "项目学分",
            icon: 'uil-user-check'
        },
        {
            id: 4,
            amount: 34,
            color: 'btn-soft-aqua',
            title: "课程数量",
            icon: 'uil-trophy'
        }
    ];

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "文秘专业",
        title3: "我们的\"文秘专业培训\"项目, 不仅助您成为职场精英,更是移民加拿大的绝佳途径! 通过1935小时(含文秘1485小时及医务或法律秘书450小时)的深入学习, 您将掌握文秘工作的专业技能, 成为备受企业青睐的优秀文员. 更重要的是, 完成学业后, 您有资格获得长达三年的工作签证, 为未来定居加拿大铺平道路. 让我们一起探索文秘工作的奥秘, 创造属于您的辉煌人生!",
        title4: "文秘梦想, 从这里启航",
        title5: "量身定制, 成就卓越文秘",
        title6: "开启成功, 缔造非凡人生",
        title7: "专业培训, 助您事业腾飞",
        title8: "加入文秘专业大家庭",
        title9: "精心打造, 成就办公专家",
        title10: "我们的课程体系全面涵盖文秘工作的各个领域, 从文本录入到文档编辑, 从数据处理到演示文稿设计, 从客户服务到会议组织. 通过系统的学习和实践, 您将掌握行业前沿技术, 成为集组织能力和沟通技巧于一身的办公专家. 让我们共同开启通往成功的大门!",
        title11: "专业技能, 开启璀璨人生",
        title12: "招生进行, 成为文秘精英",
        title13: "问题专区",
        title14: "如有疑问, 欢迎随时联系"
    }

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: '官方认证, 行业信赖',
            body: "我们的技术学院是魁北克省教育部认证的职业教育机构, \"文秘专业培训\"项目获得官方认可. 通过完成全部学习, 学生将获得魁北克省颁发的职业教育文凭(DEP), 这将是您职业生涯的金字招牌, 为未来发展奠定坚实基础"
        },
        {
            no: 'Two',
            expand: false,
            heading: "医法选修, 就业无忧",
            body: "我们的\"文秘专业培训\"项目在普通文秘课程基础上, 还提供医务秘书和法律秘书两个方向的进阶学习. 通过额外的450小时专业学习, 您可以根据自己的兴趣和职业规划, 选择医务或法律方向深造,成为更加专业化的文秘人才"
        },
        {
            no: 'Three',
            expand: false,
            heading: '完成学业, 获得工签',
            body: '文秘专业属于魁北克省劳动力短缺职业, 这意味着完成文凭的毕业生, 在找到相关工作后, 可以申请为期最长三年的"毕业后工作许可", 为未来移民加拿大提供了便利条件. 这无疑让文秘专业的吸引力大大提升,也是明智的选择'
        }
    ];

    const serviceList = [
        {
            id: 1,
            linkUrl: '#',
            title: "全方位技能培养",
            icon: 'uil-book-open',
            description: "我们的课程涵盖了文秘工作的方方面面, 从文本录入到文档编辑, 从数据处理到演示文稿设计, 让您成为全能型办公专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "医务法律双选修",
            icon: 'uil-shield-exclamation',
            description: "我们提供医务秘书和法律秘书两个专业方向的选修课程, 让您根据自己的兴趣和职业规划, 成为更专业化的文秘人才"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "毕业可获得工签",
            icon: 'uil-award',
            description: "完成文秘专业学习, 获得DEP文凭后, 毕业生可申请三年期\"毕业后工作许可\", 为未来移民加拿大铺平道路"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "移民的绝佳选择",
            icon: 'uil-plane-departure',
            description: "文秘专业是魁北克省技术移民的热门选择, 通过我们的PEQ课程, 您不仅收获一技之长, 更为移民之路铺平了道路"
        }
    ];

    const accordionList = [
        [
            {
                no: 'One',
                expand: false,
                heading: "如何满足课程的法语要求?",
                body: "我们提供专业的法语强化课程, 帮助您快速提升法语能力, 达到课程入学标准. 我们的法语课程由经验丰富的教师授课, 通过针对性的训练, 您将在短时间内掌握专业所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径,申请条件相对宽松. 作为长期紧缺的专业人才, 我们的毕业生在PEQ移民申请中享有很大优势, 可以更快实现在加拿大工作生活的梦想"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "文秘行业是魁北克省乃至整个加拿大地区的稳定行业, 对文秘专业人才的需求也在不断增加. 通过我们的PEQ课程, 您将掌握全面的文秘技能, 成为备受企业青睐的高素质人才"
            },
            {
                no: 'Four',
                expand: false,
                heading: "为什么选择我们的服务?",
                body: "我们是加拿大魁北克PEQ项目的领军者, 我们移民顾问和团队将可为您提供全程申请指导, 助您早日获得魁北克省的永久居住权. 同时, 也为毕业生提供优质的机会和发展平台"
            }
        ]
    ];

    const classInfo = [
        {
            id: "960-501",
            title: "确定职业和培训过程的适合性",
            hours: "15",
            credits: "1"
        },
        {
            id: "960-515",
            title: "校对英文文本的拼写和语法",
            hours: "75",
            credits: "5"
        },
        {
            id: "960-526",
            title: "执行文字处理任务",
            hours: "90",
            credits: "6"
        },
        {
            id: "960-534",
            title: "确保书面英语的质量",
            hours: "60",
            credits: "4"
        },
        {
            id: "960-544",
            title: "提供客户服务",
            hours: "60",
            credits: "4"
        },
        {
            id: "960-554",
            title: "执行文档管理",
            hours: "60",
            credits: "4"
        },
        {
            id: "960-562",
            title: "制作电子表格",
            hours: "30",
            credits: "2"
        },
        {
            id: "960-572",
            title: "设计演示文稿",
            hours: "30",
            credits: "2"
        },
        {
            id: "960-584",
            title: "用英语撰写商务文本",
            hours: "60",
            credits: "4"
        },
        {
            id: "960-596",
            title: "执行会计操作",
            hours: "90",
            credits: "6"
        },
        {
            id: "960-605",
            title: "制作商务通信",
            hours: "75",
            credits: "5"
        },
        {
            id: "960-613",
            title: "创建数据库",
            hours: "45",
            credits: "3"
        },
        {
            id: "960-623",
            title: "处理现金",
            hours: "45",
            credits: "3"
        },
        {
            id: "960-635",
            title: "翻译文本",
            hours: "75",
            credits: "5"
        },
        {
            id: "960-644",
            title: "制作表格和图表",
            hours: "60",
            credits: "4"
        },
        {
            id: "960-656",
            title: "准备文件的视觉设计",
            hours: "90",
            credits: "6"
        },
        {
            id: "960-666",
            title: "用法语撰写和格式化商务文本",
            hours: "90",
            credits: "6"
        },
        {
            id: "960-672",
            title: "更新在数字媒体上发布的信息",
            hours: "30",
            credits: "2"
        },
        {
            id: "960-683",
            title: "在商务环境中用法语交流",
            hours: "45",
            credits: "3"
        },
        {
            id: "960-695",
            title: "跟进商务通信",
            hours: "75",
            credits: "5"
        },
        {
            id: "960-704",
            title: "执行与会议和活动组织相关的活动",
            hours: "60",
            credits: "4"
        },
        {
            id: "960-714",
            title: "制作报告",
            hours: "60",
            credits: "4"
        },
        {
            id: "960-722",
            title: "提供技术支持",
            hours: "30",
            credits: "2"
        },
        {
            id: "960-733",
            title: "协调多项任务",
            hours: "45",
            credits: "3"
        },
        {
            id: "960-746",
            title: "进入劳动力市场",
            hours: "90",
            credits: "6"
        },
        {
            id: "943-355",
            title: "为医疗咨询提供行政支持",
            hours: "75",
            credits: "5"
        },
        {
            id: "949-301",
            title: "确定职业和培训过程的适合性",
            hours: "15",
            credits: "1"
        },
        {
            id: "949-313",
            title: "解释医学术语",
            hours: "45",
            credits: "3"
        },
        {
            id: "949-324",
            title: "建立医学术语与医学专业之间的联系",
            hours: "60",
            credits: "4"
        },
        {
            id: "949-333",
            title: "修改由自动系统转录的报告",
            hours: "45",
            credits: "3"
        },
        {
            id: "949-343",
            title: "转录医疗咨询报告",
            hours: "45",
            credits: "3"
        },
        {
            id: "949-363",
            title: "转录医学影像报告",
            hours: "45",
            credits: "3"
        },
        {
            id: "949-373",
            title: "转录手术报告",
            hours: "45",
            credits: "3"
        },
        {
            id: "949-385",
            title: "进入劳动力市场",
            hours: "75",
            credits: "5"
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
                                <img className="w-auto" src="/img/PEQ/wm.jpg" alt="Photo"/>
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

export default PlumbingHeatingPage;
