import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import { GetAdminByID } from "../../../../business/services";
import { AdminDetails } from "../../components";
import "./AdminDetailsPage.css";

const AdminDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const [admin, setAdmin] = useState<IAdmin | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    GetAdminByID({ AdminID: id })
      .then((res) => {
        if (res) {
          setAdmin(res);
        }
      })
      .catch(() => {
        setAdmin(undefined);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <AdminDetails admin={admin} Loading={loading} />
    </div>
  );
};

export default AdminDetailsPage;
