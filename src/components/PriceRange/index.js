import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import "./index.css";

const PriceRange = (props) => {
  console.log(props.priceRangeValue);
  const tipHandleRender = (node, handleProps) => {
    return (
      <Tooltip
        overlayInnerStyle={{ minHeight: "auto" }}
        overlay={"$" + handleProps.value}
        placement="bottom"
        visible={true}
      >
        {node}
      </Tooltip>
    );
  };

  const onChangeSlider = (event) => {
    const { onChangePriceRange } = props;
    onChangePriceRange(event);
  };

  const getMarks = (maxPrice) => {
    console.log(typeof maxPrice);
    const priceObj = {
      0: 0,
    };
    priceObj[maxPrice] = maxPrice;
    return priceObj;
  };

  return (
    <div className="price-range-container">
      <h1 className="price-range-heading">Price</h1>
      <div className="price-range-slider-container">
        <div className="slider-container">
          <Slider
            value={props.priceRangeValue}
            min={0}
            max={props.maxPrice}
            marks={getMarks(props.maxPrice)}
            range
            pushable={true}
            allowCross={false}
            handleRender={tipHandleRender}
            onChange={onChangeSlider}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
