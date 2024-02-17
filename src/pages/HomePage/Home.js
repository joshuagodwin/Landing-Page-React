import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree} from './Data';
import HeaderInfoSection from '../../components/InfoSection/HeaderInfoSection';

const Home = () => {
    return (
        <>
            <HeaderInfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home;