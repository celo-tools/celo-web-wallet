import { Color } from '../../styles/Color'
import { Styles } from '../../styles/types'

export const sharedInputStyles: Styles = {
  borderRadius: 4,
  outline: 'none',
  border: `1px solid ${Color.borderInactive}`,
  ':focus': {
    borderColor: Color.borderActive,
  },
  '::placeholder': {
    color: Color.borderInactive,
    opacity: 1 /* Firefox */,
  },
  ':disabled': {
    background: '#FAFAFA',
    color: Color.primaryBlack,
  },
}

export const sharedInputStylesWithError: Styles = {
  ...sharedInputStyles,
  borderRadius: 4,
  outline: 'none',
  border: `1px solid ${Color.borderError}`,
  ':focus': {
    borderColor: Color.borderError,
  },
}

export const getSharedInputStyles = (isError: boolean | undefined = undefined) =>
  isError ? sharedInputStylesWithError : sharedInputStyles
