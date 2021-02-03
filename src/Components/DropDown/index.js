import React, { useState } from 'react';
import {
    DropMenu,
    DropUl,
    DropLi,
    Dropa,
    DropdownMenu,
    Ul,
    Li,
    A,
} from './style';


const Dropdown = () => {

    const dropdownMenu = [
        {
        id:1,
        menu: "Elektronik",
        drop1: "Bilgisayar/Tablet",
        drop2: "Yazıcılar&Projeksiyon",
        drop3: "Telefon&Telefon Aksesuarları",
        drop4: "TV, Görüntü&Ses Sistemleri",
        drop5: "Beyaz Eşya",
        drop6: "Elektrikli Ev Aletleri",
        drop7: "Bilgisayar/Tablet"
    },
        {
        id:2,
        menu: "Moda",
        drop1: "Moda Anasayfa",
        drop2: "Moda Kampanyaları",
        drop3: "Kadın ",
        drop4: "Erkek",
        drop5: "Erkek Aksesuarı & Takı",
        drop6: "Kadın Ayakkabı",
        drop7: "Çocuk"
    },
        {
        id:3,
        menu: "Ev, Yaşam, Kırtasiye, Ofis",
        drop1: "Hepsi Home",
        drop2: "Ev Tekstili",
        drop3: "Ev Dekarasyon",
        drop4: "Ofis/Kırtasiye",
        drop5: "Banyo",
        drop6: "Elektrikli Ev Aletleri",
        drop7: "Yurt Dışından"
    },
        {
        id:4,
        menu: "Oto, Bahçe, Yapı, Market",
        drop1: "Oto Aksesuar",
        drop2: "Bahçe",
        drop3: "Elektrik & Tesisat ",
        drop4: "İş Güvenliği ",
        drop5: "Tüm Motosiklet Ürünleri ",
        drop6: " Yapı Market",
        drop7: "Banyo"
    },
        {
        id:5,
        menu: "Anne, Bebek, Oyuncak",
        drop1: "Bilgisayar/Tablet",
        drop2: "Yazıcılar&Projeksiyon",
        drop3: "Telefon&Telefon Aksesuarları",
        drop4: "TV, Görüntü&Ses Sistemleri",
        drop5: "Beyaz Eşya",
        drop6: "Elektrikli Ev Aletleri",
        drop7: "Bilgisayar/Tablet"
    },
        {
        id:6,
        menu: "Spor, Outdoor",
        drop1: "Bilgisayar/Tablet",
        drop2: "Yazıcılar&Projeksiyon",
        drop3: "Telefon&Telefon Aksesuarları",
        drop4: "TV, Görüntü&Ses Sistemleri",
        drop5: "Beyaz Eşya",
        drop6: "Elektrikli Ev Aletleri",
        drop7: "Bilgisayar/Tablet"
    },
        {
        id:7,
        menu: "Kozmetik Kişisel Bakım",
        drop1: "Bilgisayar/Tablet",
        drop2: "Yazıcılar&Projeksiyon",
        drop3: "Telefon&Telefon Aksesuarları",
        drop4: "TV, Görüntü&Ses Sistemleri",
        drop5: "Beyaz Eşya",
        drop6: "Elektrikli Ev Aletleri",
        drop7: "Bilgisayar/Tablet"
    },
        {
        id:8,
        menu: "Süpermarket, Pet Shop",
        drop1: "Bilgisayar/Tablet",
        drop2: "Yazıcılar&Projeksiyon",
        drop3: "Telefon&Telefon Aksesuarları",
        drop4: "TV, Görüntü&Ses Sistemleri",
        drop5: "Beyaz Eşya",
        drop6: "Elektrikli Ev Aletleri",
        drop7: "Bilgisayar/Tablet"
    },
        {
        id:9,
        menu: "Kitap Müzik, Film, Hobi",
        drop1: "Bilgisayar/Tablet",
        drop2: "Yazıcılar&Projeksiyon",
        drop3: "Telefon&Telefon Aksesuarları",
        drop4: "TV, Görüntü&Ses Sistemleri",
        drop5: "Beyaz Eşya",
        drop6: "Elektrikli Ev Aletleri",
        drop7: "Bilgisayar/Tablet"
    },
    ]

    const [drop, setDrop] = useState(false)

    const dropMenu = () => {
        setDrop(!drop)
    }

    return (
        <>
            <DropMenu>
                <DropUl>
                    {
                        dropdownMenu.map((menu) => 
                            <>
                                <DropLi onMouseOver={dropMenu} >
                                    <Dropa>{menu.menu}</Dropa>
                                </DropLi>
                                <DropdownMenu drop={drop}   onMouseOut={dropMenu}>
                                    <Ul>
                                        <Li>
                                            <A>{menu.drop1}</A>
                                        </Li>
                                        <Li>
                                            <A>{menu.drop2}</A>
                                        </Li>
                                        <Li>
                                            <A>{menu.drop3}</A>
                                        </Li>
                                        <Li>
                                            <A>{menu.drop4}</A>
                                        </Li>
                                        <Li>
                                            <A>{menu.drop5}</A>
                                        </Li>
                                        <Li>
                                            <A>{menu.drop6}</A>
                                        </Li>
                                        <Li>
                                            <A>{menu.drop7}</A>
                                        </Li>
                                    </Ul>
                                </DropdownMenu>
                            </>
                        )
                    }
                </DropUl>
            </DropMenu>
        </>
    )
}

export default Dropdown
