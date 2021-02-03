import styled from 'styled-components';
import { Search } from '@styled-icons/feather/Search';
import { PersonLinesFill } from '@styled-icons/bootstrap/PersonLinesFill';
import { ShoppingCart } from '@styled-icons/heroicons-solid/ShoppingCart';

export const Header = styled.div`
padding: 10px 10%;
`;

export const Div = styled.div`
height: 5vh;
`;

export const Sec = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
`;

export const Logo = styled.img`
object-fit:cover;
width: 200px;
`;

export const SearchBar = styled.div`
display:flex;
align-items:center;
`;

export const User = styled.div`
display:flex;
align-items:center;
`;

export const SignUp = styled.div`
border:2px solid #777;
color: #777;
width: 130px;
height: 45px;
border-radius: 5px;
display:flex;
align-items:center;
justify-content: space-around;
margin-right: 10px;
`;

export const SignIcon = styled(PersonLinesFill)`
width: 30px;
color:#777;
`;

export const SignText = styled.div`
display:flex;
flex-direction: column;
align-items:left;
`;

export const H4 = styled.h4`
color: #777;
font-weight: 700;
font-size: 16px;
margin:0;
`;

export const H6 = styled.h6`
color: #777;
font-weight: 400;
font-size: 11px;
margin:0;
`;

export const Checkout = styled.div`
background-color: #777;
color:#fff;
display:flex;
justify-content: space-around;
align-items:center;
width: 130px;
height: 45px;
border-radius: 5px;
border:2px solid #777;
`;

export const CheckIcon = styled(ShoppingCart)`
width: 30px;
`;

export const H3 = styled.h3`
font-size: 18px;
`;

export const Sec1 = styled.div`
display:flex;
`;

export const Color1 = styled.div`
height: 10px;
background-color: #7723db;
flex: 1;
`;
export const Color2 = styled.div`
height: 10px;
background-color: #47c7ec;
flex: 1.5;
`;
export const Color3 = styled.div`
height: 10px;
background-color: #ee6020;
flex: 3;
`;
export const Color4 = styled.div`
height: 10px;
background-color: #f6a029;
flex: 1.3;
`;
export const Color5 = styled.div`
height: 10px;
background-color: #6c1e5c;
flex: 0.7;
`;
export const Color6 = styled.div`
height: 10px;
background-color: #45b795;
flex: 1.2;
`;

export const Sec2 = styled.div`

`;

export const Input = styled.input`
font-size: 18px;
height: 35px;
width: 500px;
padding: 10px 10px 0px 45px;
border-radius: 5px;
border: 2px solid #777;
outline:none;

::placeholder{
    font-weight: 700;
    color: #484848;
}
:focus,
:active{
    border: 2px solid #ed6324;
}
`;

export const SearchIcon = styled(Search)`
color: #777;
width: 28px;
position:relative;
left: 5%;
top: 5%;
`;

export const SearchButton = styled.button`
font-size: 15px;
font-weight: 700;
height: 50px;
width: 70px;
color:#fff;
background-color: ${props => (props.background ? '#ed6324' : '#777')};
position:relative;
right: 3%;
border-top-right-radius: 10px;
border-bottom-right-radius: 5px;
outline:none;
border: none;
`;