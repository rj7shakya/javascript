import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = ()=>{
  return(
    <div className="ui container comments">
      <CommentDetail 
      author="Sam" 
      time="Today at 6:00PM" 
      text="Nice Cool Post!" 
      pic = {faker.image.avatar()}/>
      
      <CommentDetail 
      author="Alex" 
      time="Today at 3:00PM" 
      text="wah Cool Post!" 
      pic = {faker.image.avatar()}/>
      
      <CommentDetail 
      author="Jane" 
      time="Today at 5:50PM" 
      text="cool Cool Post!" 
      pic = {faker.image.avatar()}/>
    </div>  
  );
};

ReactDOM.render(<App/>,
  document.querySelector('#root'));