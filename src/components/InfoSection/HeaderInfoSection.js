import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, ImgButton} from './InfoSection.elements'
import { Container } from '../../globalStyles'

import { ReactComponent as AppleStoreBadge } from '../../images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
 const HeaderInfoSection = ({ 
    
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    img,
    alt,
    imgStart,
    start
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <div style={{display: 'grid', gridTemplateColumns: '0fr 3fr'}}>
                                <a style={{gridColumn: '1', gridRow: '1'}} href="https://testflight.apple.com/join/JOcbB5ts" target="_blank" alt='get it on apple testflight' rel="noopener noreferrer">
                                    <AppleStoreBadge width={200} height={58}/>
                                </a>
                                <a style={{gridColumn: '1', gridRow: '2'}} target='_blank' rel="noopener noreferrer" href='https://play.google.com/store/apps/details?id=com.joshuagodwin.lingotheory&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                    <ImgButton style={{width: '200px'}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                                </a>
                            </div>
                            </TextWrapper>

                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default HeaderInfoSection;