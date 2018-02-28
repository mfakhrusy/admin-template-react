import React from 'react';

class SearchForm extends React.Component {

  render() {
    return (
      <div className="sidebar-mainboard-search-box">
        <form action="">
          <label>
            <input type="text" name="name" autoComplete="off" placeholder="Search..." onChange={(e) => this.props.onChange(e.target.value)}/>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchForm;