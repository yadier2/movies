import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = ({url}) => {
    const [state, setState] = useState({
        url: '',
        display: 'none'
    })
    return (
        <div>

            <button
                type="button" className="btn btn-primary mt-2 w-100 mb-5"
                onClick={() => setState({
                    ...state,
                    url:url,
                    display: 'flex'
                })}
            >Ver trailer</button>
            <div style={{
                position: 'fixed',
                background: 'rgba(0,0,0,0.6)',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                margin: '0',
                textAlign: 'center',
                justifyContent: 'center',
                display: state.display,
                alignItems: 'center',
               
            }}>
                <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', background: '#000', color: '#fff'}}>


                    <div style={{
                        cursor: 'pointer', width: 'inherit',
                        marginTop: '10px'
                    }}
                        className="d-flex justify-content-between fs-4 p-2  "
                    >
                        <div>Reproducir trailer</div> 
                        <div className=""
                            onClick={() => {
                                setState({
                                    ...state,
                                    url: '',
                                    display: 'none'
                                })
                            }}
                        >Cerrar X</div>
                        </div>
                    <ReactPlayer
                        playing={true}
                        url={state.url}
                        controls={true}
                        width='100%'
                        height='90vh'
                    />

                </div>
            </div>
        </div>
    )
}
