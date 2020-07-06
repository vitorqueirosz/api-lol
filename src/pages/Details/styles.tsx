import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display:flex;
    width: 100%;
    margin: 0 auto;
    /* max-width: 1500px; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* padding: 32px; */
    

    h5 {
        display: flex;
        justify-content: center;

    img {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 2000px;
        height: 100vh;
        opacity: 0.2;
    }
    }
    span {
        letter-spacing: 10px;
        font-size: 20px;
        color: #bbb;
    }
    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        max-width: 1351px;
        margin: 20px 0 10px 0;
        position: relative;
        padding-left: 10px;
    }
    a {
        display: flex;
        color: #fff;
        margin-left: 20px;
    }
    svg {
        align-self: flex-end;
    }
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    width: 100%;
    /* max-width: 2000px; */
    margin: 0;
    span {
        color: #CCA003;
        text-transform: uppercase;
        letter-spacing: 0;
        font-size: 32px;
    }
    h1 {
        font-size: 32px;
        color: #fff;
        opacity: 0.9;
    }
    img {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 2000px;
        height: 100vh;
        opacity: 0.6;
    }

    @keyframes jump {
        30%  { transform: translateY(-100px); }
        50%  { transform: translateY(0); }
    }
    .jump {
        transform-origin: bottom;
        animation: jump .5s alternate;

        
    }
`;
export const GridContainer = styled.div`
    display: flex;
    
`;
export const GridLine = styled.div`
    width: 1px;
    background: #9a9a9a;
`;
export const AsideContent = styled.div`
    width: 100px;
    
    text-transform:  uppercase;
    transform-origin: left top;
    transform: rotate(-90deg) ;
    color: #8B8B8B;
    
    position: absolute;
    left: 20em;
    bottom: 33em;
    /* font-size: 10px; */
    text-align: center;   
    letter-spacing: 5px;

    margin-bottom: 55px;

    span {
        margin-right: 70px;
        font-size: 30px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
export const MainContent = styled.div`
    margin: 0 auto;
    padding-top: 72px;
    width: 100%;
    padding-left: 20px;
    max-width: 1120px;
    height: 900px;

    div {
         display: flex;
         align-items: center;
         :nth-child(1) {
    }
    img {   
        height: 90px;
        width: 100%;
        max-width: 100px;
        opacity: 0.99;
    }

    }

    aside {
        margin-right: 30px;
    }
    h1 {
        font-size: 40px;
        color: #fff;
    }

    span {
        font-size: 20px;
        color: #EDD16D;
        letter-spacing: 0px;
        
    }
    

`;
export const LoreContent = styled.div`
    height: 140px;
    background: rgba(0,0,0,0.4);
    display: flex;
    margin: 100px 0 100px 0;
    padding-left: 16px;
    div {
        width: 100%;
        max-width: 1000px;
    }

    p {
        font-size: 20px;
        color: #fff;
        width: 100%;
        line-height: 32px;
        /* max-width: 700px; */
    }
`;
export const SkillsContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    aside {
        display: flex;
        margin-right: 0;
       div {
           display: flex;
           flex-direction: column;
           align-items: center;
            
        :nth-child(1) {
            margin-bottom: 30px;
        }

           & + div {
               margin-left: 40px;
           }

           img {
            margin-bottom: 5px;
            height: 60px;
            cursor: pointer;
            width: 100%;
            max-width: 60px;
            opacity: 0.9;
           }
           span {
               color: #9a9a9a;
           }
       } 
    }
    strong {
        display: flex;
        letter-spacing: 10px;
        font-size: 25px;
        font-weight: normal;
        margin-bottom: 20px;
        color: #fff;
        border-bottom: 1px solid #444;
    }
`;
export const SkillModal = styled.div`
    display: flex;
    justify-content: center;
    

    .SkillModal {
        visibility: hidden;
    }
    .show {
        visibility: visible;
    }

    div {
    height: 100%;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    padding: 16px 16px 32px;
    background: rgba(0,0,0,0.9);
    /* background: #656565; */
    width: 100%;
    width: 800px;
  
    span {
        margin-bottom: 24px;
        letter-spacing: 2px;
        color: #f0f0f5;
    }
        aside {
            display: flex;
            align-items: center;
            p {
                font-size: 20px;
                color: #fff;
            }
            img {
                margin-right: 15px;
                height: 100%;
                max-height: 70px;
                width: 100%;
                max-width: 70px;
                opacity: 0.9;
            }
        }

    }


`;
export const RightContent = styled.div`
    
    margin: auto;
    margin-left: 30px;
    img {
        width: 100%;
        max-width: 300px;
        opacity: 0.9;
    }
    div {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        span {
            font-size: 20px;
            color: #555555;
            letter-spacing: 5px;
        }
    }
`;


export default styled;