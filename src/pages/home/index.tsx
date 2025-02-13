import getUsers from "./services/Users";
import UserCard from "./components/UserCard";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import * as Icons from "@/icons";
import { NavLink } from "react-router";

export default function Page() {
  const queryClient = useQueryClient();

  const { data, isLoading, isRefetching, isError } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="px-6 py-10 w-screen h-screen">
      <h1 className="text-xl font-extrabold">SimpleUserList</h1>
      <div className="mt-10 w-52 flex flex-col gap-5">
        <button
          onClick={() => {
            queryClient.invalidateQueries({ queryKey: ["getUsers"] });
          }}
          className="bg-primary px-3 py-2 rounded-md hover:bg-primary/40"
        >
          Atualizar cache
        </button>
        <NavLink to="/dashboard">
          <button className="bg-primary px-3 py-2 rounded-md hover:bg-primary/40">
            Acessar dashboard
          </button>
        </NavLink>
      </div>
      <div className="mt-10 pb-10">
        {isLoading ||
          (isRefetching && (
            <div className="flex gap-2 items-center text-primary">
              <Icons.LoaderIcon size={18} className="animate-spin" />
              <p>Trazendo a lista de usuários...</p>
            </div>
          ))}
        {isError && (
          <div className="items-center space-y-4">
            <div className="flex gap-2 text-destructive">
              <Icons.LucideMessageCircleWarning size={18} />
              <p className="text-center">Erro ao buscar os dados</p>
            </div>
            <button
              onClick={() => {
                queryClient.invalidateQueries({ queryKey: ["getUsers"] });
              }}
              className="bg-primary px-3 py-2 rounded-md hover:bg-primary/40"
            >
              Tentar novamente
            </button>
          </div>
        )}

        <div className="flex flex-wrap gap-6">
          {!isLoading &&
            !isRefetching &&
            data &&
            data.length > 0 &&
            data.map((user) => (
              <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <UserCard key={user.id} user={user} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
