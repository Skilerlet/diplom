import {getAlbums} from "../script";

const Topbar = (props) => {
    return (
        <div className="Root__top-bar">
            <header aria-label="Top bar and user menu" className="facDIsOQo9q7kiWc4jSg qxbaGYC8rgMLfyOuYRCM">
                <div className="T1xI1RTSFU7Wu94UuvE6" style={{opacity: 0}}>
                    <div className="EvIR4O7jOSbNmxtMdIQ0"></div>
                </div>
                <div className="VgSbatGBB9XwTH2_dsxg">
                    <button data-testid="top-bar-back-button" aria-label="Go back" className="ql0zZd7giPXSnPg75NR0">
                        <svg role="img" height="24" width="24" className="Svg-ytk21e-0 gFcOie IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24">
                            <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
                        </svg>
                    </button>
                    <button data-testid="top-bar-forward-button" aria-label="Go forward" disabled="" className="ql0zZd7giPXSnPg75NR0 pfMoD1MbelMuF1m8QeMc">
                        <svg role="img" height="24" width="24" className="Svg-ytk21e-0 gFcOie IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24">
                            <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
                        </svg>
                    </button>
                </div>
                <div data-testid="topbar-content-wrapper" className="rovbQsmAS_mwvpKHaVhQ">
                    <div data-testid="topbar-content" className="qHWqOt_TYlFxiF0Dm2fD">
                        <div className="g3Xinb8x23n81ejvS9Uj">
                            <input style={{color: "rgb(0, 0, 0)"}} className="Type__TypeElement-goli3j-0 cPwEdQ QO9loc33XC50mMRUCIvf" maxLength="800" autoCorrect="off" autoCapitalize="none" spellCheck="false" placeholder="What do you want to listen to?" data-testid="search-input" onKeyPress={async e => {
                                if (e.key === 'Enter' && e.currentTarget.value.length !== 0) {
                                    let data = await getAlbums(e.currentTarget.value, 1)
                                    console.log(data)
                                    props.setAlbums(data.albums)
                                }
                            }}/>
                            <div className="t2K4_iLmAyDtH7mcT5Wy">
                                <span className="H6jh9Xd7DNOq3NsLDmCB">
                                    <svg role="img" height="24" width="24" className="Svg-ytk21e-0 jAKAlG mOLTJ2mxkzHJj6Y9_na_" aria-hidden="true" viewBox="0 0 24 24">
                                        <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="GTAFfOA_w5vh_bDaGJAG"></div>
                <button className="Button-sc-1dqy6lx-0 eTTRgy sNde2kloCY28V4GB9AvP">Premium</button>
                <button className="Button-sc-1dqy6lx-0 eTTRgy sNde2kloCY28V4GB9AvP">Support</button>
                <button className="Button-sc-1dqy6lx-0 eTTRgy sNde2kloCY28V4GB9AvP">Download</button>
                <div className="k0vXhOdr0XE83lAQaJ1O"></div>
                <div className="LKFFk88SIRC9QKKUWR5u">
                    <button className="Button-sc-1dqy6lx-0 daAltg sibxBMlr_oxWTfBrEz2G">Sign up</button>
                    <button data-testid="login-button" className="Button-qlcn5g-0 gPMZVP"><span className="ButtonInner-sc-14ud5tc-0 hfXYNQ encore-inverted-light-set">Log in</span></button>
                </div>
            </header>
        </div>
    )
}

export default Topbar;