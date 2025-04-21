import { useEffect } from 'react'
import HeaderMenu from '../../components/Menu/HeaderMenu/HeaderMenu';
import FamousSentence from '../../components/Menu/famousSentence/FamousSentence';
import FeaturedMenu from '../../components/Menu/featuredMenu/FeaturedMenuu';
import ImageMenuu from '../../components/Menu/imageMenu/ImageMenuu';
import Collection from '../../components/Menu/collection/Collection';
import "./menuPage.css";
import "react-multi-carousel/lib/styles.css";
import ListCard from '../../components/Menu/listeCard/ListCard';

import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../redux/reducers/ProductsSlice';

const 
MenuPage = () => {


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const allProducte = useSelector(state => state.allPrducts.Products);

    // get all category uniqe
    const allCategory= [...new Set(allProducte.map((item)=>item.category))];
    console.log("this is all prod");
    console.log(allProducte);

  return (
    <>
        <FamousSentence/>
        <div className='mx-5'>
                <ImageMenuu/>
                <HeaderMenu/> 
                <FeaturedMenu className="mt-5"/>
                <hr style={{height: "15px", opacity: "0.1", backgroundColor: "black"}} />
                <Collection/>
                <hr style={{height: "15px", opacity: "0.1", backgroundColor: "black"}}/>
                {
                allCategory.length >0 ? (
                  allCategory.map((cat,i)=>{
                        return(
                        <div key={i}>
                            <ListCard title={cat} products={allProducte}/>
                        
                        </div>
                        )
                    })
                ):(
                    <h3 className="text-center"> data vide !!! </h3>
                
                )
                }
        </div>
        <FamousSentence/>

    </>
  )
}

export default MenuPage ; 