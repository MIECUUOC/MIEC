import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import useIsotope from "../../../src/hooks/useIsotope";
import ContactForms from "../../../src/components/otherBlocks/ContactForms";
import IconBox from "../../../src/components/reuseable/IconBox";
import {useEffect} from "react";


const SummerCamp: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "Summer Camp - HEC夏令营"
    const {filterKey, handleFilterKeyChange} = useIsotope();

    useEffect(() => {
        const timer = setTimeout(() => {
            handleFilterKeyChange('.ac')();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    const accordions = [
        {
            no: 'One',
            expand: true,
            heading: "MIEC 暑期夏校有何特色?",
            body: "我们的夏校提供丰富多样的课程和活动, 涵盖科技、艺术、文化、生态等领域. 学生们将在专业导师的指导下, 通过互动式教学和实践项目, 开拓视野, 发掘潜力. 此外, 我们还安排了精彩的户外活动和参访, 让学生们在学习之余, 充分享受蒙特利尔的魅力"
        },
        {
            no: 'Two',
            expand: false,
            heading: "夏校适合哪些年龄段的学生?",
            body: "我们的夏校欢迎18岁以上的学生参加! 我们根据学生的年龄和兴趣, 提供了不同难度和主题的课程, 确保每个学生都能找到适合自己的学习内容. 无论您的孩子是希望探索新领域, 还是深入发展特定兴趣, MIEC 暑期夏校都能满足他们的需求"
        },
        {
            no: 'Three',
            expand: false,
            heading: "MIEC 暑期夏校的师资如何?",
            body: "我们的导师团队由经验丰富的教育工作者、行业专家和热情洋溢的辅导员组成. 他们都拥有相关领域的专业背景和丰富的教学经验, 热衷于启发和引导学生探索未知. 在夏校期间, 导师们将全程关注每个学生的成长, 提供个性化的指导和支持, 确保学生们度过一个收获满满的夏天"
        }
    ];

    const serviceList2 = [
        {
            id: 1,
            linkUrl: '#',
            title: '跨学科课程设置',
            icon: 'uil-books',
            description: '我们精心设计了涵盖科技、艺术、文化、生态等多个领域的前沿课程,邀请各领域的专家学者授课,满足学员的多元化学习需求,帮助学员开拓视野,启发思考'
        },
        {
            id: 2,
            linkUrl: '#',
            title: '沉浸式学习体验',
            icon: 'uil-focus-target',
            description: '我们采用工作坊、研讨会、实地考察等多种教学形式,鼓励学员全身心投入学习。通过与导师和其他学员的密切互动,学员获得身临其境的成长体验,在实践中提升能力'
        },
        {
            id: 3,
            linkUrl: '#',
            title: '安全舒适的食宿环境',
            icon: 'uil-building',
            description: '学员的安全和舒适是我们的首要关注点。我们提供安全、清洁、舒适的住宿环境,配备全天安保服务。同时,我们的餐饮团队将为学员提供营养均衡、多样的餐食选择'
        },
        {
            id: 4,
            linkUrl: '#',
            title: '全球化视野拓展',
            icon: 'uil-globe',
            description: '在蒙特利尔这个多元文化的大都会,学员将与来自世界各地的优秀青年交流学习,建立宝贵的友谊和人脉。通过跨文化交流,学员将开拓全球化视野,提升国际化沟通能力'
        }
    ];


    const filterList = [
        {id: 1, title: '查看所有', value: '*'},
        {id: 2, title: '艺术与文化', value: '.ac'},
        {id: 3, title: '科技与创新', value: '.ti'},
        {id: 4, title: '环境与生态', value: '.ee'},
        {id: 5, title: '商业与社会', value: '.br'}
    ];

    const portfolioList4 = [
        {id: 24, image: 'ee2', title: "LA TOHU", category: 'ee br'},
        {id: 11, image: 'mm3', title: "蒙特利尔博物馆", category: 'ac'},
        {id: 6, image: 'om6', title: "老城区酒吧", category: 'ee br'},
        {id: 30, image: 'tt2', title: "蒙特利尔生物圈", category: 'ee ac ti'},
        {id: 2, image: 'om2', title: "老港公园", category: 'ee'},
        {id: 19, image: 'bb2', title: "知名多媒体工作室", category: 'ac br ti'},
        {id: 8, image: 'om8', title: "教堂礼堂", category: 'ac ee'},
        {id: 28, image: 'bb9', title: "加拿大广播公司", category: 'br'},
        {id: 17, image: 'cc4', title: "马戏团 ELOIZE", category: 'ac'},
        {id: 32, image: 'vv2', title: "蒙特利尔当代艺术博物馆", category: 'ee ac ti br'},
        {id: 4, image: 'om4', title: "教堂礼乐", category: 'ac ee'},
        {id: 22, image: 'bb5', title: "知名多媒体工作室", category: 'ac br ti'},
        {id: 13, image: 'mm5', title: "蒙特利尔博物馆", category: 'ac'},
        {id: 25, image: 'bb6', title: "魁北克水电公司", category: 'br'},
        {id: 1, image: 'om1', title: "老港街道", category: 'ac ee'},
        {id: 18, image: 'bb1', title: "知名多媒体工作室", category: 'ac br ti'},
        {id: 5, image: 'om5', title: "老港河畔", category: 'ee'},
        {id: 27, image: 'bb8', title: "加拿大广播公司", category: 'br'},
        {id: 16, image: 'cc3', title: "马戏团 ELOIZE", category: 'ac'},
        {id: 10, image: 'mm2', title: "蒙特利尔博物馆", category: 'ac'},
        {id: 21, image: 'bb4', title: "知名多媒体工作室", category: 'ac br ti'},
        {id: 3, image: 'om3', title: "独特的住宅", category: 'ac ee'},
        {id: 26, image: 'bb7', title: "魁北克水电公司", category: 'br ti'},
        {id: 12, image: 'mm4', title: "蒙特利尔博物馆", category: 'ac'},
        {id: 23, image: 'ee1', title: "LA TOHU", category: 'ee br'},
        {id: 14, image: 'cc1', title: "马戏团 ELOIZE", category: 'ac'},
        {id: 7, image: 'om7', title: "老城区广场", category: 'ac ee'},
        {id: 29, image: 'tt1', title: "蒙特利尔生物圈", category: 'ee ac ti'},
        {id: 20, image: 'bb3', title: "知名多媒体工作室", category: 'ac br ti'},
        {id: 9, image: 'mm1', title: "蒙特利尔博物馆", category: 'ac'},
        {id: 31, image: 'vv1', title: "蒙特利尔天文馆", category: 'ee ac ti br'},
        {id: 15, image: 'cc2', title: "马戏团 ELOIZE", category: 'ac'},
    ];


    const otherContext = {
        text1: "MIEC - HEC暑期夏校",
        text2: "开启最精彩的暑期探索之旅",
        text3: "我们的特色",
        text4: "全方位的成长体验,为您量身打造",
        text5: "",
        text6: "",
        moreText: "加入暑期夏校, 开启一段非凡的学习之旅. 完成课程, 你将获得3个大学学分, 并荣获HEC官方课程证书, 为你的学业生涯增光添彩. 这里不仅是开拓全球视野、培养创新能力的理想平台, 更是通往持续进修和移民之路的金钥匙. 课程结束后, 你可以选择直接进入HEC法语中心继续深造, 为攻克PEQ移民铺平道路. 亦或是以此为跳板, 进入HEC学士学位课程, 在求学梦想的道路上扬帆起航. 选择MIEC, 让这个夏天成为你未来发展的重要起点, 铸就辉煌人生!"
    }


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


                    <div className="row gy-10 gx-lg-8 gx-xl-12 mb-16 mb-md-16 mb-sm-16 align-items-center">
                        <div className="col-md-8 col-lg-6">
                            <figure className="rounded">
                                <img src="/img/summer/sc2.jpg" alt=""/>
                            </figure>
                        </div>

                        <div className="col-lg-6">
                            <h2 className="fs-15 text-uppercase text-muted mb-3">{otherContext.text1}</h2>
                            <h3 className="display-4 mb-3">{otherContext.text2}</h3>
                            <p className="mb-7">{otherContext.moreText}</p>
                            <div className="accordion accordion-wrapper" id="accordionExample">
                                {accordions.map((item) => (
                                    <div key={item.no} className={`card plain accordion-item`}>
                                        <div className="card-header" id={`heading${item.no}`}>
                                            <button
                                                data-bs-toggle="collapse"
                                                aria-controls={`collapse${item.no}`}
                                                data-bs-target={`#collapse${item.no}`}
                                                aria-expanded={item.expand ? 'true' : 'false'}
                                                className={item.expand ? 'accordion-button' : 'collapsed'}
                                            >
                                                {item.heading}
                                            </button>
                                        </div>

                                        <div
                                            id={`collapse${item.no}`}
                                            aria-labelledby={`heading${item.no}`}
                                            data-bs-parent="#accordionExample"
                                            className={`accordion-collapse collapse ${item.expand && 'show'}`}
                                        >
                                            <div className="card-body">
                                                <p>{item.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <div className="row">
                            <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                                <h2 className="fs-15 text-uppercase text-muted mb-3 ">{otherContext.text3}</h2>
                                <h3 className="display-4 mb-5 mb-10">{otherContext.text4}</h3>
                            </div>
                        </div>

                        <div className="row gx-md-8 gy-8 text-center mb-10 mb-md-12">
                            {serviceList2.map((item) => (
                                <div key={item.id} className="col-md-6 col-lg-3">
                                    <IconBox icon={item.icon} className='icon btn btn-circle btn-lg btn-primary pe-none mb-5' />
                                    <h4 className=''>{item.title}</h4>
                                    <p className="mb-3">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    <section id="portfolio">
                        <div className="wrapper">
                            <div className="container py-15 py-md-17 text-center">
                            <div className="row">
                                    <div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8">
                                        <h2 className="display-5 mb-3">{otherContext.text5}</h2>
                                        <p className="lead fs-lg">{otherContext.text6}</p>
                                    </div>
                                </div>

                                <div className="grid grid-view projects-masonry">
                                    <div className="isotope-filter filter mb-10">
                                        <ul>
                                            {filterList.map(({id, title, value}) => (
                                                <li key={id}>
                                                    <a
                                                        onClick={handleFilterKeyChange(value)}
                                                        className={`filter-item ${filterKey === value ? 'active' : ''}`}
                                                    >
                                                        {title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="row gx-md-6 gy-6 isotope">
                                        {portfolioList4.map(({category, id, image, title}) => (
                                            <div className={`project item col-md-6 col-xl-4 ${category}`} key={id}>
                                                <figure className="overlay overlay-1 rounded">
                                                    <a href={`/img/summer/${image}.jpg`} data-glightbox
                                                       data-gallery="shots-group">
                                                        <img src={`/img/summer/${image}.jpg`} alt={title}/>
                                                        <span className="bg"/>
                                                    </a>
                                                    <figcaption>
                                                        <h5 className="from-top mb-0">{title}</h5>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
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

export default SummerCamp;
