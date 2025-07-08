export const PaymentDetails = () => {
    return (
        <div>
            <div className="flex flex-col p-5">
                  <h2 className="text-2xl font-semibold py-6">Job Details</h2>
                  <div className="flex flex-col gap-3  bg-gray-50 backdrop-blur-[50px] rounded-[15px]">
                    <div className="w-full p-5 space-y-5">
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Job Title</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          title
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Service</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          service
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Category</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          category
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">
                          Subcategory
                        </span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          subcategory
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Budget</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          budget
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Status</span>
                        <p
                          className={
                            "font-[400] text-[18px] text-green-500"
                          }
                        >
                          status
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">
                          Payment Status
                        </span>
                        <p
                          className={
                            "font-[400] text-[18px] text-green-500"
                          }
                        >
                          paymentStatus
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Address</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          address
                        </p>
                      </div>
                      <div className="w-full border-b pb-3 ">
                        <span className="font-[500] text-[18px] text-black">Date</span>
                        <p className="font-[400] text-[18px] text-gray-500">
                          date
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-2 gap-5 py-6 ">
                  <div className="bg-gray-50 p-5 rounded-[15px]">
                      <p className="font-[500] text-[18px] text-black">Provider </p>
                      <div className="w-full flex items-center gap-3 pt-4">
                        <img
                          src={""}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />
            
                        <div className="flex flex-col">
                          <p className="font-[400] text-[18px] text-gray-500">
                            name
                          </p>
            
                          <p className="font-[400] text-[18px] text-gray-500">
                            email
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-[15px]">
                      <p className="font-[500] text-[18px] text-black">User</p>
                      <div className="w-full flex items-center gap-3 pt-4">
                        <img
                          src={""}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />
            
                        <div className="flex flex-col">
                          <p className="font-[400] text-[18px] text-gray-500">
                            name
                          </p>
            
                          <p className="font-[400] text-[18px] text-gray-500">
                            email
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    );
};