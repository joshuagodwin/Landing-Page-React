import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'

 const InfoSection = ({ 
    
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    buttonLink = '',
    videoEmbedUrl = false,
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
                            <a href={buttonLink}>
                            {buttonLabel && <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>}
                            </a>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        {img && (
                        <ImgWrapper start={false}>
                            <Img style={{marginRight: '48px'}} src={img} alt={alt} />
                        </ImgWrapper>
                        )}
                        {videoEmbedUrl && (
                            <iframe
                                width="560"
                                height="315"
                                src={videoEmbedUrl}
                                frameBorder={0}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        )}

                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;