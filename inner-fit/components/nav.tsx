import LocaleSelector from '@/components/locale-selector';
import { TranslationObejct } from '@/lib/i18n/loadTranslation';
import Link from 'next/link';

interface Props {
  translation: TranslationObejct;
}

export default function Nav({ translation }: Props) {
  return (
    <nav className="absolute flex h-16 w-full items-center justify-end border-b border-b-neutral-200 px-8 lg:px-96">
      <Link href={"/"}><div className='p-4 text-center'>InnerFit</div></Link>
      <LocaleSelector message={translation('nav.locale-selector.message')} />
    </nav>
  );
}
