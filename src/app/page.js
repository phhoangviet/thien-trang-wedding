import Image from "next/image";

import { createClient } from "../../supabase/server";
import FormSubmit from "./formt";

export default async function Home() {
  const supabase = createClient();
  // const { data, error } = await supabase.from("rsvp").insert({
  //   name: "test",
  //   email: "asd",
  //   num_join: 2,
  //   is_vegetarian: true,
  // });
  // console.log(data);
  // console.log(error);
  return (
    <div className="w-full min-h-screen ">
      <header className="fixed top-0  bg-black w-full bg-opacity-30">
        <nav className=" mx-auto px-6 py-3 md:w-[1200px]">
          <div className="flex justify-between items-center">
            <h1 className="font-secondary mb-n2 text-white">
              Thien <span className="text-white">&</span> Trang
            </h1>
            <div className="flex space-x-8">
              <a href="#" className="text-white">
                Our Wedding
              </a>
              <a href="#" className="text-white">
                Our Album
              </a>
              <a href="#rsvp" className="text-white scroll-smooth">
                Send your love
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div
        className="p-3 bg-black bg-opacity-30 absolute z-100 bottom-6 translate-x-[-50%] left-[50%]"
        style={{ maxWidth: "900px" }}
      >
        <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
          <h3
            className="text-uppercase font-weight-normal text-white m-0  md:text-xl text-xs"
            style={{ letterSpacing: "2px" }}
          >
            We're getting married
          </h3>
        </div>
      </div>
      <Image
        src={"/background_main.jpg"}
        width="1200"
        height={600}
        className="w-full"
      />
      <div className="container-fluid py-5" id="rsvp">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h1 className=" display-4">Tham dự cùng chúng tôi</h1>
            <h2 className=" text-md">11 giờ, Sảnh Luxury - For You Place</h2>
            <h3 className=" text-md mt-2">
              Đường 2/9 - Hải Châu - Thành phố Đà Nẵng
            </h3>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <FormSubmit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
