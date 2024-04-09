import { NextPage } from 'next';
import {Fragment, useEffect} from 'react';
// -------- custom component -------- //
import { useTranslation } from 'next-i18next';
import {useRouter} from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return null;
};
// export async function getStaticProps({ locale }: { locale: string }) {
//   console.log(`Current locale: ${locale}`);
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'nav', 'footer']))
//       // Will be passed to the page component as props
//     }
//   };
// }

export default NotFound;
