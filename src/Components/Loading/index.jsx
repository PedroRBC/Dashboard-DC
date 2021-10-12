import React from 'react'
import LoadingScreen from 'react-loading-screen';
function index() {
  
  return (

    <LoadingScreen
    loading={true}
    bgColor='linear-gradient(to left, rgba(255, 0, 149, 0.2), rgba(0, 247, 255, 0.2))'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    text='Loading'
    />

  )
}

export default index
