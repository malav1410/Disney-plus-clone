import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://i.ytimg.com/vi/f5CcgFTO274/maxresdefault.jpg"></img>
            </Background>
            <ImageTitle>
                <img src="data:image/png;base64,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" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"></img>
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png"></img>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"></img>
                </GroupWatchButton>                
            </Controls>
            <SubTitle>
                    2018 . 7m . Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A chinese mom who's sad when her grown son leaves home
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative; 
`

const Background = styled.div`
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Controls = styled.div`
    display: flex;   
    align-items: center; 
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb (249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);    
`

const AddButton = styled.button`
margin-right: 16px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`
