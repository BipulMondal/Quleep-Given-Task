import React, { useState } from "react";
import axios from "axios";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    currency: "",
    color: "",
    description: "",
    images: []
  });

  const [submit, setSubmmit] = useState(false);
  const [dataSend, setDataSend] = useState(false)

  const handleFileSelect = (event) => {
    const files = event.target.files;
    if (files.length > 6) {
      event.target.value = null;
      toast.warn("You can only select less than 6 images",{
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
        transition: Flip,
      })
    } else {
      // update form data with selected files
      setFormData({...formData, images: files}); 
    }
  };

  
  const submitData = async () => {

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("color", formData.color);
    data.append("price", formData.price);
    data.append("currency", formData.currency);

    if (formData.images && formData.images.length > 0) {
      for (let i = 0; i < formData.images.length; i++) {
        data.append("images", formData.images[i]);
      }
    }
    if (
      formData.name.length === 0 ||
      formData.description.length === 0 ||
      formData.color.length === 0 ||
      formData.price.length === 0 ||
      formData.currency.length === 0 ||
      formData.images.length === 0
    ) {
      setSubmmit(true);
    }
    if(formData.name.length > 0 &&
        formData.description.length > 0 &&
        formData.color.length > 0 &&
        formData.price.length > 0 &&
        formData.currency.length > 0 &&
        formData.images.length > 0){
        setDataSend(true);
        try {
          const res = await axios.post("https://quleep-0ky9.onrender.com/createproduct", data);
          // const res = await axios.post("http://localhost:5000/createproduct", data);
          console.log(res);
          toast.success("Product Created Successfylly", {
            position: "top-right",
            theme: "colored",
            transition: Flip,
            autoClose: 3000
          });
          setSubmmit(false);
          setFormData({
          name:"",
          price:"",
          currency:"",
          color:"",
          description:"",
          images:[],
        });
        document.getElementById("images").value = null;

        } catch (error) {
          console.log(error);
          toast.error("Product does not created", {
            position: "top-right",
            theme: "colored",
            transition: Flip,
            autoClose: 3000
          });
        };

        setDataSend(false)
      }
      else{
        console.log("data not submitted")
      }
      
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await submitData();
  };

  return (
    <div className="w-auto h-screen bg-cyan-300 flex flex-col items-center font-semibold">
      <h3 className="text-2xl font-bold">Sell your Products with us</h3>
      <hr className="h-[0.2rem] w-[20rem] bg-white" />
      <form action="/mypost" method="post" encType="multipart/form-data ">
        <div className="mt-[2rem] border border-2 p-[2rem] bg-red-300 w-[47rem]">
          <label className="text-lg" htmlFor="ProductName">
            Product Name :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Product Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            autoComplete="off"
            className="h-[2rem] w-[20rem] my-[0.5rem] ml-[4rem] pl-[0.5rem] focus:outline-none"
          />
          {submit && formData.name.trim().length === 0 && (
            <div className="flex justify-end w-4/6">
              <h3 className="text-xs text-red-900">
                *** Product Name Is Required ***
              </h3>
            </div>
          )}
          {/* <br /> */}
          <div className="flex space-x-4">
            <label className="text-lg" htmlFor="ProductPrice">
              Product Price :
            </label>
            <div>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Enter Product Price"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                autoComplete="off"
                className="h-[2rem] w-[20rem] my-[0.5rem] ml-[3.2rem] pl-[0.5rem] focus:outline-none"
              />
              {submit && formData.price.trim().length === 0 && (
                <div className="flex justify-end ml-[4rem] w-4/6">
                  <h3 className="text-xs text-red-900">
                    *** Product Price Is Required ***
                  </h3>
                </div>
              )}
            </div>
            <div className="ml-[0.5rem]">
            <select
              className="ml-[1.5rem] mt-[0.5rem] h-[2rem] w-[6rem]"
              name="currency"
              id="currency"
              value={formData.currency}
              onChange={(e) => setFormData({...formData, currency: e.target.value})}
            >
              <option value="currency">currency</option>
              <option value="₹">₹</option>
              <option value="$">$</option>
              <option value="€">€</option>
            </select>
            <br />
            {submit && formData.currency.length === 0 && (
            <div className="flex justify-start mt-[0.5rem] w-[10rem]">
            <h3 className="text-xs text-red-900">
              ***Currency Is Required ***
            </h3>
          </div>  
            )}
            </div>
          </div>
          {/* <br /> */}
         <div>
         <label className="text-lg" htmlFor="ProductColor">
            Product Color :
          </label>
          <input
            type="text"
            id="color"
            name="color"
            placeholder="Enter Product Color"
            value={formData.color}
            onChange={(e) => setFormData({...formData, color: e.target.value})}
            autoComplete="off"
            className="h-[2rem] w-[20rem] my-[0.5rem] ml-[4.2rem] pl-[0.5rem] focus:outline-none"
          />
          {submit && formData.color.trim().length === 0 && (
            <div className="flex justify-end w-4/6">
              <h3 className="text-xs text-red-900">
                *** Product Color Is Required ***
              </h3>
            </div>
          )}
         </div>
          <div>
          <label className="text-lg" htmlFor="ProductDescription">
            Product Description :
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Enter Product Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            autoComplete="off"
            className="w-[20rem] my-[0.5rem] pl-[0.5rem] focus:outline-none ml-[1rem] align-text-top resize-y"
          />
          {submit && formData.description.trim().length === 0 && (
            <div className="flex justify-end w-4/6">
              <h3 className="text-xs text-red-900">
                *** Product Description Is Required ***
              </h3>
            </div>
          )}
          </div>
          <label htmlFor="samplefile">Choose Images :</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleFileSelect}
            // onChange={(e) => setFormData({...formData, images: e.target.files})}
            autoComplete="off"
            multiple
            className="h-[2rem] w-[20rem] my-[0.5rem] pl-[0.5rem] focus:outline-none ml-[0.5rem] ml-[4rem] "
          />
          {submit && formData.images.length === 0 && (
            <div className="flex justify-end w-4/6">
            <h3 className="text-xs text-red-900">
              *** Product Image Is Required ***
            </h3>
          </div>
          )}

          <div className="flex justify-center w-5/6 mt-[2rem] font-semibold text-white">
            <button
              className="h-[2.5rem] w-[8rem] bg-blue-800 rounded rounded-3xl"
              type="submit"
              onClick={handleSubmit}
              disabled= {dataSend}
            >
              { dataSend ? "Sending..." : "Submit" }
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
