function App() {
  const text = "Red Snickers";
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className=" text-[3rem] text-[#fefefe14] font-bold">{text}</h1>
      <h1 className=" text-[3rem] text-[#fffbfb48] font-bold relative bottom-7">{text}</h1>
      <h1 className=" text-[3rem] text-[#ffffffec] font-bold relative bottom-14">{text}</h1>
      <form className="flex p-8 rounded-xl flex-col min-w-[400px] w-[50%] h-[26rem] justify-center items-center bg-[#f5f0f0de]">
        <div className="product rounded h-[35rem] w-[90%] bg-cover bg-center" style={{backgroundImage: "url('/shoes.jpg')"}}></div>
        <input type="submit" value="Submit" className="mt-5 bg-gray-900 p-5 py-8 rounded-full text-[#ffffffe6]" />
      </form>
    </div>
  );
}

export default App;
