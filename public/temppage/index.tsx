import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import { Footer9 } from 'components/blocks/footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation} from 'next-i18next';

const TempPage: NextPage = () => {
    const { t: navt } = useTranslation('nav');
    const { t: footert } = useTranslation('footer');

    useLightBox();
    return (
        <div className="page-frame bg-pale-primary">
            <PageProgress />
            {/* ========== header section ========== */}
            <header className="wrapper">
                <Navbar language t={navt} />
            </header>

            <main className="content-wrapper">
                <RoundContainer>

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
            ...(await serverSideTranslations(locale, ['common', 'nav', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default TempPage;
