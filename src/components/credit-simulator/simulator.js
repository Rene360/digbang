import React, { useState, useEffect } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './simulator.css'

function Simulator() {
  const [amountValue, setAmountValue] = useState(5000)
  const [termValue, setTermValue] = useState(3)
  const [fee, setFee] = useState()

  const handleAmountChange = (amount) => {
    setAmountValue(amount)
  }

  const handleTermChange = (term) => {
    setTermValue(term)
  }

  useEffect(() => {
    let totalFee = parseFloat(amountValue / termValue)
    totalFee = totalFee.toFixed(2)
    totalFee = totalFee
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    setFee(totalFee)
  })

  return (
    <div className="simulator-wrapper">
      <div className="simulator">
        <header>
          <h1 className="simulator-title">Simulá tu crédito</h1>
        </header>

        <div className="simulator-slides">
          <div className="slide">
            <div className="slide-header">
              <h3>Monto total</h3>
              <input
                value={amountValue}
                onChange={(e) => handleAmountChange(e.target.value)}
              />
            </div>
            <Slider
              className="slide-bar"
              min={5000}
              max={50000}
              onChange={handleAmountChange}
              range={false}
              defaultValue={amountValue}
              value={amountValue}
              marks={{ 5000: '$5000', 50000: '$50000' }}
            />
          </div>
          <div className="slide">
            <div className="slide-header">
              <h3>Plazo</h3>
              <input
                value={termValue}
                onChange={(e) => handleTermChange(e.target.value)}
              />
            </div>
            <Slider
              className="slide-bar"
              min={3}
              max={24}
              onChange={handleTermChange}
              range={false}
              defaultValue={termValue}
              value={termValue}
              marks={{ 3: '3', 24: '24' }}
            />
          </div>
        </div>

        <div className="total-fee">
          <h2>Cuota fija por mes </h2>
          <p>$ {fee}</p>
        </div>

        <div className="actions">
          <button className="credit">Obtené crédito</button>
          <button className="detail">Ver detalle de cuotas</button>
        </div>
      </div>
    </div>
  )
}

export default Simulator
