import React from 'react'

function Loading() {
    console.log('loading');
  return (
      <div>
          <svg><img src={require("../images/svgs/svg.svg").default} alt="hi" /></svg>
          <svg><img src="svg.svg" alt="hi" /></svg>
          {require('./svg.svg').default}
    </div>
  )
}

export default Loading