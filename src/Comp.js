import React from 'react'
import { connect } from "react-redux"

 function Comp({arr}) {
  return (
    <div>
      {console.log(arr)}
    </div>
  )
}

export default connect(state => ({arr: state}))(Comp)
