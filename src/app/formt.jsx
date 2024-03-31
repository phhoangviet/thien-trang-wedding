"use client";

import { useForm } from 'react-hook-form';
import { createClient } from '../../supabase/client';
import { useState } from 'react';

export default function FormSubmit() {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const [show,setShow] = useState(false)
  const onSubmit = async (data) => {
    console.log(data)
    if (data?.email == "3") {
      alert("Anh/chị vui lòng xác nhận sẽ tham dự buổi tiệc chứ?")
      return
    }
    if (data?.attending == "0") {
      alert("Anh/chị vui lòng chọn số người tham dự")
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
        setShow(true)
        setTimeout(()=> {setShow(false)},3000)
        reset()
      }
    
};
  return (
    <form
    className='text-lg'
    style={{
      fontFamily:'Maitree',
      
    }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-row">
        <div className="form-group col-sm-12 ">
          <input
            {...register("name",{required:true})}
            type="text"
            className="form-control bg-secondary border-0 py-4 px-3"
            placeholder="Tên của Anh/Chị"
          />
        </div>
        <div className="form-group col-sm-12">
        <select
          {...register("email",{required:true})}
          
            name="email"
            placeholder='Hi vọng anh/chị sẽ đến chung vui cùng chúng em'
            className="form-control bg-secondary border-0"
            style={{ height: "52px" }}
          >
            <option value="3">Hi vọng anh/chị sẽ đến chung vui cùng chúng em</option>
            <option value="0">Anh/chị bận việc. Sẽ không tham gia được</option>
            <option value="1">Chắn chắn rồi</option>
          </select>
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
      {show && <div class="bg-green-100 border-l-4  ease-out  border-green-500 text-green-700 p-3 rounded-lg fixed z-40 top-2 right-2">
        <p class="text-md m-0 font-semibold">Thiện & Trang: Cám ơn anh chị!</p>
        <p className="text-sm m-0">
          Cám ơn anh/chị đã gửi lời chúc tốt đẹp và xác nhận tham gia đến chúng
          em. Hẹn gặp anh/chị tại buổi lẽ thành hôn.
        </p>
      </div>}
    </form>
  );
}
