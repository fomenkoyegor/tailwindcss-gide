import { useEffect } from "react";
import UserCard from "./components/UserCard";
import { useAppSelector, useAppDispatch } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {isLoading && <h1>loading users...</h1>}
      {error && <h1>{error}</h1>}
      <div className="bg-slate-200 flex flex-wrap">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default App;
