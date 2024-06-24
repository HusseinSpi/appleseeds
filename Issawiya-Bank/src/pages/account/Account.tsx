import { useState, useEffect, FC } from "react";
import { getUser } from "../../api/APIUsers";
import { useNavigate } from "react-router-dom";

interface AccountProps {}

interface Account {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  money: number;
  credit: number;
}

export const Account: FC<AccountProps> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (email) {
      getUser(email)
        .then((res) => {
          if (res && typeof res !== "boolean") {
            const accountData: Account = {
              id: res.id,
              firstName: res.firstName,
              lastName: res.lastName,
              email: res.email,
              phoneNumber: res.phoneNumber,
              money: res.money,
              credit: res.credit,
            };
            setAccount(accountData);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [email]);

  console.log(account);

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">ID</dt>
          <dd className="text-gray-700 sm:col-span-2">{account.id || "N/A"}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Name</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {account.firstName + " " + account.lastName || "N/A"}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Email</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {account.email || "N/A"}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Phone Number</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {account.phoneNumber || "N/A"}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Money</dt>
          <dd className="text-gray-700 sm:col-span-2">{account.money || 0}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Credit</dt>
          <dd className="text-gray-700 sm:col-span-2">{account.credit || 0}</dd>
        </div>
      </dl>

      <button
        onClick={() => navigate("/transfer-money")}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-10"
      >
        Transfer
      </button>
    </div>
  );
};
