import React from "react";

export default function Comment() {
  return (
    <div className="flex-1 m-12 pl-40 pr-40">
      <div className="border-l-4 border-indigo-500 pl-4 mb-5" style={{ height: "27px" }}>
        <label for="komen" className="font-bold text-xl">2 Komentar</label>
      </div>
      <div className="flex items-center">
        <textarea placeholder="Tulis Komentar..." name="komen" id="komen" cols="117" rows="3" className="rounded-lg border-gray-400 focus:border-indigo-700 mb-4 mr-2"></textarea>

        <button className="bg-indigo-500 hover:bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center ml-2 mt-8 transform rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        </button>

      </div>
      <div className="m-2 mb-5">
        <div className="flex items-center">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-11 rounded-full">
                    <img src="https://as2.ftcdn.net/v2/jpg/00/64/67/27/1000_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="Avatar" />
                </div>
                    </label>
                    <div className="ml-2">
                        <span className="text-sm font-semibold">Maman Gabrug</span>
                        <p className="text-black-100 text-sm mb-1">Contoh Komentar yang baik, benar dan teladan😎</p>
                        <p className="text-gray-400 text-xs">14-07-2077</p>
                    </div>
                </div>
          </div>
          <div className="m-2">
        <div className="flex items-center">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-11 rounded-full">
                    <img src="/images/melvin.jpg" alt="Avatar" />
                </div>
                    </label>
                    <div className="ml-2">
                        <span className="text-sm font-semibold">Maman Gibrig</span>
                        <p className="text-black-100 text-sm mb-1">Contoh Komentar yang baik, benar dan Acumalaka🤣</p>
                        <p className="text-gray-400 text-xs">23-05-2079</p>
                    </div>
                </div>
          </div>
        
        </div>
        
  );
}
