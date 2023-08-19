
import {AppBar, Toolbar, styled} from '@mui/material';
import {Menu} from '@mui/icons-material';


const StyledHeader = styled(AppBar)`
    background: #fff;
    height: 70px;

`;
const MenuIcon = styled(Menu)`
    color: #000;
`;

const Header = () => {
    return(
        <StyledHeader>
            <Toolbar>
                <MenuIcon />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;