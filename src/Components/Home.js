import React from 'react'
import Navbar from './Navbar'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            {t('home1')}
          </h1>
          <p className="primary-text">
            {t('home2')}
          </p>
        </div>
        <div className="rectangle-rounded-corners">
          <p>657x485</p>
        </div>
      </div>
    </div>
  )
}

export default Home
