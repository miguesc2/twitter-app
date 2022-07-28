import React from 'react'

function LayoutRightMessage() {


  return (
    <div>
      <h5 className="h1_notifications">Messages</h5>   
                <div className="Home__center_whatprofile messages_whatprofile">
                    <div className="Home__center_whatprofile-img">
                        <img title="view profile" src="data:image/jpeg;base64,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" alt="imgProfile" /> 
                    </div>
                
                    <div className="Home__center_whatprofile-content">
                        <div className="Home__center_whatprofile-input">
                            <div className="Home__center_topTweetText">
                                <div>
                                    <span className="Home__center_TextProfile">David Bisval</span>
                                    <span className="Home__center_TextUsername">@user46</span>
                                </div>
                                
                                <div>
                                    <svg viewBox="0 0 30 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
                                        <g fill="rgba(29,161,242,1.00)">
                                            <circle cx="5" cy="12" r="2"></circle>
                                            <circle cx="12" cy="12" r="2"></circle>
                                            <circle cx="19" cy="12" r="2"></circle>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Home__center_whatprofile messages_whatprofileI">
                    <div className="Home__center_whatprofile-img">
                        <img title="view profile" src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" /> 
                    </div>
                
                    <div className="Home__center_whatprofile-content">
                        <div className="Home__center_whatprofile-input">
                            <div className="Home__center_topTweetText">
                                <div>
                                    <span className="Home__center_TextProfile">Uxue</span>
                                    <span className="Home__center_TextUsername">@imOxu3</span>
                                </div>
                                
                                <div>
                                    <svg viewBox="0 0 30 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
                                        <g fill="rgba(29,161,242,1.00)">
                                            <circle cx="5" cy="12" r="2"></circle>
                                            <circle cx="12" cy="12" r="2"></circle>
                                            <circle cx="19" cy="12" r="2"></circle>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Home__center_whatprofile messages_whatprofileI">
                    <div className="Home__center_whatprofile-img">
                        <img title="view profile" src="https://cdn.pixabay.com/photo/2021/05/04/20/57/woman-6229693__340.jpg" alt="imgProfile" /> 
                    </div>
                
                    <div className="Home__center_whatprofile-content">
                        <div className="Home__center_whatprofile-input">
                            <div className="Home__center_topTweetText">
                                <div>
                                    <span className="Home__center_TextProfile">Obdulia</span>
                                    <span className="Home__center_TextUsername">@obdulia88</span>
                                </div>
                                
                                <div>
                                    <svg viewBox="0 0 30 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
                                        <g fill="rgba(29,161,242,1.00)">
                                            <circle cx="5" cy="12" r="2"></circle>
                                            <circle cx="12" cy="12" r="2"></circle>
                                            <circle cx="19" cy="12" r="2"></circle>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default LayoutRightMessage