import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { ProductCreateDto, ProductUpdateDto } from '@products/dto';
import { Product } from '@products/entities';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Product>);
    create(dto: ProductCreateDto): Promise<Product>;
    find(options?: FindManyOptions<Product>): Promise<Product[]>;
    findOne(options: FindOneOptions<Product>): Promise<Product>;
    updateById(id: number, dto: ProductUpdateDto): Promise<Product>;
    deleteById(id: number): Promise<Product>;
}
