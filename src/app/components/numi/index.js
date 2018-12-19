import {
  compose,
  withState,
  withHandlers,
} from 'recompose'
import { connect } from 'react-redux'
import Numi from './Numi'
import Calculator from './calculator'
import { send } from '../../redux/ducks/numi/operations'
import { isError } from './modules'

const enhance = compose(
  connect(),
  withState('calcValue', 'setCalcValue', ''),
  withState('result', 'setResult', 0),
  withHandlers({
    onChange: ({ setCalcValue }) => (event) => {
      event.preventDefault()
      const { value } = event.target

      console.log('From Numi comp:', value)
      setCalcValue(value)
    },
    calculate: ({ setResult, dispatch }) => (event) => {
      if (event.key === 'Enter') {
        const { value } = event.target
        const result = Calculator(value, dispatch)

        if (isError(result)) {
          setResult(result.error)
        } else {
          dispatch(send(result))
          setResult(result)
        }
      }
    },
  }),
)

export default enhance(Numi)
