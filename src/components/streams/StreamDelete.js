import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    
    renderActions(){
        //const id = this.props.match.params.id
        const { id } = this.props.match.params
        return (
            <div>
                <button 
                    onClick={()=>this.props.deleteStream(id)} // arrow function here instead of noraml function in order to allow deletion only after user clicks on delete button inside modal instead of as soon as when the buttons get rendered  
                    className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </div>
        )
    }
    renderContent(){
        if(!this.props.stream){
            return "Are you sure you want to delete this stream?"
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title} ?`
    }

    render(){
        return (
            <Modal 
                title= "Delete Stream"
                content= {this.renderContent()}
                actions= {this.renderActions()}
                onDismiss={() => history.push('/')}
                />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect (mapStateToProps, {fetchStream,deleteStream})(StreamDelete)


    // React.Fragment or <></> works better when the <div></div> throws off the styling
    // const actions = (
    //     <React.Fragment>
    //         <button className="ui button negative">Delete</button>
    //         <button className="ui button">Cancel</button>
    //     </React.Fragment>
    // )