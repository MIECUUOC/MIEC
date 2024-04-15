import { TFunction } from 'next-i18next';
import { FC } from 'react';
import {useRouter} from "next/router";

type ServiceProps = {
    t: TFunction;
};
const ContactForms: FC<ServiceProps> = ({ t }) => {
    // get current locale
    const router = useRouter();
    const { locale } = router;

    return (
        <section className="wrapper bg-light" id="why-us">
            1
        </section>
    );
};

export default ContactForms;
