import React from 'react';

class SearchBarContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidUpdate (prevProps) {
    // compare search slice of state
    //use history.push to redirect to /search/results/`${this.props.searchTerm}` if search state is no longer empty
    // if (prevProps.)
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render () {
    return (
      <div className='search-bar-container'>
        <input type='text' 
                className='search-bar'
                onChange={this.update('searchTerm')} 
                placeholder= 'Start typing...' 
                value={this.state.searchTerm}/>
      </div>
    );
  }
}

export default SearchBarContainer;
