import HomeButtons from '@/components/home-buttons';
import { Locale } from '@/i18n';
import getTranslation from '@/lib/i18n/getTranslation';

type Props = {
  params: { locale: Locale };
};

export default async function Page({ params }: Props) {

  const translation = await getTranslation(params.locale);
    
  return (
    <section className="flex h-96 flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-medium tracking-tight text-white pt-2">
        {translation('views.home.title')}
      </h1>
      <p className="align-middle text-xl font-light tracking-tight decoration-wavy text-white">
        {translation('views.home.body')}
      </p>
        <section className="flex flex-wrap justify-between">
          <HomeButtons shape='diamond' param={'selectIssue'}>{translation('views.home.buttons.SelectIssue')}</HomeButtons>
          <HomeButtons param={'takeTest'} shape='square'>{translation('views.home.buttons.TakeTest')}</HomeButtons>
          <HomeButtons param={'selfTherapy'} shape='square'>{translation('views.home.buttons.selfTherapy')}</HomeButtons>
          <HomeButtons param={'findHelp'} shape='circle'>{translation('views.home.buttons.findHelp')}</HomeButtons>
        </section>
    </section>
  );
}