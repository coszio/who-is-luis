import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';

function QuickView(props) {

  const { t } = useTranslation();

  return (
    <div class='bg-gray-600'>
      <div class='container mx-auto flex bg-gray-400'>
        <div class='text-4xl mx-auto my-10 font-bold bg-red-200'>
          <h1>Luis</h1>
        </div>
      </div>
      <div class='container mx-auto'>
        <div>
          <h2>{t('RESUME')}</h2>
        </div>
      </div>
      <div class='container mx-auto bg-gray-100'>
        <ul>
          <li>
            experiencia
          </li>
        </ul>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

QuickView.propTypes = {};

export default QuickView;
