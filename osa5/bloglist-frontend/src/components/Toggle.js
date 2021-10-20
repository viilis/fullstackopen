import React,{ useState, useImperativeHandle } from 'react'

const Toggle  = React.forwardRef((props,ref) => {

  Toggle.displayName = 'Toggle'

  const [visible, setVisible] = useState(false)

  const hide = { display: visible ? 'none' : '' }
  const show = { display: visible ? '' : 'none' }

  const toggleVisibility  = () => {
    setVisible(!visible)
  }
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return(
    <div>
      <div style={hide}>
        <button onClick={toggleVisibility}>
          {props.buttonLabel}
        </button>
      </div>
      <div style={show}>
        {props.children}
        <button onClick={toggleVisibility}>
          {props.hideButtonLabel}
        </button>
      </div>
    </div>
  )
})

export default Toggle