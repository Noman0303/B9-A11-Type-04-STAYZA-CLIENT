import React from 'react'
import newsLetterAnimationData from './Newsletter.json'
import Lottie from 'lottie-react'

const NewsletterAnimation = () => {
  return (
    <div>
        <Lottie
        animationData={newsLetterAnimationData}
        loop={true}
        style={{ width: 200, height: 200 }}
        speed={2}
        ></Lottie>
    </div>
  )
}

export default NewsletterAnimation