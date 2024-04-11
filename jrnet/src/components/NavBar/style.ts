import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 5rem;
    background: var(--first-blue);
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    div.first-element-nav {
        max-width: 992px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        > img {
            max-width: 100px;
        }

        > ul {
            display: flex;
            flex-direction: row;
            padding: 1rem;
            align-items: center;

            > li {
                list-style-type: none;
                padding: 0 .5rem;
                color: var(--white);
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            
                > a {
                    text-decoration: none;
                    color: inherit;
                }

                > span {
                    position: absolute;
                    bottom: -3px;
                    right: 0;
                    height: 2px;
                    width: 60%;
                    background: var(--third-blue);
                }

                > svg {
                    margin-bottom: 0;
                    margin-right: 0.24rem;
                    cursor: pointer;
                }
            }
        }

        > div {
            display: flex;
            flex-direction: row;
            align-items: center;

            > button {
                margin: 0.16rem 0.24rem;
                border-radius: 0.24rem;
                border: 1px solid var(--second-green);
                background: transparent;
                color: var(--white);
                width: 8rem;
                height: 1.8rem;
                &:first-child {
                    background: var(--primary-green);
                    font-weight: bold;
                }
                &:last-child {
                    font-size: 50%;
                }
                > a {
                    color: inherit;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                }
            }
            
        }
    }

    @media (max-width: 576px) {
        img {
        }
    }

    @media (max-width: 768px) {
        > div {
            ul {
                flex-direction: column;
                position: absolute;
                top: 5rem;
                background: var(--primary-blue);
                width: 100%;
            }

            > div {
                flex-direction: column;

            }
        }
    }
`;

type DropDownProps = {
    show: boolean;
}

export const DropDown = styled.div<DropDownProps>`
    position: absolute;
    top: 130%;
    left: 20%;
    background: var(--white);
    border-radius: 0.24rem;
    width: 6rem;

    ${props => props.show ? 
        'display: block; visibility: visible;' :
        'display: none; visibility: hidden;' 
    }
    
    ul.first-element-dropdown {
        display: flex;
        flex-direction: column;
        padding: 0.16rem;
        width: 100%;

        > li {
            padding-top: 0.24rem;
            padding-bottom: 0.24rem;
            list-style-type: none;
            border-radius: 1rem;
            width: 100%;
            
            > a {
                color: var(--primary-blue);
                text-decoration: none;
                width: 100%;
                text-align: center;
                display: block;
                font-size: 0.8rem;
                white-space: nowrap;
            }
        }

        > li:hover {
            background: var(--first-blue);
            
            > a {
                color: var(--white);
            }
        }
    }
`;
    