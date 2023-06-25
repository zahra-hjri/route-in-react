
import React , {useState , useEffect} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ProductsApi.css'

const ProductsApi = () => {

    const [productList , setProductList] = useState([])
    // const [resultProduct , setResultProduct] = useState([])
      useEffect(() => {
        fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=62d5cb0a467b48d68ebf1d66478a4b74&query=pasta')
      .then(response => response.json())
      .then(json => setProductList(json))
      }, []); 
      
      const mainResults = productList.results;
      console.log(mainResults)
    // setResultProduct(productList.results)
    //   console.log("newwww",resultProduct)



  return (
    <div className='productMain h-screen p-10 md:p-12'>
    <Header />
    {/* <div>
        {mainResults.map((res)=>{
          return<div key={res.id}>
          <p>{res.title}</p>
          </div>
        }) }
       </div> */}
    {/* <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 my-20 place-items-center'>
    {mainResults.map((product)=>{
        return <div key={product.id} className="w-full max-w-xs bg-white border-white border rounded-lg shadow">
    <div className=''>
        <img className="p-6 w-full h-72 object-cover rounded-xl" src={product.image} alt="product image" />
    </div>
    <div className="px-5 pb-3">
        <a href="#">
            <h5 className="px-5 font-semibold tracking-tight text-black dark:text-white">{product.title}</h5>
        </a>
        <div className="flex items-center justify-between mt-2.5 mb-5 px-4 py-2">
            <div className='flex'>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 pt-1 pb-2 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">fast</span>
        </div>
        <div className="flex items-center justify-between">
            <span className=" font-bold text-blue-500 px-5 dark:text-white">5$</span>
            
            <a href="#" className="flex text-white bg-green-900 hover:bg-green-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <SlBasket className='text-xl mr-2' />
              Add to cart</a>
        </div>
    </div>
</div>
    })
}


    </div> */}
      <Footer />
     </div>
  )
}

export default ProductsApi;