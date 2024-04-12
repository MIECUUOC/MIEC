import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import styles from './styles.module.scss';
import {useRouter} from "next/router";


const Teams: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: programst} = useTranslation('programs')

    // get current locale
    const router = useRouter();
    const { locale } = router;

    // console.log(renderString(teamst('teamMembers')))

    // url: `/${locale}/programs/`,
    const projectList = [
        {
            id: 0,
            projectName: programst('programs.0.name'),
            projectType: programst('programs.0.type'),
            url: '/programs/peq',
            image: {'1x': '/img/MIEC/project/PEQ.png', '2x': '/img/MIEC/project/PEQ@2x.png'}
        },
        // {
        //     id: 2,
        //     projectName: programst('programs.2.name'),
        //     projectType: programst('programs.2.type'),
        //     url: '#',
        //     image: {'1x': '/img/MIEC/project/TEFAQ.png', '2x': '/img/MIEC/project/TEFAQ@2x.png'}
        // },
        // {
        //     id: 3,
        //     projectName: programst('programs.3.name'),
        //     projectType: programst('programs.3.type'),
        //     url: '#',
        //     image: {'1x': '/img/MIEC/project/Summer_camp.png', '2x': '/img/MIEC/project/Summer_camp@2x.png'}
        // },
        {
            id: 4,
            projectName: programst('programs.1.name'),
            projectType: programst('programs.1.type'),
            url: `/${locale}/programs/university-pathway`,
            image: {'1x': '/img/MIEC/project/uoc.png', '2x': '/img/MIEC/project/uoc@2x.png'}
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

                    <div className={styles.programsPage}>
                        <div className={styles.mainContent}>
                            <h6>{programst("programsTitle")}</h6>
                            <h1>{programst("programsDescription")}</h1>
                        </div>
                        <div className={styles.programs}>
                            {projectList.map((item, index) => (
                                <a href={item.url} key={index} className={styles.programsItems}>
                                    <div className={styles.itemsImage}>
                                        <img src={projectList[index].image["2x"]} alt="Image"/>
                                    </div>
                                    <div className={styles.itemsContent}>
                                        <h2>{programst(`projectList.${index}.projectName`)}</h2>
                                        <p>{programst(`projectList.${index}.projectType`)}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                    </div>
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
            ...(await serverSideTranslations(locale, ['common', 'programs', 'nav', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default Teams;
