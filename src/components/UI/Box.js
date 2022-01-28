import './Box.css';

function Box(props) {
  const classes = 'box ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default Box;