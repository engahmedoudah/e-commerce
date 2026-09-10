import { validateRequired } from "@/utils/validators/validators";
import connect from "@/api/connect";
import type { IImage } from "@/shared/types/Image/IImage.types";
const GetImageByID: ({ ImageID }: { ImageID: string }) => Promise<IImage | null> = async ({ ImageID }: { ImageID: string }) => {
    if (!validateRequired(ImageID)) {
        return null;
    }
    const response: IImage = await connect.get({ endpoint: `/image`, body: { ImageID: ImageID } }) as IImage;
    if (response) {
        response.URL = connect.baseUrl.replace('/api/v1', '') + '/' + response.URL;
    }
    return response;
};
export default GetImageByID;
