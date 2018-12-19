import React from 'react'
import './styles.sass'

const Numi = ({
  onChange,
  calcValue,
  result,
  previous,
  calculate,
  /* eslint-disable react/jsx-indent, indent */
}) => (
    <div className="numi">
      <span className="numi_previous">{previous}</span>
      <textarea
        className="numi__input-area"
        value={calcValue}
        onChange={onChange}
        onKeyPress={calculate}
      />
      <span
        className="numi__result"
      >
        {result}
      </span>
    </div>
  )

export default Numi
