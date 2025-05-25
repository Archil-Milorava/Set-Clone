const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className="px-4 py-2 bg-[#FFD106] cursor-pointer text-black uppercase font-semibold hover:bg-yellow-500 transition"
    {...props}
  >
    {children}
  </button>
);

export default Button