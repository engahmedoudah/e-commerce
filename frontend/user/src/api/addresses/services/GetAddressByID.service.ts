import { validateRequired } from "@/utils/validators/validators";
import connect from "@/api/connect";
import type { IAddress } from "@/shared/types/Addresses/IAddress.types";
const GetAddressByID: ({ AddressID }: { AddressID: string }) => Promise<IAddress | null> = async ({ AddressID }: { AddressID: string }) => {
    if (!validateRequired(AddressID)) {
        return null;
    }
    const response: IAddress = await connect.get({ endpoint: "/address", body: { AddressID: AddressID} }) as IAddress;
    return response;
};
export default GetAddressByID;
