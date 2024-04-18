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


const ResidentialCommercialDraftingPage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Residential-Commercial-Drafting - 住宅与商业制图专业"

    const contentList = {
        title1: "MIEC - PEQ",
        title2: "住宅与商业制图专业",
        title3: "建筑制图是一门融合艺术与技术的学科, 它将创意设计与严谨的工程实践相结合. 在我们的专业培训项目中, 您将接受1800小时的系统训练, 掌握手工绘图、计算机辅助设计等多项技能, 成为一名出色的制图师. 无论您是建筑行业的新手, 还是正在寻求职业转型, 我们的课程都将为您提供一个实现梦想的绝佳平台. 让我们一起踏上这个精彩的旅程, 开启人生的新篇章!",
        title4: "绘制蓝图, 构筑未来",
        title5: "个性化教学, 全面提升制图技能",
        title6: "扬帆起航, 驶向成功彼岸",
        title7: "专注教学, 助力职业腾飞",
        title8: "融入制图精英团队",
        title9: "缜密课程设计, 培养制图英才",
        title10: "我们的课程体系由业内资深专家精心设计, 涵盖了建筑制图的各个领域. 从手工绘图的基本功到计算机辅助设计的进阶技巧, 从常规建筑图纸的绘制到复杂结构的设计表现, 25个模块环环相扣, 循序渐进. 通过系统学习, 您将全面掌握制图技能, 成为一名出类拔萃的建筑制图师",
        title11: "建筑制图专业技能, 开创美好人生",
        title12: "立即报名, 成就非凡制图人才",
        title13: "常见问题解答",
        title14: "如有任何疑问, 欢迎随时垂询"
    }

    const accordions = [
        {
            no: 'One',
            expand: false,
            heading: "官方认证, 扬帆起航",
            body: "我们旗下院校是魁北克省教育部认可的职业教育机构, 住宅与商业制图专业培训项目经过严格评估, 获得官方认证. 完成学业后, 您将获得魁北克省颁发的专业文凭, 这将是您职业生涯的一张金名片, 为您在建筑行业的发展奠定坚实的基础"
        },
        {
            no: 'Two',
            expand: false,
            heading: "优质口碑, 行业翘楚",
            body: "我们的学院开设的1800小时住宅与商业制图专业培训课程, 在业内享有盛誉. 课程内容丰富全面, 涵盖建筑制图的25项核心技能, 理论与实践并重, 案例与项目结合, 确保学生掌握扎实的专业知识和过硬的操作技能, 成为建筑制图领域的佼佼者"
        },
        {
            no: 'Three',
            expand: false,
            heading: "企业青睐, 就业无忧",
            body: "我们的学院与魁北克省内多家知名建筑设计公司和工程咨询机构保持紧密合作关系. 凭借雄厚的师资力量和先进的教学设施, 我们的学院为企业输送了大批优秀的建筑制图人才. 作为我院的毕业生, 无论是立志在大企业担任要职, 还是计划自主创业, 都将拥有广阔的职业前景"
        }
    ];

    const iconBoxClassNames = "icon btn btn-circle btn-lg btn-primary pe-none mb-5"

    const serviceList2 = [
        {
            id: 1,
            linkUrl: '#',
            title: "技能全面进阶",
            icon: 'uil-book-open',
            description: "我们的课程体系全面而细致, 从手工绘图的基础技法到计算机辅助设计的高阶应用, 涵盖建筑制图的方方面面. 通过系统学习, 您将掌握建筑设计、结构分析等专业技能, 成为一名全能型的制图专家"
        },
        {
            id: 2,
            linkUrl: '#',
            title: "沉浸式实训环境",
            icon: 'uil-shield-exclamation',
            description: "我院拥有业内一流的教学设施和软硬件资源, 为学生营造身临其境的实战氛围. 在这里, 您将通过大量的实践操作和项目训练, 快速积累宝贵的设计经验, 为未来的职业发展打下坚实的基础"
        },
        {
            id: 3,
            linkUrl: '#',
            title: "就业方向多元化",
            icon: 'uil-laptop-cloud',
            description: "建筑制图是一项应用广泛的技能, 掌握它意味着拥有更多的职业选择. 我院毕业生在建筑设计院、工程咨询公司、房地产开发企业等多个领域大展拳脚, 无论自主创业还是就职大企业,都拥有广阔的发展空间"
        },
        {
            id: 4,
            linkUrl: '#',
            title: "助力技术移民梦",
            icon: 'uil-chart-line',
            description: "住宅与商业制图专业是魁北克省PEQ技术移民计划的重点领域之一. 通过我院的专业培训, 您不仅能够掌握一技之长, 还能够满足技术移民的申请条件, 为实现在加拿大定居的梦想铺平道路"
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
                body: "我们提供专业的法语前置课程, 帮助您快速提升法语能力, 达到课程要求的入学标准. 我们的法语课程由经验丰富的教师授课, 通过有针对性的训练, 您将在短时间内掌握专业制图所需的法语技能"
            },
            {
                no: 'Three',
                expand: false,
                heading: "为什么要选择法语PEQ?",
                body: "法语PEQ移民项目是一条快速、高效的移民途径, 申请条件相对宽松. 作为长期紧缺技术型人才, 住宅与商业制图专业的毕业生在PEQ移民申请中享有很大优势"
            }
        ],
        [
            {
                no: 'Two',
                expand: false,
                heading: "课程的就业前景如何?",
                body: "建筑行业是魁北克省乃至整个加拿大的支柱产业, 随着城市化进程的加快, 对建筑制图人才的需求也在不断增加. 通过我们的PEQ课程, 您将掌握全面的制图技能, 成为备受企业青睐的高端技术人才"
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
                                <img className="w-auto" src="/img/PEQ/rcd3.jpg" alt="Photo"/>
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

export default ResidentialCommercialDraftingPage;
