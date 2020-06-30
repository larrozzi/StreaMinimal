import React from 'react'
import { connect } from 'react-redux'
import {createStream} from '../../actions'
import StreamForm from './StreamForm'
class StreamCreate extends React.Component  {

    onSubmit = (formValues) =>{
        console.log(formValues)
        this.props.createStream(formValues)
    }

    render(){ 
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit= {this.onSubmit}/>
            </div>
        )
    }
}


export default connect (null, {createStream})(StreamCreate)

//before refactoring to reuse StreamForm
// import React from 'react'
// import {Field, reduxForm} from 'redux-form'
// import { connect } from 'react-redux'
// import {createStream} from '../../actions'

// class StreamCreate extends React.Component  {

//     renderError({ error, touched }){
//         if (touched && error){
//         return (
//             <div className="ui error message">
//                 <div className="header"> {error}</div>
//             </div>
//         )}
//     }
//     //renderInput({formProps}){
//         renderInput = ({input, label, meta}) =>{
//         //console.log(meta);
//         //console.log(formPropsx);
//         //return <input onChange={formProps.input.onChange} value ={formProps.input.value}/> 
//         const className=`field ${meta.error && meta.touched ? 'error' : ''}`
//         return (
//             <div className ={className}>
//                 <label> {label} </label>
//                 <input {...input}/> 
//                 {this.renderError(meta)}
//             </div>
//         )
//     }

//     onSubmit = (formValues) =>{
//         console.log(formValues)
//         this.props.createStream(formValues)
//     }

//     render(){ 
//         return (
//             <form onSubmit={this.props.handleSubmit(this.onSubmit)} className ="ui form error">
//                 <Field name="title" component={this.renderInput} label="Enter Title"/>
//                 <Field name="description" component={this.renderInput} label="Enter Description"/>
//                 <button className="ui button primary">Submit</button>
//             </form>
//         )
//     }
// }

// const validate = (formValues) => {
//     const errors={}
//     if(!formValues.title){
//         errors.title = "You must enter a title"
//     }
//     if(!formValues.description){
//         errors.description = "You must enter a description"
//     }
//     return errors
// }

// // export default connect()(reduxForm({
// //         form: 'stream-create',
// //         validate
// //     })(StreamCreate)
// // )

// const formWrapped = reduxForm({
//             form: 'stream-create',
//             validate
//         })(StreamCreate)

// export default connect (null, {createStream})(formWrapped)