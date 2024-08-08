import { useState } from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from '@material-tailwind/react';
import ENFlag from '@assets/images/EN.svg';
import DEFlag from '@assets/images/DE.svg';
import { useTranslation } from 'react-i18next';

const languages = {
  en: ENFlag,
  de: DEFlag
};

const LanguageMenu = () => {
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const { i18n } = useTranslation();

  const changeLanguage = (value: 'en' | 'de') => {
    setLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <div className="fixed top-20 right-0">
      <Menu placement="bottom-end">
        <MenuHandler>
          <div className="rounded-l-3xl shadow p-4 pr-2 cursor-pointer">
            <img src={languages[lang]} alt="active-lang" />
          </div>
        </MenuHandler>
        <MenuList className="min-w-4">
          <MenuItem onClick={() => changeLanguage('en')}>
            <span>
              <img src={ENFlag} alt="EN" />
            </span>
          </MenuItem>
          <MenuItem onClick={() => changeLanguage('de')}>
            <span>
              <img src={DEFlag} alt="DE" />
            </span>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default LanguageMenu;
