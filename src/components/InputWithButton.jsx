import React from 'react';

function InputWithButton() {
  return (
    <div className="p-[2px] w-[600px] flex justify-center bg-white rounded-lg">
      <form className="flex w-full h-full bg-white rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-black m-none">
        <input
          type="email"
          placeholder="Indiquez votre email*"
          className="flex-1 px-4 py-4 text-center placeholder:text-gray-400 placeholder:text-lg outline-none"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold px-16 py-4 m-2 rounded-md hover:bg-orange-600 transition"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default InputWithButton;
