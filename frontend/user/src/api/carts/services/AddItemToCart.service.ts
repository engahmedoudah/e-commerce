import { validateRequired } from "@/utils/validators/validators";
import connect from "@/api/connect";
import type { ICartProduct } from "@/shared/types/CartProducts/ICartProduct.types";
const AddItemTocart: ({ UserID, ProductID, Quantity }: { UserID: string, ProductID: string, Quantity: number }) => Promise<ICartProduct | null> = async ({ UserID, ProductID, Quantity }) => {
    if (!validateRequired(UserID) || !validateRequired(ProductID)) {
        return null;
    }
    const response: ICartProduct = await connect.post({ endpoint: "/cart", body: { UserID: UserID, ProductID: ProductID, Quantity: Quantity } }) as ICartProduct;
    return response;
};
export default AddItemTocart;