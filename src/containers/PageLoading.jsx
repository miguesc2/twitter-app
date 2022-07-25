import React from 'react'
import '../assets/styles/PageLoading.css'

const PageLoading = () => (
  <>
    <div style={{ color: 'red', marginTop:'20px' }}>
      If no posts appear, there may be a poor internet connection or they may not exist.
    </div>
    
    <div className="PageLoading">
      <div className="lds-grid">
        <div /><div /><div />
      </div>
    </div>
  </>
)

export default PageLoading