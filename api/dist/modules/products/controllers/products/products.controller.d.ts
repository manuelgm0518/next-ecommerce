import { IHttpResponse } from '@core/constants';
import { ProductCreateDto, ProductUpdateDto } from '@products/dto';
import { Product } from '@products/entities';
import { ProductsService } from '@products/services';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(dto: ProductCreateDto): Promise<IHttpResponse<Product>>;
    find(): Promise<IHttpResponse<Product[]>>;
    findById(id: number): Promise<IHttpResponse<Product>>;
    updateById(id: number, body: ProductUpdateDto): Promise<IHttpResponse<Product>>;
    deleteById(id: number): Promise<IHttpResponse<Product>>;
}
