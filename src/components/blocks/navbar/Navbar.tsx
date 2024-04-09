import Link from 'next/link';
import LinkType from 'types/link';
import {FC, Fragment, ReactElement, useRef} from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
// -------- partial header component -------- //
import Info from './partials/Info';
import Search from './partials/Search';
import Social from './partials/Social';
import Signin from './partials/Signin';
import Signup from './partials/Signup';
import Language from './partials/Language';
import MiniCart from './partials/MiniCart';
// -------- data -------- //
import {
    demos,
    pages,
    blogsNavigation,
    blocksNavigation,
    projectsNavigation,
    documentionNavigation
} from 'data/navigation';
import {useRouter} from 'next/router';
import {TFunction} from 'next-i18next';
import {router} from "next/client";

// ===================================================================
type NavbarProps = {
    info?: boolean;
    cart?: boolean;
    fancy?: boolean;
    logoAlt?: string;
    search?: boolean;
    social?: boolean;
    language?: boolean;
    stickyBox?: boolean;
    navClassName?: string;
    button?: ReactElement;
    navOtherClass?: string;
    t: TFunction;
};

// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {

    const router = useRouter();

    // Debugs Nav
    // console.log('Current asPath:', router.asPath);
    // console.log('Current pathname:', router.pathname);

    const {navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt, t} =
        props;

    useNestedDropdown();
    const sticky = useSticky(350);
    const navbarRef = useRef<HTMLElement | null>(null);

    // dynamically render the logo
    const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
    // dynamically added navbar classname
    const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

    // render inner nav item links
    const renderLinks = (links: LinkType[]) => {
        return links.map((item) => (
            <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id}/>
        ));
    };

    // all main header contents
    const headerContent = (
        <Fragment>
            <div className="navbar-brand w-100">
                <NextLink href="#main"
                          title={<img alt="logo" src={`/img/${logo}.png`} srcSet={`/img/${logo}@2x.png 2x`}/>}/>
            </div>

            <div id="offcanvas-nav" data-bs-scroll="true"
                 className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div className="offcanvas-header d-lg-none">
                    <h3 className="text-white fs-30 mb-0">MIEC</h3>
                    <button type="button" aria-label="Close" data-bs-dismiss="offcanvas"
                            className="btn-close btn-close-white"/>
                </div>

                <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                    <ul className="navbar-nav">
                        {/* ===================== demos nav item ===================== */}
                        <li className="nav-item dropdown dropdown-mega">
                            <NextLink title={t('about')} className="nav-link" href="#about-us"/>
                        </li>

                        {/*  ===================== pages nav item  ===================== */}
                        <li className="nav-item">
                            <NextLink title={t('advantage')} className="nav-link" href="#why-us"/>
                        </li>

                        {/* ===================== projects nav item  ===================== */}
                        <li className="nav-item dropdown">
                            {router.pathname === '/teams' || router.pathname === '/404' ?
                                <NextLink title={t('team')} className="nav-link" href="#"/> :
                                <NextLink title={t('team')} className="nav-link" href="teams"/>}
                        </li>
                        {/* ===================== projects nav item  ===================== */}
                        <li className="nav-item dropdown">
                            {/*<NextLink title={t('project')} className="nav-link" href="#project"/>*/}
                            {router.pathname === '/programs' || router.pathname === '/404' ?
                                <NextLink title={t('project')} className="nav-link" href="#"/> :
                                <NextLink title={t('project')} className="nav-link" href="programs"/>}
                        </li>

                        {/* ===================== projects nav item  ===================== */}
                        <li className="nav-item dropdown">
                            <NextLink title={t('contact')} className="nav-link" href="#contact-us"/>
                        </li>
                    </ul>

                    {/* ============= show contact info in the small device sidebar ============= */}
                    <div className="offcanvas-footer d-lg-none">
                        <div>
                        <NextLink title="Info@miec-uuoc.ca" className="link-inverse"
                                      href="mailto:Info  @miec-uuoc.ca"/>
                            {/* <br />
              <NextLink href="tel:0123456789" title="00 (123) 456 78 90" /> */}
                            <br/>
                            <SocialLinks/>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============= right side header content ============= */}
            <div className={navOtherClass}>
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* ============= language dropdwown ============= */}
                    {language && <Language/>}

                    {/* ============= info button ============= */}
                    {info && (
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                                <i className="uil uil-info-circle"/>
                            </a>
                        </li>
                    )}

                    {/* ============= contact button ============= */}
                    {button && <li className="nav-item d-none d-md-block">{button}</li>}

                    {/* ============= social icons link ============= */}
                    {social && <Social/>}

                    {/* ============= humburger button for small device ============= */}
                    <li className="nav-item d-lg-none">
                        <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav"
                                className="hamburger offcanvas-nav-btn">
                            <span/>
                        </button>
                    </li>
                </ul>
            </div>
        </Fragment>
    );

    const otherPages = [
        {title: t('about'), url: '#about-us'},
        {title: t('advantage'), url: '#why-us'},
        {title: t('team'), url: '#teams'},
        {title: t('project'), url: '#project'},
        {title: t('contact'), url: '#contact-us'}
    ];

    return (
        <Fragment>
            {stickyBox && <div style={{paddingTop: sticky ? navbarRef.current?.clientHeight : 0}}/>}

            <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
                {fancy ? (
                    <div className="container">
                        <div
                            className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
                            {headerContent}
                        </div>
                    </div>
                ) : (
                    <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
                )}
            </nav>

            {/* ============= info sidebar ============= */}
            {info && (
                <div className="offcanvas offcanvas-end text-inverse" id="offcanvas-info" data-bs-scroll="true">
                    <div className="offcanvas-header">
                        <h3 className="text-white fs-30 mb-0">{t('title')}</h3>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>

                    <div className="offcanvas-body pb-6">
                        <div className="widget mb-8">
                            <p>{t('description')}</p>
                        </div>

                        <div className="widget mb-8">
                            <h4 className="widget-title text-white mb-3">{t('contactTitle')}</h4>
                            <address>{t('address')}</address>
                            <NextLink title="Info@miec-uuoc.ca" className="link-inverse"
                                      href="mailto:Info@miec-uuoc.ca"/>
                            {/* <br />
          <NextLink href="tel:0123456789" title={phone!} /> */}
                        </div>

                        <div className="widget mb-8">
                            <h4 className="widget-title text-white mb-3">{t('moreInfoTitle')}</h4>
                            <ul className="list-unstyled">
                                {otherPages.map((item) => (
                                    <li key={item.title}>
                                        <NextLink href={item.url} title={item.title}/>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title text-white mb-3">{t('followUs')}</h4>
                            <SocialLinks className="nav social social-white"/>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

// set deafult Props
Navbar.defaultProps = {
    cart: false,
    info: false,
    social: false,
    search: false,
    language: false,
    stickyBox: true,
    navOtherClass: 'navbar-other w-100 d-flex ms-auto',
    navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
