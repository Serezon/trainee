import React from 'react'
import './styles.sass'

const Numi = ({
  onChange,
  calcValue,
  result,
  calculate,
  /* eslint-disable react/jsx-indent, indent */
}) => (
    <div className="numi">
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
