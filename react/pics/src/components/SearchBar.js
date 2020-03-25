import React from 'react'

class SearchBar extends React.Component{

  onInputChange(){

  }


  render(){
    return(
      <div className="ui segment">
        <form className="ui form" action="">
          <label>Image Search</label>
          <input type="text" onChange={this.onInputChange}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
