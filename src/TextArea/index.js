import React, { PropTypes } from 'react'
import classNames from 'classnames'

import View from '../core/View'
import ThemedComponent from '../utils/theming/ThemedComponent'
import Core from './Core'

import styles from './styles.css'

export default class TextArea extends ThemedComponent {
  static Core = Core

  static propTypes = {
    autoComplete: PropTypes.oneOf(['on', 'off']),
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool.isRequired,
    name: PropTypes.string,
    maxLength: PropTypes.number,
    onArrowDown: PropTypes.func,
    onArrowLeft: PropTypes.func,
    onArrowRight: PropTypes.func,
    onArrowUp: PropTypes.func,
    onBlur: PropTypes.func,
    onChangeText: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    resizable: PropTypes.bool,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    autoComplete: 'off',
    disabled: false,
    resizable: false,
    type: 'default'
  }

  constructor (props, context) {
    super(props, context, {
      namespace: 'TextArea',
      styles
    })
  }

  render () {
    const {
      className,
      resizable,
      ...other
    } = this.props

    const { theme } = this

    return (
      <View className={ theme.txt }>
        <Core
          { ...other }
          className={ classNames(theme.input, {
            [theme.resizable]: resizable
          }, className) }
        />
      </View>
    )
  }
}
