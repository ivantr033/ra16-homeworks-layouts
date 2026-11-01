import './IconSwitch.css';

function IconSwitch({ icon, onSwitch }) {
    return (
        <button className="icon-switch-btn" onClick={onSwitch} aria-label="Change design">
            <span className="material-icons">{icon}</span>
        </button>
    );
}

export default IconSwitch;