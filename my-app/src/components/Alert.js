
import React from 'react'

function Alert(props) {
const captalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
}

  return (
  props.Alert &&  <div className={`alert alert-warning ${props.Alert.type} alert-dismissible fade show`} role="alert">
    <strong> {captalize (props.Alert.type)} </strong> :{props.Alert.msg}
  </div>
  )
}

export default Alert

