import { validateRequired } from "@/utils/validators/validators";
import type { IImage } from "@/shared/types/Image/IImage.types";
import connect from "@/api/connect";
const DeleteImage: ({ ImageID }: { ImageID: string }) => Promise<IImage | null> = async ({ ImageID }: { ImageID: string }) => {
    if (!validateRequired(ImageID)) {
        return null;
    }
    const response: IImage = await connect.del({ endpoint: `/image`, body: { ImageID: ImageID } }) as IImage;
    return response;
};
export default DeleteImage;
