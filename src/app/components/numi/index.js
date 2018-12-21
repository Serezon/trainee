import {
  compose,
  withState,
  withHandlers,
} from 'recompose'
import { connect } from 'react-redux'

import Numi from './Numi'
import { numiOperations } from '../../redux/ducks/numi'

const mapDispatchToProps = ({
  calculateExpression: numiOperations.calculator,
})

const mapStateToProps = ({ numi }) => ({
  numi,
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('calcValue', 'setCalcValue', ''),
  withState('result', 'setResult', 0),
  withState('previous', 'setPrevious', 0),
  withHandlers({
    onChange: ({ setCalcValue }) => (event) => {
      event.preventDefault()
      const { value } = event.target
      setCalcValue(value)
    },
    calculate: ({
      setResult,
      setCalcValue,
      setPrevious,
      calculateExpression,
    }) => (event) => {
      if (event.key === 'Enter') {
        const { value } = event.target
        setPrevious(value)

        const result = calculateExpression(value)

        setResult(result)
        setCalcValue('')
      }
    },
  }),
)

export default enhance(Numi)
