import React from 'react'

class Default extends React.Component {
   render() {
      console.log(this.props)
      return (
         <div className='container'>
            <div className='row'>
               <div className='col-10 mx-auto text-center text-uppercase pt-4'>
                  <h1 className='display-3'>404 error</h1>
                  <h2>page not found</h2>
                  <h2>the requested url '<span className='main-red'>{this.props.location.pathname}</span>' was not found</h2>
               </div>
            </div>
         </div>
      )
   }
}

export default Default