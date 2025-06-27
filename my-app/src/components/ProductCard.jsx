import './Product.css'


export default function ProductCard ({product}) {
    return (
        <div>
            <div className="p-[10px] text-center w-[100px] h-[175px] rounded-[10px] shadow-[5px_5px_15px_rgba(0,0,0,0.3)]" >
            <img className="w-xl  " src={product.image} alt="product-image" />
            <h4 className='text-[0.8em] w-full overflow-hidden whitespace-nowrap text-ellipsis'>{product.title}</h4>
            <h2 >${(product.price).toFixed(2)}</h2>
          </div>
        </div>
    )
}