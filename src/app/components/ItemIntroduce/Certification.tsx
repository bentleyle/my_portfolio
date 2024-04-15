import React from "react";

const Certification = () => {
  return (
    <div className="p-4">
      <div className="text-white rounded-md leading-loose text-sm md:text-[16px]">
        <div className="mb-6">
          <div className="font-bold mb-1">
            1/ Udemy Certificate
            <div className="flex gap-1">
              <strong className="font-bold">UID</strong>:
              <p className="font-thin italic">
                UC-a8ef9ddf-737a-4f93-8713-46dcecb74080
              </p>
            </div>
          </div>

          <div className=" flex justify-between items-center">
            <div className="flex items-center">
              <img src="/udemy.png" width={50} alt="" />
              <p className="font-bold">
                Javascript Course 2023: From Zero to Expert
              </p>
            </div>
            <div>
              <p className="italic font-thin">2023</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-1 font-bold">
            2/ FPT Poly Workshop Certificate
            <div className="flex gap-1">
              <strong className="font-bold">Link</strong>:
              <a
                href="https://xuongthuchanh.poly.edu.vn/certificate/PS27128/654cced4e0d02c7838ebec45"
                target="_blank"
                className="font-thin italic hover:text-gray-300">
                click to view certificate
              </a>
            </div>
          </div>
          <div className=" flex justify-between items-center mt-2">
            <div>
              <div className="flex items-center">
                <img src="/fpt.png" width={50} alt="" />
                <p className="font-bold ml-2">
                  Techchain E-Commerce Website Project{" "}
                </p>
              </div>
            </div>
            <div>
              <p className="italic font-thin">2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
