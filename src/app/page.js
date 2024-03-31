import FormSubmit from "./formt";
import GalleryImage from "./gallery";

export default async function Home() {
  return (
    <div
      className="w-screen min-w-screen min-h-screen bg-[url('/background_main.jpg')] bg-contain bg-scroll md:bg-cover "
      style={{
        backgroundSize: "100vw",
      }}
    >
      <header className="fixed top-0 z-30  bg-black w-full bg-opacity-20">
        <nav className="flex flex-col justify-center items-center mx-auto px-6 py-3 md:w-[1200px]">
          <div className="flex justify-between items-center">
            <h1 className="font-secondary mb-n2 text-white">
              Thiện <span className="text-white">&</span> Trang
            </h1>
          </div>
          <div className="mt-2" style={{ fontFamily: "Maitree" }}>
            <div className="flex space-x-8">
              <a href="#our-wedding" className="text-white text-sm md:text-xl">
                Our Wedding
              </a>
              <a href="#our-album" className="text-white text-sm md:text-xl">
                Our Album
              </a>
              <a
                href="#rsvp"
                className="text-white scroll-smooth text-sm md:text-xl"
              >
                Send your love
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="min-h-screen"></div>
      <div id="our-wedding" className="min-h-screen ">
        <div
          className="text-white  py-5 mt-4"
          style={{ fontFamily: "Maitree" }}
        >
          <div className="pt-5 pb-3">
            <div className="section-title position-relative text-center bg-black bg-opacity-20 pt-3">
              <h1 className="font-secondary display-3 text-white">
                Our Wedding
              </h1>
              <i className="far fa-heart text-white"></i>
            </div>
            <div className=" bg-black bg-opacity-10  p-6 md:px-10 md:py-6 mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row">
                <div className="h-100 d-flex flex-column justify-content-center p-2">
                  <h4 className="mb-2 text-white">Chuẩn bị đón dâu</h4>
                  <p className="text-uppercase mb-2">8 giờ, 18/04/2024</p>
                </div>
                <div className="h-[100px] text-right d-flex flex-column justify-content-center  p-2">
                  <h4 className="mb-2 text-white">Lễ rước dâu</h4>
                  <p className="text-uppercase mb-2">9 giờ, 18/04/2024</p>
                </div>

                <div className="h-100 d-flex flex-column justify-content-center p-2 ">
                  <h4 className="mb-2 text-white">Đón dâu về nhà</h4>
                  <p className="text-uppercase mb-2">10 giờ, 18/04/2024</p>
                </div>
                <div className="h-100 text-right d-flex flex-column justify-content-center p-2 md:mt-5 mt-2">
                  <h4 className="mb-2 text-white">Tiếp đón khách</h4>
                  <p className="text-uppercase mb-2">11 giờ 30, 18/04/2024</p>
                  <p className="m-0">
                    Tổ chức tiệc tại Sảnh Lavender <br /> Nhà hàng For You
                    Luxury <br />
                    Đường 2/9 ,Hải Châu <br />
                    Thành phố Đà Nẵng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="our-album" className="mt-12 min-h-screen">
        <div
          className="text-white  py-5 mt-4"
          style={{ fontFamily: "Maitree" }}
        >
          <div className="pt-5 pb-3">
            <div className=" section-title position-relative text-center bg-black bg-opacity-20 pt-3">
              <h1 className="font-secondary display-3 text-white">Our Album</h1>
              <i className="far fa-heart text-white"></i>
            </div>
            <div className="w-full  md:max-w-[1200px] m-auto">
              <GalleryImage />
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-3 bg-black bg-opacity-30 absolute z-100 bottom-6 translate-x-[-50%] left-[50%]"
        style={{ maxWidth: "900px" }}
      >
        <div className="d-inline-block border-top border-bottom border-light py-3 px-2">
          <h3
            className="text-uppercase  text-white m-0  md:text-xl text-[7px]"
            style={{ letterSpacing: "2px" }}
          >
            We're getting married
          </h3>
        </div>
      </div>

      <div className="relative min-h-screen py-5" id="rsvp">
        <div className="py-5">
          <div
            className="section-title position-relative text-center bg-black bg-opacity-20"
            style={{ fontFamily: "Maitree" }}
          >
            <h1 className="display-4 md:display-3   text-white">
              Tham dự cùng chúng tôi
            </h1>
            <i className="far fa-heart text-white"></i>
            <h2 className=" text-lg  text-white">
              11 giờ 30, Sảnh Lavender - Nhà hàng For You Luxury
            </h2>
            <h3 className="text-lg mt-2 text-white">
              Đường 2/9 - Hải Châu - Đà Nẵng
            </h3>
            <i className="far fa-heart text-white"></i>
          </div>
          <div className="container">
            <div className="">
              <div className="text-center max-w-[600px] m-auto">
                <FormSubmit />
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15337.461206912443!2d108.2238209!3d16.0465225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c363fa9cf9%3A0x7047279db15a0865!2sFor%20You%20Palace!5e0!3m2!1sen!2s!4v1711865037682!5m2!1sen!2s"
            width="1200"
            height="450"
            style={{ border: "0" }}
            className="mt-4 w-full"
            allowFullScreen
            lazy="true"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-20 text-center">
          <div className="text-white text-center">
            &#9426; 2024 Thiện & Trang Wedding
          </div>
        </div>
      </div>
    </div>
  );
}
