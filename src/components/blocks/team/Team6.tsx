import { FC, Fragment } from 'react';
import { TeamCard3 } from 'components/reuseable/team-cards';
// -------- data -------- //
import { teams } from 'data/demo-11';

import {TFunction} from "next-i18next";
import color from "../../../utils/color";
import {renderString} from "../../reuseable/links/NextLink";
type TeamProps = {
    t: TFunction;
};

const Team6: FC<TeamProps> = ({ t }) => {

    const services = [
        {
            id: 1,
            src: 'img/MIEC/teams/JL.png',
            color: color.aqua,
            name: t('teamMembers.0.name'),
            description: renderString(t('teamMembers.0.description'))
        },
        {
            id: 2,
            src: 'img/MIEC/teams/JB.png',
            color: color.fuchsia,
            name: t('teamMembers.1.name'),
            description: renderString(t('teamMembers.1.description'))
        },
        {
            id: 3,
            src: 'img/MIEC/teams/MT.png',
            color: color.yellow,
            name: t('teamMembers.2.name'),
            description: renderString(t('teamMembers.2.description'))
        },
        {
            id: 4,
            src: 'img/MIEC/teams/BZ.png',
            color: color.leaf,
            name: t('teamMembers.3.name'),
            description: renderString(t('teamMembers.3.description'))
        }
    ];
  return (
    <Fragment>
      <div className="row mb-3">
        <div className="col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-primary mb-3">Our Team</h2>
          <h3 className="display-4 mb-7 px-lg-19 px-xl-18">
            Think unique and be innovative. Make a difference with Sandbox.
          </h3>
        </div>
      </div>

      <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 mb-md-20">
        {services.map((item, index) => (
          <div className="col-md-6 col-lg-3" key={item.id}>
              <div className="position-relative">
                  {/*<div*/}
                  {/*    className="shape rounded bg-soft-primary rellax d-md-block"*/}
                  {/*    style={{zIndex: 0, width: '98%', height: '98%', right: '-0.75rem', bottom: '-0.75rem'}}*/}
                  {/*/>*/}

                  <div className="card shadow-lg">
                      <figure className="card-img-top">
                          <img className="img-fluid" src={item.src} srcSet={item.src} alt=""/>
                      </figure>

                      <div className="card-body px-3 py-5" style={{minHeight: '280px'}}>
                          <h4 className="mb-1">{item.name}</h4>
                          <p className="mb-0">{item.description}</p>
                      </div>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Team6;
