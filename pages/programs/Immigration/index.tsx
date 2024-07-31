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


const ImmigrationPage: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: immigrationt} = useTranslation('immigration')

    // get current locale
    const router = useRouter();
    const { locale } = router;

    // console.log(renderString(teamst('teamMembers')))

    // url: `/${locale}/programs/`,
    const projectList = [
        {
            id: 0,
            projectName: immigrationt('programs.0.name'),
            projectType: immigrationt('programs.0.type'),
            url: '/programs/Immigration/peq',
            image: '/img/MIEC/project/PEQ.jpg'
        },
        {
            id: 4,
            projectName: immigrationt('programs.1.name'),
            projectType: immigrationt('programs.1.type'),
            url: `/programs/Immigration/home-care`,
            image: '/img/programs/pl-homecare.jpg'
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
                            <h6>{immigrationt("programsTitle")}</h6>
                            <h1>{immigrationt("programsDescription")}</h1>
                        </div>
                        <div className={styles.programs}>
                            {projectList.map((item, index) => (
                                <a href={item.url} key={index} className={styles.programsItems}>
                                    <div className={styles.itemsImage}>
                                        <img src={item.image} alt="Image"/>
                                    </div>
                                    <div className={styles.itemsContent}>
                                        <h2>{immigrationt(`projectList.${index}.projectName`)}</h2>
                                        <p>{immigrationt(`projectList.${index}.projectType`)}</p>
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
            ...(await serverSideTranslations(locale, ['common', 'immigration', 'nav', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default ImmigrationPage;
