import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function LocaleNotFound() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{t('404.title')}</h1>
      <p className="text-lg mb-8">{t('404.description')}</p>
      <Link 
        href="/" 
        className="text-primary hover:text-primary/90 underline underline-offset-4"
      >
        {t('404.return_home')}
      </Link>
    </div>
  );
}
