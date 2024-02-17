import React from 'react';
import { InfoSection } from '../../components';
import { DeleteDataInfo } from './Data';

function DeleteData() {
  return (
    <>
      <InfoSection {...DeleteDataInfo} />
    </>
  );
}

export default DeleteData;