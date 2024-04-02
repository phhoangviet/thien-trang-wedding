import { createClient } from "../../../supabase/client";
import { TableList } from "./table";
export default async function List() {
  const server = createClient();
  const res = await server.from("rsvp").select("*", { count: "exact" });
  const resIsVegetarian = await server
    .from("rsvp")
    .select("name", { count: "exact" })
    .eq("is_vegetarian", true);

  const resIsJoin = await server
    .from("rsvp")
    .select("name", { count: "exact" })
    .eq("email", "1");
  const totalJoined = res.data.reduce((acc, curr) => acc + curr.num_join, 0);
  return (
    <div className="min-h-screen p-6">
      <h2 className="text-center">Danh sách đã đăng kí form</h2>
      <div className="max-w-[1200px] w-[1200px] m-auto grid grid-cols-2 grid-flow-row">
        <div className="text-center">Tổng số đã điền</div>
        <div>{res.count}</div>
        <div className="text-center">Tổng số xác nhận tham dự</div>
        <div>{resIsJoin.count}</div>
        <div className="text-center">Tổng số người tham dự</div>
        <div>{totalJoined}</div>
        <div className="text-center">Số người ăn chay</div>
        <div>{resIsVegetarian.count}</div>
      </div>
      <TableList data={res.data} />
    </div>
  );
}
