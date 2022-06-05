import { Router } from 'express'
import { getProducts, createNewProduct, getProductsById, deleteProductById} from '../controllers/product.controller'

const router = Router();

router.get('/products', getProducts);

router.post('/products', createNewProduct );

router.get('/products/:id', getProductsById);

router.delete('/products/:id', deleteProductById );

router.put('/products', );


export default router;