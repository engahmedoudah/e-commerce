import { validateRequired } from "@/utils/validators/validators";
import connect from "@/api/connect";
import type { IPaginatedSubcategories } from "@/shared/types/Subcategories/ISubcategory.types";
const GetAllSubcategoriesBycategoryID: ({ categoryID, page, limit, sort }: { categoryID: string, page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedSubcategories | null> = async ({ categoryID, page = 1, limit = 10, sort = "newest" }) => {
    if (!validateRequired(categoryID)) {
        return null;
    }
    const response: IPaginatedSubcategories = await connect.get({ endpoint: `/subcategories/category?page=${page}&limit=${limit}&sort=${sort}`, body: { categoryID: categoryID } }) as IPaginatedSubcategories;
    return response;
};
export default GetAllSubcategoriesBycategoryID;
