import { ProductModel } from "../../data";
import { CustomError, PaginationDto, UserEntity } from "../../domain";
import { CreateProductDto } from "../../domain/dtos/product/create-product.dto";

export class ProductService{

    constructor(){}

    public async createProduct( createProductDto:CreateProductDto, user:UserEntity ){

        const { name } = createProductDto || {};

        const productExists = await ProductModel.findOne({ name : name });

        if( productExists ) throw CustomError.badRequest('Product already exists');

        try {
            
            const product = new ProductModel( createProductDto )

            await product.save();

            return product;

        } catch (error) {
            
            throw CustomError.internalServer(`Internal server error : ${error}`);
        }
    }

    public async getProducts( paginationDto : PaginationDto ){

        const { page , limit } = paginationDto || {};

        try {

            const [total , products] = await Promise.all([

                ProductModel.countDocuments(),
                ProductModel.find()
                    .skip( (page - 1) * limit ) 
                    .limit( limit )
                    .populate('user' /* , 'name email' */)//podemos elegir las propiedades que aparezcan en el objeto de user
                    .populate('category')
            ])

            return {

                page: page,
                limit: limit,
                total: total,
                next: `/api/products?page=${page + 1}&limit=${limit}`,
                prev: `/api/products?page=${page - 1}&limit=${limit}`,
                products: products
            }

        } catch (error) {
            
            throw CustomError.internalServer(`Internal server error`);
        }
    }
}