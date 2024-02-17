import React from 'react';
import { InfoSection } from '../../components';
import { investorInfo } from './Data';

function Investors() {
  return (
    <>
      <InfoSection {...investorInfo} />
    </>
  );
}

export default Investors;