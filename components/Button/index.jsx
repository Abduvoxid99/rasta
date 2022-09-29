export function Button({ children, click }) {
  return (
    <button
      onClick={click}
      className="col-span-12 button py-[13px] w-full text-[20px] font-[500] outline-none bg-primary text-white rounded-[12px]"
    >
      {children}
    </button>
  );
}
