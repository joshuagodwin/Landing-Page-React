import styled from 'styled-components';


export const InfoSec = styled.div`
    color: #fff;
    padding: 80px 0;
    background: ${({lightBg}) => (lightBg ? '#0C9F16' : '#131313')};
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 0px;
  width: 100%;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-bottom: 65px;
    text-align: center;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;  
    text-align: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#fff' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const ImgButton = styled.img`
  padding-right: 0;
  border: 0;
  width: 250px;
  vertical-align: left;
  display: inline-block;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#ECEFF1' : '#1c2237')};

  ul {
    display: inline-block;
    text-align: left;
    margin: 0 auto;
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }
`;

export const VideoContainer = styled.div`
position: relative;
overflow: hidden;
height: 0;
padding-bottom: 56.25%; /* creates a 16:9 aspect ratio */
@media (min-width: 300px) and (max-width: 1200px) {
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}
`

export const VideoEmbed = styled.iframe`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
max-width: 100%;
`

export const BadgeMasterContainer = styled.div`
flex: 1;
display: flex;
flex-direction: row;
width: 100%;


@media (min-width: 480px) and (max-width: 1200px) {
  justify-content: center;
  flex-direction: column;
}

@media (min-width: 320px) and (max-width: 480px) {
  justify-content: center;
  flex-direction: column;
}
`

export const BadgeIndividualContainer = styled.div`
display: flex;
height: 60px;
margin: 5px;
justify-content: center;
align-items: center;
`