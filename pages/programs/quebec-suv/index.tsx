import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import ContactForms from "../../../src/components/otherBlocks/ContactForms";
import Accordion from "../../../src/components/reuseable/accordion";

// import SCSS
import styles from './QuebecSUV.module.scss';

const QuebecSUV: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Quebec-SUV - 魁省独家小SUV"

    const contentList = {
        mainTitle: "魁北克分公司移民",
        subTitle: "魁省SUV移民计划是目前最快捷高效的加拿大移民方式之一, 通过在魁北克设立分公司并派遣员工, 您可以在短短2-3个月内获得加拿大工签, 开启海外工作之旅. 累积2年工作经验并达到法语要求后, 仅需3-4年即可获得加拿大永居身份",
        sectionTitle1: "我们的优势"
    }

// 第一部分
    const mainTitleContentList = [
        {
            no: 'One',
            expand: false,
            heading: "快速通道, 领先一步",
            body: "普通技术移民动辄需要1年以上的等待, 而我们的小SUV更快获得工签, 为您赢得宝贵的海外发展时间. 抢先融入加拿大生活, 积累北美工作经验, 为未来事业发展铺平道路"
        },
        {
            no: 'Two',
            expand: false,
            heading: "申请无忧, 成功在握",
            body: "我们的项目通过率高达90%以上, 让您的枫叶梦想触手可及. 无论是学历还是资金, 我们的要求相比其他项目更宽松务实. 专业的法律团队全程支持, 确保申请过程高效顺畅, 最大化您获批的概率"
        },
        {
            no: 'Three',
            expand: false,
            heading: "合家移民, 幸福相随",
            body: "小SUV项目支持主申请人的配偶和子女一同获得加拿大居留权益. 优质教育、完善医保, 您的家人都能同样享受. 有家人的支持和陪伴, 海外生活更加温馨惬意, 在加拿大共同开启美好未来"
        }
    ];

// 第二部分
    const forClient = [
        {
            id: 'fc1',
            title: "申请门槛低",
            body: "我们的项目对申请人的学历和背景要求相对宽松. 只需具备高中以上学历, 以及一年以上的国内工作经验, 即可满足申请条件. 无需提供语言成绩或资金证明, 大大降低了申请难度, 让更多人有机会实现加拿大移民梦想"
        },
        {
            id: 'fc2',
            title: "性价比高",
            body: "与市面上动辄几十万甚至上百万的投资移民项目相比, 我们的SUV项目申请费用更加亲民实惠. 分公司注册等相关费用明码标价, 入境后的工资收入也能满足日常生活所需. 用最低的成本, 换取最优质的加拿大生活"
        },
        {
            id: 'fc3',
            title: "家庭利益最大化",
            body: "申请人成功获批后, 配偶和子女都可以随行移民, 共同享受加拿大的高福利待遇. 配偶可申请开放式工作签证, 自由选择工作; 子女可以免费就读当地公立学校, 接受优质教育; 全家人都能享受加拿大政府提供的免费医疗保险"
        },
        {
            id: 'fc4',
            title: "专业贴心服务",
            body: "从项目咨询到申请文件准备, 再到后期跟进, 我们都为您安排了经验丰富的移民律师提供一对一贴身服务. 客户的需求就是我们的努力方向, 您的满意是我们服务的宗旨. 专业、高效、贴心的服务, 让您的移民过程倍感轻松省心"
        }
    ]


    const applicationProcess = {
        title: "项目申请流程",
        steps: [
            {
                id: 1,
                title: "项目评估与签约",
                description: "首先由我们专业的移民顾问对您的情况进行评估,确认您是否符合项目的申请条件。如果一切合适,我们会与您签订正式的服务协议,并开始着手准备申请材料"
            },
            {
                id: 2,
                title: "准备申请文件",
                description: "根据项目要求,我们的团队会协助您准备并核对所需的申请文件,包括身份证明、学历证明、工作证明、无犯罪证明等。同时,我们也会指导您准备一份详实的职业规划,列明您在加拿大工作和生活的打算"
            },
            {
                id: 3,
                title: "递交申请,获取工签",
                description: "材料准备完毕后,我们会代表您向加拿大移民局提交正式的工签申请。一般在2-3个月内,您就能收到批准通知,并获得为期1-2年的工作签证"
            },
            {
                id: 4,
                title: "抵达加拿大,开展工作",
                description: "拿到工签后,您可以合法入境加拿大,并在我们的协助下完成分公司的注册和员工的派遣手续。之后,您就可以开始在加拿大工作和生活,积累宝贵的海外经验"
            },
            {
                id: 5,
                title: "积累居住时间,完成语言考试",
                description: "在工作的同时,您需要尽可能多地居住在加拿大,累计满足至少2年的居住时间。此外,您还需要参加法语考试,并达到CLB 7级或以上的成绩,以满足魁北克移民的语言要求"
            },
            {
                id: 6,
                title: "递交PR申请,获得永居身份",
                description: "当您满足了居住时间和语言成绩的要求后,就可以正式向魁北克移民局递交永居申请。一般在6-12个月内,您就能收到移民局的批准信,并被授予加拿大永久居民的身份"
            }
        ],
        conclusion: "只需6个简单的步骤,您就能实现在加拿大工作定居的梦想。我们专业的服务团队会在每一个阶段为您提供及时的帮助和建议,让您的移民之旅更加顺畅无忧。选择SUV项目,选择一站式移民服务,选择美好未来的开始!"
    };


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

                    <div className="col mb-n15">
                        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-8 mb-md-12" id="about-us">
                            <div className="col-lg-7 order-lg-2 d-flex justify-content-end align-items-center">
                                <figure>
                                    <img className="w-auto img-fluid rounded-4" src="/img/MIEC/programs/b1.jpg"
                                         srcSet="/img/MIEC/programs/b1.jpg" alt="Photo"/>
                                </figure>
                            </div>

                            <div className="col-lg-5">
                                <h3 className="display-4 mt-xxl-8 mb-3">{contentList.mainTitle}</h3>
                                <p className="lead fs-lg lh-sm mb-6">{contentList.subTitle}</p>

                                <div className="accordion accordion-wrapper" id="accordionExample">
                                    {mainTitleContentList.map((item) => (
                                        <Accordion
                                            type="plain"
                                            key={item.no}
                                            no={item.no}
                                            heading={item.heading}
                                            body={item.body}
                                            expand={item.expand}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div className="container pb-9 pb-md-14">
                                <div className="row">
                                    <div className="mx-auto">
                                        <h3 className="display-4 mb-10">{contentList.sectionTitle1}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-md-8 gx-xl-12 gy-10">
                        {forClient.map((item) => (
                            <div className="col-lg-6" key={item.id}>
                                <div className="d-flex flex-row">
                                    <div>
                                      <span className="icon btn btn-sm btn-circle btn-primary pe-none me-5">
                                        <i className="uil uil-comment-exclamation"/>
                                      </span>
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p className="mb-0">{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>




                    <section className="section section-bg mt-17">
                        <div className={styles.RoadMapList}>


                            {applicationProcess.steps.map((item) => (
                                <div key={item.id} className={styles.RoadMapItem}>
                                    <div className={styles.RoadMapStep}>
                                        <p>第{item.id}步</p>
                                    </div>

                                    <div className={styles.RoadMapTitle}>
                                        <p>{item.title}</p>
                                    </div>

                                    <div className={styles.RoadMapDesc}>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </section>


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

export default QuebecSUV;
