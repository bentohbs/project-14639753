import { useTranslation } from 'react-i18next';
import FlagIcon from './FlagIcon';

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
] as const;

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { i18n, t } = useTranslation();
  const current = i18n.language && i18n.language.startsWith('zh') ? 'zh' : 'en';

  return (
    <div
      role="group"
      aria-label={t('lang.switch')}
      className={`inline-flex items-center rounded-md border border-background-300 overflow-hidden ${className}`}
    >
      {LANGS.map((l) => {
        const active = current === l.code;
        return (
          <button
            key={l.code}
            type="button"
            lang={l.code === 'zh' ? 'zh-CN' : 'en'}
            aria-pressed={active}
            onClick={() => i18n.changeLanguage(l.code)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs whitespace-nowrap cursor-pointer transition-colors ${
              active ? 'bg-primary-500 text-background-50' : 'text-foreground-800 hover:bg-background-100'
            }`}
          >
            <FlagIcon code={l.code} />
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
