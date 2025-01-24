/**
 * IconBtn component that renders a button with an icon.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered IconBtn component.
 */
export default function IconBtn({ children, onClick }) {
    return (
        <button className='btn_icon' onClick={onClick}>{children}</button>
    );
}
