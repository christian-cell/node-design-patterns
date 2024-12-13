import { CategoryModel } from "../../data";
import { CreateCategoryDto, CustomError, PaginationDto, UserEntity } from "../../domain";

export class CategoryService{

    constructor(){}

    public async createCatetory( createCatetoryDto:CreateCategoryDto, user:UserEntity ){

        const { name } = createCatetoryDto || {};

        const categoryExists = await CategoryModel.findOne({ name : name });

        if( categoryExists ) throw CustomError.badRequest('Category already exists');

        try {
            
            const category = new CategoryModel({

                ...createCatetoryDto,
                user: user.id
            })

            await category.save();

            return {

                id: category.id,
                name: category.name,
                available: category.available
            }

        } catch (error) {
            
            throw CustomError.internalServer(`Internal server error`);
        }
    }

    public async getCategories( paginationDto : PaginationDto ){

        const { page , limit } = paginationDto || {};

        try {

            /* const total = await CategoryModel.countDocuments();
            
            const categories = await CategoryModel.find()
                .skip( (page - 1) * limit ) 
                .limit( limit ) */

            const [total , categories] = await Promise.all([

                CategoryModel.countDocuments(),
                CategoryModel.find()
                    .skip( (page - 1) * limit ) 
                    .limit( limit )
            ])

            return {

                page: page,
                limit: limit,
                total: total,
                next: `/api/categories?page=${page + 1}&limit=${limit}`,
                prev: `/api/categories?page=${page - 1}&limit=${limit}`,
                categories: categories.map( c => ({

                    id: c.id,
                    name: c.name,
                    available: c.available
                }))
            }

        } catch (error) {
            
            throw CustomError.internalServer(`Internal server error`);
        }
    }
}