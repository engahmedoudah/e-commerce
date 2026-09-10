import { validateRequired } from "@/utils/validators/validators";
import type { IUser } from "@/shared/types/Users/IUser.types";
import connect from "@/api/connect";
const UpdateUser: ({
  UserID,
  user,
  ImageFile,
}: {
  UserID: string;
  user: IUser;
  ImageFile: File | null | undefined;
}) => Promise<IUser | null> = async ({
  UserID,
  user,
  ImageFile,
}: {
  UserID: string;
  user: IUser;
  ImageFile: File | null | undefined;
}) => {
  if (!validateRequired(UserID)) {
    return null;
  }
  const bodyPayload = {
    UserID: UserID,
    FirstName: user.FirstName,
    LastName: user.LastName,
    Email: user.Email,
    Password: user.Password,
    Image: ImageFile,
  };
  const response: IUser = (await connect.put({
    endpoint: `/user`,
    body: bodyPayload,
  })) as IUser;
  return response;
};
export default UpdateUser;
