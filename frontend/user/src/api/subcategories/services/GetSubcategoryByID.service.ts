import { validateRequired } from "@/utils/validators/validators";
import connect from "@/api/connect";
import type { ISubcategory } from "@/shared/types/Subcategories/ISubcategory.types";
const GetsubcategoryByID: ({ subcategoryID }: { subcategoryID: string }) => Promise<ISubcategory | null> = async ({ subcategoryID }: { subcategoryID: string }) => {
    if (!validateRequired(subcategoryID)) {
        return null;
    }
    const response: ISubcategory = await connect.get({ endpoint: `/subcategory`, body: { subcategoryID: subcategoryID } }) as ISubcategory;
    return response;
};
export default GetsubcategoryByID;
