const ProductCard = ({title, price, hasDiscount}) => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-r5mHPJyPkKwXFU-HksRzOlK2NP0Ph9ClVA&usqp=CAU"
        alt=""
      />
      <h3>{title}  {hasDiscount ? <span>SALE</span> : ''}   </h3> 
      <p>{price}</p>
      <button type="button">BUY NOW</button>
      <div>_______________________</div>
    </div>
  );
};

export default ProductCard;
