import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        margin-top: 26px;
        width: 500px;
        height: 250px;
    }

    div {
        width: 100%;
        max-width: 690px;
        margin: 30px 0 30px 0;
        display: flex;
        justify-content: space-between;
        background: #fff;
        border-radius: 0 8px 8px 0;
        

        .error {
            border: 2px solid #DF5656;
            border-right: none;
        }
        .errorButton {
            border: 2px solid #DF5656;
            border-left: none;
        }
    }
    form {
        background: #fff;
    }
    input {
        
        flex: 1;
        border: 0;
        padding: 16px;
        height: 82px;
        font-size: 24px;
        outline: none;

        

        &::placeholder {
            font-size: 24px;
            letter-spacing: 5px;
            color: #9B9999;
        }
    }
    button {
        border: 0;
        
        outline: none;
        display: flex;
        justify-content: center;
        width: 90px;
        border-radius: 0 8px 8px 0;
        background: rgba(0,0,0, 0.1);
    }
    svg {
        color: #9B9999;
        
    }

`;

export const Content = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr; */
 
    width: 100%;
    max-width: 1000px;
    background: #171616;
    div {
    border-radius: 0px;
        width: 900px;
        background: #171616;
        margin: 0;
    }

    ul {
        list-style: none;
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        width: 100%;

    }
    li {
        
        & + li {
            border-left: 1px solid #756666;
            padding-left: 16px;
        }

        display: flex;
        align-items: center;

        position: relative;
        flex-direction: column;
        width: 100%;
        max-width: 280px;

        aside {
            display: flex;
            position: relative;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 20px;
        }
        span {
            text-transform:  uppercase;
            transform-origin: left top;
            transform: rotate(-90deg) ;
            color: #CBA84F;
            
            position: absolute;
            bottom: 2em;
            font-size: 22px;   
            letter-spacing: 5px;
            

        }

        img {
            height: 100%;
            width: 100%;
            max-width: 210px;
            /* border-radius: 50%; */
            align-self: flex-end;
            margin-left: 40px;
        }

        a {
            letter-spacing: 3px;
            font-size: 20px;
            text-decoration: none;
            color: #8B8B8B;
            background: none;
            padding-right: 0px;
        }
    }
`;

export default styled;