"use client";

import { useForm } from 'react-hook-form';
import { createClient } from '../../supabase/client';

export default function FormSubmit() {
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    if (data?.attending == "0") {
      alert("Anh chị vui lòng chọn số người tham dự")
      return
    }
    const supabase = createClient()
    const res = await supabase.from("rsvp").insert({
        name: data.name,
        email: data.email || "",
        num_join: +data?.attending,
        is_vegetarian: data?.isVegetarian == "1" ? true:false,
        message: data.message
      });
      if(res.status =='201') {
        window.scrollTo(0,0)
        reset()
      }
    
};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-row">
        <div className="form-group col-sm-6">
          <input
            {...register("name",{required:true})}
            type="text"
            className="form-control bg-secondary border-0 py-4 px-3"
            placeholder="Tên của Anh/Chị"
          />
        </div>
        <div className="form-group col-sm-6">
          <input
          {...register("email",{required:false})}
            name="email"
            type="email"
            className="form-control bg-secondary border-0 py-4 px-3"
            placeholder="Email của Anh/Chị"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-sm-6">
          <select
          {...register("attending",{required:true})}
          
            name="attending"
            className="form-control bg-secondary border-0"
            style={{ height: "52px" }}
          >
            <option value="0">Số người tham dự</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="form-group col-sm-6">
          <select
          {...register("isVegetarian",{required:false})}
          
            name="isVegetarian"
            className="form-control bg-secondary border-0"
            style={{ height: "52px" }}
          >
            <option value="0">Bạn có yêu cầu món chay không</option>
            <option value="0">Không</option>
            <option value="1">Có</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <textarea
          {...register("message",{required:true})}
        
          name="message"
          className="form-control bg-secondary border-0 py-2 px-3"
          rows="5"
          placeholder="Cùng để lại lời chúc cho Thiện và Trang nhé!"
        ></textarea>
      </div>
      <div>
        <button
          className="btn btn-primary font-weight-bold py-3 px-5 "
          type="submit"
        >
          Xác nhận
        </button>
      </div>
    </form>
  );
}
