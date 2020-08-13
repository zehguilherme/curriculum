import React from 'react'

import MainInformations from '../../components/MainInformations'
import Education from '../../components/Education'
import ProfessionalExperience from '../../components/ProfessionalExperience'
import Knowledge from '../../components/Knowledge'
import QualificationsOthers from '../../components/QualificationsOthers'
import Footer from '../../components/Footer'

import './styles.css'

export default function Home () {
  return (
    <div className="home-container">
      <div className="curriculum-container">
        <MainInformations />

        <Education />

        <ProfessionalExperience />

        <Knowledge />

        <QualificationsOthers />

        <Footer />

      </div>
    </div>
  )
}
