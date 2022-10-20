const Tracks = (props) => {
    var audio = null
    return (
        <div role="grid" aria-rowcount="5" aria-colcount="4" aria-label="популярные треки" className="ShMHCGsT93epRGdxJp2w Ss6hr6HYpN4wjHJ9GHmi" tabIndex="0" data-testid="track-list">
            <div style={{transform: "translateY(0px)"}} role="presentation">
                {props.tracks['items'] && props.tracks.items.map(item => (
                    <div role="row" aria-rowindex="1" aria-selected="false" key={item.id}>
                        <div data-testid="tracklist-row" className="h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4" draggable="true" role="presentation">
                            <div className="NZAU7CsuZsMeMQB8zYUu" role="gridcell" aria-colindex="1" tabIndex="-1">
                                <div className="VpYFchIiPg3tPhBGyynT">
                                    <span className="Type__TypeElement-goli3j-0 jsusuc VrRwdIZO0sRX1lsWxJBe">
                                        {item.track_number}
                                    </span>
                                    <button className="RfidWIoz8FON2WhFoItU" aria-label="Включить трек «ОЙДА» исполнителя Oxxxymiron" tabIndex="-1" data-id={item.track_number - 1} onClick={e => {
                                        let src = props.tracks.items[e.currentTarget.dataset.id].preview_url
                                        audio && audio.pause();
                                        audio = new Audio(src);
                                        audio.play();
                                    }}>
                                        <svg role="img" height="24" width="24" className="Svg-ytk21e-0 jAKAlG UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24">
                                            <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="gvLrgQXBFVW6m9MscfFA" role="gridcell" aria-colindex="2" tabIndex="-1">
                                <img aria-hidden="false" draggable="false" loading="eager" src={props.img} alt="" className="mMx2LUixlnN_Fu45JpFB rkw8BWQi3miXqtlJhKg0 Yn2Ei5QZn19gria6LjZj" width="40" height="40"/>
                                    <div className="iCQtmPqY0QvkumAOuCjr">
                                        <div dir="auto" className="Type__TypeElement-goli3j-0 gwYBEX t_yrXoUO3qGsJS4Y6iXX standalone-ellipsis-one-line">
                                            {item.name}
                                        </div>
                                        <span className="Type__TypeElement-goli3j-0 frNTzl sQcIERaiZKFhOM1LrSmX">
                                            <span aria-label="Контент с пометкой Explicit" className="kpGMQq1KFz620g_BD_dS" title="Контент с пометкой Explicit">
                                                E
                                            </span>
                                        </span>
                                    </div>
                            </div>
                            <div className="bfQ2S9bMXr_kJjqEfcwA" role="gridcell" aria-colindex="3" tabIndex="-1"></div>
                            <div className="HcMOFLaukKJdK5LfdHh0" role="gridcell" aria-colindex="4" tabIndex="-1">
                                <button type="button" role="switch" aria-checked="false" aria-label="Добавить в медиатеку" className="Fm7C3gdh5Lsc9qSXrQwO tGKwoPuvNBNK3TzCS5OH" data-testid="add-button" tabIndex="-1" aria-expanded="false">
                                    <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ytk21e-0 jAKAlG">
                                        <path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path>
                                    </svg>
                                </button>
                                <div className="Type__TypeElement-goli3j-0 eDbSCl Btg2qHSuepFGBG6X0yEN">
                                    {Math.floor(item.duration_ms/60000) + ':' + Math.floor(item.duration_ms % 60000/ 1000).toString().padStart(2, "0")}
                                </div>
                                <button type="button" aria-haspopup="menu" aria-label="Открыть контекстное меню: Oxxxymiron&nbsp;— ОЙДА" className="T0anrkk_QA4IAQL29get mYN_ST1TsDdC6q1k1_xs" data-testid="more-button" tabIndex="-1" aria-expanded="false">
                                    <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ytk21e-0 jAKAlG">
                                        <path d="M3 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tracks;