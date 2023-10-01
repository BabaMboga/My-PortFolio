import React from 'react'
import portfolios from '../../assets/data/portfolioData'

const Modal = ({activeID, setShowModal}) => {
    const portfolio = portfolios.find(portfolio => portfolio.id === activeID);
  return (
    <div>
        <img src={portfolio.imgUrl} alt='' />
    </div>
  )
}

export default Modal