import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
  return(
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          time="Today at 6:00PM" 
          text="Nice Cool Post!" 
          pic = {faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          time="Today at 3:00PM" 
          text="wah Cool Post!" 
          pic = {faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          time="Today at 5:50PM" 
          text="cool Cool Post!" 
          pic = {faker.image.avatar()}/>
      </ApprovalCard>
      
      
      
    </div>  
  );
};

ReactDOM.render(<App/>,
  document.querySelector('#root'));