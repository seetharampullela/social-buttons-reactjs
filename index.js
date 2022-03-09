const Button = (props) => {
  //  Write your code here.
  const { className, buttonEl } = props;
  return <button className={className}>{buttonEl}</button>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttonContainer">
      <Button buttonEl="Like" className="like" />
      <Button buttonEl="Comment" className="comment" />
      <Button buttonEl="Share" className="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
