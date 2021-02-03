import styled from 'styled-components';

export const DropMenu = styled.div`
width:70%;
height: 56px;
margin:auto;
`;

export const DropUl = styled.ul`
display:flex;
align-items:center;
justify-content:space-between;
`;

export const DropLi = styled.li`
list-style: none;
text-align:center;
display:flex;
align-items:center;
padding: 7px 22px;
border-left: 2px solid rgba(72,72,72, 0.1);
border-right: 1px solid rgba(72,72,72, 0.1);
height: 20px;
position:relative;
cursor:pointer;
`;

export const Dropa = styled.a`
color: #484848;
font-size: 16px;
font-weight: 700;
`;

export const DropdownMenu = styled.div`
position:absolute;
width: 68%;
height: 50vh;
top: 23.5%;
left: 17%;
background-color: #484848;
display:${props => props.drop ? 'block' : 'none'} ;
z-index: 1;
`;

export const Ul = styled.ul`
display: flex;
flex-direction:column;
align-items:left;
`;

export const Li = styled.li`
list-style: none; 
`;

export const A = styled.a`
color: #fff;
font-size: 18px;
font-weight: 500;   
`;
