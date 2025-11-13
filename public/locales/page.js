"use client";

import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

export default function LocalePage() {
  const { locale } = useParams();
  const { t, i18n } = useTranslation('common');

  // Լեզուն փոխիր ըստ URL-ի
  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  return (
    <div>
      <h1>{t('heroTitle')}</h1>
      <p>{t('aboutTitle')}</p>

      <div className="flex gap-4 mt-4">
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('hy')}>HY</button>
        <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
      </div>
    </div>
  );
}
