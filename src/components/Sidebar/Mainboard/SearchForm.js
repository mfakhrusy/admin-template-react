import React from 'react';

class SearchForm extends React.Component {

  render() {
    return (
      <div className="search-box">
        <form action="">
          <label>
            <input type="text" name="name" onChange={(e) => this.props.onChange(e.target.value)}/>
          </label>
        </form>
        <p>{this.props.searchText}</p>
      </div>
    );
  }
}

export default SearchForm;