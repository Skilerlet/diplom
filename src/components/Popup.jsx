const Popup = (props) => {
    return (
        <div className="popup-box">
            <div className="box">
                <div className='popup-header'>
                    <span className="close-icon" onClick={props.closePopup}>x</span>
                </div>
                <div className='popup-content'>
                    {props.content}
                </div>
            </div>
        </div>
    );
}
export default Popup;