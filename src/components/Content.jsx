import {getTracks} from "../script";
import Tracks from "./Tracks";

const Content = (props) => {
    return(
        <div className="Root__main-view">
            <div className="main-view-container">
                <div className="under-main-view"></div>
                <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden main-view-container__scroll-node os-host-overflow os-host-overflow-y os-host-transition">
                    <div className="os-resize-observer-host observed">
                        <div className="os-resize-observer" style={{left: "0px", right: "auto"}}></div>
                    </div>
                    <div className="os-padding">
                        <div className="os-viewport os-viewport-native-scrollbars-invisible" style={{overflowY: "scroll"}}>
                            <div className="os-content" style={{padding: "0px", height: "100%", width: "100%"}}>
                                <div className="main-view-container__scroll-node-child-spacer"></div>
                                <div className="main-view-container__scroll-node-child" style={{minHeight: "calc(-673px + 100vh)"}}>
                                    <main tabIndex="-1" aria-label="Spotify – Web Player">
                                        <div className="HsbczDqu9qjcYr7EIdHR" style={{backgroundColor: "rgb(83, 83, 83)"}}></div>
                                        <section>
                                            <div className="uIJTvxFOg2izOY7aRRiU">
                                                <div className="I3EivnXTjYMpSbPUiYEg contentSpacing">
                                                    <div className="q8AZzDc_1BumBHZg0tZb">
                                                        <div className="OMuRYOdpUbGif12_lRJl">
                                                            <div className="onVWL7MW4PW9FyVajBAc">
                                                                <h2 className="Type__TypeElement-goli3j-0 dnNHjd">
                                                                    <a draggable="false" data-testid="see-all-link" className="MfVrtIzQJ7iZXfRWg6eM" href="#">Spotify Albums</a>
                                                                </h2>
                                                            </div>
                                                            <a draggable="false" className="a7lvtXATo3HALtrsOHtO HOgue4Eg4UdBR58M0633" href="#">
                                                                <span className="Type__TypeElement-goli3j-0 igMXER">See all</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="grid-cards">
                                                        {props.albums['items'] && props.albums.items.map(item => (
                                                            <div className="LunqxlFIupJw_Dkx6mNx" key={item.id} onClick={async e => {
                                                                let data = await getTracks(item.id)
                                                                console.log(data)
                                                                props.popupContent(<Tracks tracks={data} img={item.images[1].url}/>)
                                                            }}>
                                                                <div draggable="true" className="XiVwj5uoqqSFpS4cYOC6">
                                                                    <div className="xBV4XgMq0gC5lQICFWY_">
                                                                        <div className="g4PZpjkqEh5g7xDpCr2K">
                                                                            <div>
                                                                                <img aria-hidden="false" draggable="false" loading="lazy" src={item.images[1].url} data-testid="card-image" alt="" className="mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt yOKoknIYYzAE90pe7_SE Yn2Ei5QZn19gria6LjZj"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="E1N1ByPFWo4AJLHovIBQ">
                                                                        <a draggable="false" title="Today's Top Hits" className="Nqa6Cw3RkDMV8QnYreTr" dir="auto" href="/playlist/37i9dQZF1DXcBWIGoYBM5M">
                                                                            <div className="Type__TypeElement-goli3j-0 kgUbfh nk6UgB4GUYNoAcPtAQaG">{item.name}</div>
                                                                        </a>
                                                                        <div className="Type__TypeElement-goli3j-0 eDbSCl Za_uNH8nTZ0qCuIqbPLZ">{item.artists.map(art => (
                                                                            <span key={art.id}>{art.name}</span>
                                                                        ))}</div>
                                                                    </div>
                                                                    <div className="tsv7E_RBBw6v0XTQlcRo" data-testid="card-click-handler"></div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;