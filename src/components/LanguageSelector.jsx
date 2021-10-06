import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [_, setSelectedLang] = useState("en");

  const [selecting, setSelecting] = useState(false);

  const changeLanguage = (value) => {
    setSelectedLang(value);
    i18n.changeLanguage(value);
    setSelecting(!selecting);
  };

  return (
    <>
      <div class='relative '>
        <button
          class='block h-12 w-12 overflow-hidden focus:outline-none hover:border hover:rounded-sm hover:shadow-xl'
          onClick={() => setSelecting(!selecting)}
        >
          <img class='object-cover ' src={t("FLAG_URL")} alt='flag' />
        </button>
        <div
          hidden={!selecting}
          class='absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl'
        >
          <option
            class='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white'
            onClick={() => changeLanguage("en")}
          >
            English
          </option>
          <div class='py-2'>
            <hr></hr>
          </div>
          <option
            class='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white'
            onClick={() => changeLanguage("es")}
          >
            Español
          </option>
        </div>
      </div>
    </>
  );
}
