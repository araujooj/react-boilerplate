import React from 'react';
import { useTranslation } from 'react-i18next';
import { uppercase } from '../../../helpers/string';

function Footer(props) {
  const { t } = useTranslation();

  return (
    <footer className="bg-white p-4">
      <div className="row">
        <div className="col-12">
          <div className="text-center text-muted">
            <div className="mb-0">
              <span />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
