import React, { useState } from 'react'
import { IoChevronDownCircle, IoChevronUpCircle } from "react-icons/io5";

import { Nav, DropDown } from './style'

type DropdownProps = {
    show: boolean;
}

const SubMenu = ({ show }: DropdownProps) => (
    <DropDown show={show} >
        <ul className='first-element-dropdown'>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Premiações</a></li>
        </ul>
    </DropDown>
)

const NavBar = () => {
    const [showDropdownPlan, setShowDropdownPlan] = useState(false)
    const [showDropdownBusiness, setShowDropdownBusiness] = useState(false)
    const location = window.location.pathname


    const handleDropdownPlan = () => {
        setShowDropdownBusiness(false)
        setShowDropdownPlan(!showDropdownPlan)
    }

    const handleDropdownBusiness = () => {
        setShowDropdownPlan(false)
        setShowDropdownBusiness(!showDropdownBusiness)
    }

    const menu = [
        { name: "Home", link: "/", isActive: true},
        { name: "Planos", link: "/planos", isActive: false, toggleSubMenu: handleDropdownPlan, show: showDropdownPlan },
        { name: "Empresa", link: "/empresa", isActive: false, toggleSubMenu: handleDropdownBusiness, show: showDropdownBusiness },
        { name: "JRtv", link: "/jrtv", isActive: false },
        { name: "Contato", link: "/contato", isActive: false },
    ];

    return (
        <Nav>
            <div className='first-element-nav'>
                <img src='/images/logo.png' alt='' />
                <ul>
                    {
                        menu.map(item => {
                            return (
                                <li key={item.name}>
                                    {
                                        (item.toggleSubMenu !== undefined && item.show !== undefined) && 
                                            <>
                                                {
                                                    !item.show ?
                                                    <IoChevronDownCircle onClick={item.toggleSubMenu} color='#fff' /> :
                                                    <IoChevronUpCircle onClick={item.toggleSubMenu} color='#fff' />
                                                }
                                                
                                                <SubMenu show={item.show}/>
                                            </>
                                    }
                                    <a href={item.link}>{item.name}</a>
                                    {location === item.link && <span />}
                                </li>
                            )
                        })
                    }
                    
                </ul>
                <div>
                    <button>
                        <a href="https://meuportal.redejrnet.net.br/login" target="_blank" rel='noreferrer'>
                            JR CLIENTE
                        </a>    
                    </button>
                    
                    <button>
                        <a href="https://acesso.provedorjrnet.com.br/central_assinante_web/login" target="_blank" rel='noreferrer'>
                            CENTRAL DO ASSINANTE
                        </a>
                    </button>
                </div>
            </div>
        </Nav>
    )
}

export { NavBar }