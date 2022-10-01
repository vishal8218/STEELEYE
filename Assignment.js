
import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
// Single List Item
 function WrappedListComponent(props)
{  
  
  const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) =>{

  
  return (

    <div>
    
    <li
      style={{ backgroundColor: props.isSelected ? 'green' : 'red'}}
      onClick={onClickHandler(props.index)}
     text={props.text}
     >
    </li>
    </div>
  );
};
WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
const SingleListItem = memo(WrappedSingleListItem);
// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [setSelectedIndex, selectedIndex] = useState(this.index,this.isSelected,this.onClickHandler,this.text);

 //useEffect(() => {
  // setSelectedIndex(null);
  //}, [items]);
  const handleClick = index => {
    setSelectedIndex(props.index);
  };
return (
  <div>
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex}
        />
      ))}
    </ul>
    </div>
  )
};
WrappedListComponent.propTypes = {
  items: PropTypes.array(PropTypes.shapeOf({
    text: PropTypes.string.isRequired,
  })),
};
WrappedListComponent.defaultProps={
  index:1,
  isSelected:true,
  onClickHandler:'event Handle',
  text:"Front-end Assignment of STEEL EYE"
}
WrappedListComponent.defaultProps = {
  items: null,
};

}
export default WrappedListComponent;
