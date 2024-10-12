/**
 * From here, the application is pretty typical React, but with lots of
 * support from `@openmrs/esm-framework`. Check out `Greeter` to see
 * usage of the configuration system, and check out `PatientGetter` to
 * see data fetching using the OpenMRS FHIR API.
 *
 * Check out the Config docs:
 *   https://openmrs.github.io/openmrs-esm-core/#/main/config
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './root.scss';
import FetchedGrowthChart from './chartjs-growth-chart/FetchedGrowthChart';
// import GrowthChart from './chartjs-growth-chart/GrowthChart';  //UNCOMMENT THIS TOO, IF YOU'RE MAKING <GrowthChart/> MOUNT

const Root: React.FC = () => {
  const { t } = useTranslation();
  const patientId = 'test patient';
  const growthCode = 'test growth code';

  //   Ensure that you replace the placeholder UUID and LOINC code with actual values that exist in your OpenMRS system.
  // The fetching and rendering logic assumes that the valueQuantity and effectiveDateTime fields are present in the observation resources returned from the API.

  return (
    <div className={styles.container}>
      <h3 className={styles.welcome}>
        {t('welcomeText', 'Welcome to the O3 Growth Chart Visualisation App --Sample')}
      </h3>

      {/* HERE IS A SAMPLE FILE //HIGHLIGHT AND CONTROL + / TO MAKE ACTIVE/MOUNT
      <GrowthChart /> */}

      <h1>Patient Growth Tracker</h1>
      <FetchedGrowthChart patientId={patientId} growthCode={growthCode} />
    </div>
  );
};

export default Root;
