import { validateRequired } from "@/utils/validators/validators";
import connect from "@/api/connect";
import type { ICartProduct } from "@/shared/types/CartProducts/ICartProduct.types";
const DeleteItemsFromcart: ({ UserID }: { UserID: string }) => Promise<ICartProduct | null> = async ({ UserID }) => {
    if (!validateRequired(UserID)) {
        return null;
    }
    const response: ICartProduct = await connect.del({ endpoint: "/cart/clear", body: { UserID: UserID } }) as ICartProduct;
    return response;
};
export default DeleteItemsFromcart;