import { useTranslation } from 'react-i18next';
import i18next from "i18next";

const Languages = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* {languageArr.map(item => (
                <button type="button" onClick={() => { i18next.changeLanguage(item);
                    setMenuAnchor(null);
                  }}>{t(item)}</button>
            ))} */}

            <button type="button" onClick={() => {
                    i18next.changeLanguage('ru');
                  }}>{t('ru')}</button>
            <button type="button" onClick={() => {
                    i18next.changeLanguage('en');
                  }}>{t('en')}</button>
            <button type="button" onClick={() => {
                    i18next.changeLanguage('uz');
                  }}>{t('uz')}</button>
        </div>
    );

}

export default Languages;