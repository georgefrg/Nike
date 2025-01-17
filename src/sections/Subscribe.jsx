import MyButton from "../Components/Button";

export default function Subscribe() {
  return (
    <section
      className="flex items-center justify-between gap-10 max-container max-lg:flex-col"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up from
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <MyButton label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
}
