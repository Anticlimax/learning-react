import React, {Component} from 'react';

const output = (WrappendComponent, name) => {
  class NewComponent extends Component {
    constructor() {
      super()
      this.state = {
        data: null
      }
    }

    componentWillMount() {
      let data = localStorage.getItem(name)
      this.setState({data})
    }

    render() {
      return <WrappendComponent data={this.state.data}/>
    }
  }
  return NewComponent
}

export default output