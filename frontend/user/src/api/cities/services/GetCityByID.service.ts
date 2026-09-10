import { validateRequired } from "@/utils/validators/validators";
import connect from "@/api/connect";
import type { ICity } from "@/shared/types/Cities/ICity.types";
const GetCityByID: ({ CityID }: { CityID: string }) => Promise<ICity | null> = async ({ CityID }: { CityID: string }) => {
    if (!validateRequired(CityID)) {
        return null;
    }
    const response: ICity = await connect.get({ endpoint: "/city", body: { CityID: CityID } }) as ICity;
    return response;
};
export default GetCityByID;
