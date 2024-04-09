import { NextPage } from 'next';
// -------- custom hooks -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import RoundContainer from 'components/MIEC/Round-Container';
import { About7 } from 'components/blocks/about';
import { Contact1 } from 'components/blocks/contact';
import { Footer9 } from 'components/blocks/footer';
import { Hero20 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Services23 } from 'components/blocks/services';
import PageProgress from 'components/common/PageProgress';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const HomePage: NextPage = () => {
  // lighbox hook called
  useLightBox();
  const { t: navt } = useTranslation('nav');
  const { t: aboutt } = useTranslation('aboutus');
  const { t: herot } = useTranslation('hero');
  const { t: servicet } = useTranslation('service');
  // const { t: teamst } = useTranslation('teams');
  // const { t: projectt } = useTranslation('project');
  const { t: contactt } = useTranslation('contact');
  const { t: footert } = useTranslation('footer');

  return (
    <div className="page-frame bg-pale-primary" id="main">
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper">
        <Navbar
          info
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          t={navt}
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== About Us section ========== */}
        <Hero20 t={herot} />
        {/* ========== Why us ========== */}
        <RoundContainer>
          <About7 t={aboutt} />
        </RoundContainer>
        {/* ========== what we do section ==========*/}
        <Services23 t={servicet} />

        {/*<RoundContainer>*/}
        {/*  <Clients3 />*/}
        {/*</RoundContainer>*/}

        {/*/!* ========== About our team ==========*!/*/}
        {/*<RoundContainer>*/}
        {/*  <Services36 t={teamst} />*/}
        {/*</RoundContainer>*/}

        {/* ========== Latest Project ==========*/}
        {/*<RoundContainer footer="This section only in Chinese 仅中文介绍">*/}
        {/*  <Portfolio3 t={projectt} />*/}
        {/*</RoundContainer>*/}

        {/*/!* ========== Our School ==========*!/*/}
        {/*<RoundContainer>*/}
        {/*  /!* <Clients2 /> *!/*/}
        {/*  <Testimonial17 t={projectt} />*/}
        {/*</RoundContainer>*/}

        {/* ========== Contact Us ==========*/}
        <RoundContainer>
          <Contact1 t={contactt} />
        </RoundContainer>
      </main>

      {/* ========== footer section ========== */}
      <Footer9 t={footert} />
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  console.log(`Current locale: ${locale}`);
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'nav',
        'aboutus',
        'hero',
        'service',
        'contact',
        'footer'
      ]))
      // Will be passed to the page component as props
    }
  };
}

export default HomePage;
