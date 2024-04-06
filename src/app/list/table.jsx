"use client";
import moment from "moment";
import * as XLSX from "xlsx";

export const TableList = ({ data }) => {
  const onExport = () => {
    const dataToExport = data.map((pro) => ({
      ["Tên"]: pro.name,
      ["Lời chúc"]: pro.message,
      ["Sẽ tham dự"]: pro.email === "1" ? "Có" : "Không",
      ["Số người tham dự"]: pro.num_join,
      ["Đăng kí ăn chay"]: pro.is_vegetarian == true ? "Có" : "Không",
      ["Ngày gửi"]: moment(pro?.created_at).format("hh:mm DD/MM/YYYY"),
    }));
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils?.json_to_sheet(dataToExport);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Danh sách");
    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, `Danh sách đăng kí - ${new Date().getTime()}.xlsx`);
  };
  return (
    <table className=" w-full border-collapse border border-slate-500 p-4 border-spacing-4">
      <caption className="caption-top sticky top-2 ">
        <button
          className="border border-solid p-2 rounded-lg"
          onClick={onExport}
        >
          Xuất file
        </button>
      </caption>
      <thead className="border-collapse border border-slate-500 p-4">
        <tr className="border-collapse border border-slate-500 p-4">
          <th className="p-2">#</th>
          <th>Tên</th>
          <th>Lời chúc</th>
          <th>Sẽ tham dự</th>
          <th>Số người tham dự</th>
          <th>Đăng kí ăn chay</th>
          <th>Ngày gửi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, idx) => {
          return (
            <tr
              key={idx}
              className="border-collapse border border-slate-500 p-6 text-sm"
            >
              <td className="p-3">{idx + 1}</td>
              <td className="w-[200px]">{el?.name || ""}</td>
              <td className=" p-2">{el?.message || ""}</td>
              <td className="w-[80px]">{el?.email === "1" ? "Có" : "Không"}</td>
              <td className="">{el?.num_join || 0}</td>
              <td>{el?.is_vegetarian === true ? "Có" : "Không"}</td>
              <td>{moment(el?.created_at).format("hh:mm DD/MM/YYYY")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
