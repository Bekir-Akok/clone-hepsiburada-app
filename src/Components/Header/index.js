import React, { useState } from 'react';
import {
    Header,
    Sec,
    Logo,
    SearchBar,
    User,
    SignUp,
    Checkout,
    Sec1,
    Sec2,
    Input,
    SearchIcon,
    SearchButton,
    SignIcon,
    SignText,
    H4,
    H6,
    CheckIcon,
    H3,
    Color1,
    Color2,
    Color3,
    Color4,
    Color5,
    Color6,
    Div
} from './style';
import logo from '../img/logo.png';
import DropDown from '../DropDown/index';

const HeaderComp = () => {

    const [background, setBackground] = useState(false);

    const backgroundChange = () => {
        setBackground(!background)
    }

    return (
        <>
            <Div/>
            <Header>
                <Sec>
                    <Logo src={logo}/>
                    <SearchBar>
                        <SearchIcon/>
                        <Input type="text" placeholder="Ürün, kategori veya marka ara" onFocus={backgroundChange} onBlur={backgroundChange} />
                        <SearchButton type="submit" background={background} >ARA</SearchButton>
                    </SearchBar>
                    <User>
                        <SignUp>
                            <SignIcon/>
                            <SignText>
                                <H4>Giriş yap</H4>
                                <H6>veya üye ol</H6>
                            </SignText>
                        </SignUp>
                        <Checkout>
                            <CheckIcon/>
                            <H3>Sepetim</H3>
                        </Checkout>
                    </User>
                </Sec>
            </Header>
            <Sec1>
                <Color1/>
                <Color2/>
                <Color3/>
                <Color4/>
                <Color5/>
                <Color6/>
            </Sec1>
            <Sec2>
                <DropDown/>
            </Sec2>
        </>
    )
}

export default HeaderComp
