import LogoSvg from '../assets/logo.png';

/**
 * Logo component that displays the application logo and title.
 *
 * @returns {JSX.Element} The rendered Logo component.
 */
export default function Logo() {
    return (
        <div className='logo'>
            <img src={LogoSvg} alt='Logo' width='50' height='50' />
            <h1>ToDo List</h1>
        </div>
    );
}
