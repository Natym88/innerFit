import '@/app/globals.css';
import Nav from '@/components/nav';
import { Locale, i18nConfig } from '@/i18n';
import getTranslation from '@/lib/i18n/getTranslation';
import type { Metadata } from 'next';
import { Indie_Flower } from 'next/font/google';

export const metadata: Metadata = {
  title: 'InnerFit',
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

const indieFlower = Indie_Flower({weight: '400', subsets: ['latin']})

export default async function RootLayout({ children, params }: Props) {
  const translation = await getTranslation(params.locale);

  return (
    <html lang={params.locale} className={indieFlower.className}>
      <body className='bg-mobile-image bg-no-repeat bg-cover min-h-screen bg-center'>
        <Nav translation={translation} />
        <main className="px-5 pt-16 lg:px-96">{children}</main>
      </body>
    </html>
  );
}
