import Hamburger from './Hamburger';
import IconContainer from './IconContainer';
import LaHausIcon from './LaHausIcon';
import MenuContainer from './MenuContainer'
const Navbar = () => {
    return (
        <header className=" fixed flex flex-row justify-between w-full h-16 bg-white border-b px-4 z-50">
            <IconContainer>
                <Hamburger width="24px" height="24px"/>
                <LaHausIcon/>
                <span className="invisible self-end sm:visible text-2xl pl-2">LaHaus</span>
            </IconContainer>
            <MenuContainer/>
        </header>
    );
}
export default Navbar