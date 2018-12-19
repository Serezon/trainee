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

const mapStateToProps = ({ numi }) => ({
  numi,
})

const enhance = compose(
  connect(mapStateToProps),
  withState('calcValue', 'setCalcValue', ''),
  withState('result', 'setResult', 0),
  withState('previous', 'setPrevious', 0),
  withHandlers({
    onChange: ({ setCalcValue }) => (event) => {
      event.preventDefault()
      const { value } = event.target

      console.log('From Numi comp:', value)
      setCalcValue(value)
    },
    calculate: ({
      setResult,
      setCalcValue,
      setPrevious,
      dispatch,
      numi,
    }) => (event) => {
      if (event.key === 'Enter') {
        const { value } = event.target
        setPrevious(value)

        const result = Calculator(value, dispatch, numi)

        if (isError(result)) {
          setResult(result.error)
        } else {
          dispatch(send(result))
          setResult(result)
        }
        setCalcValue('')
      }
    },
  }),
)

export default enhance(Numi)
