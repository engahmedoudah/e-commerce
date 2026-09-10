import { validateRequired } from "@/utils/validators/validators";
import type { ICategory } from "@/shared/types/Categories/ICategory.types";
import connect from "@/api/connect";
const GetcategoryByID: ({ categoryID }: { categoryID: string }) => Promise<ICategory | null> = async ({ categoryID }: { categoryID: string }) => {
    if (!validateRequired(categoryID)) {
        return null;
    }
    const response: ICategory = await connect.get({ endpoint: `/category`, body: { categoryID: categoryID } }) as ICategory;
    return response;
};
export default GetcategoryByID;
