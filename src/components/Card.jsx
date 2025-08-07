import "../App.css";
import { useState } from "react";
import image from "../images/bg-main-desktop.png";
import complete from "../images/icon-complete.svg";
import front from "../images/bg-card-front.png";
import back from "../images/bg-card-back.png";
import circle from "../images/card-logo.svg";

function Card() {
  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cardCvc: "",
  });

  const [confirmMessage, setConfirmMessage] = useState(false);

  const [errors, setErrors] = useState({});
  const validateForm = (name, value) => {
    switch (name) {
      case "cardName":
        if (!value) return "Must input cardholdername";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Wrong format, letters only";
        return "";

      case "cardNumber":
        if (!value) return "Can't be blank";
        if (!/^\d{16}$/.test(value.replace(/\s/g, "")))
          return "Wrong format, numbers only";
        return "";

      case "expiryMonth":
        if (!value) return "Can't be blank";
        if (!/^\d{2}$/.test(value)) return "Invalid month";
        return "";

      case "expiryYear":
        if (!value) return "Can't be blank";
        if (!/^\d{2}$/.test(value)) return "Invalid year";

        const currentYear = new Date().getFullYear() % 100;
        const inputYear = parseInt(value, 10);

        if (isNaN(inputYear) || inputYear < currentYear) {
          return "Invalid year";
        }

        return "";

      case "cardCvc":
        if (!value) return "Can't be blank";
        if (!/^\d{3,4}$/.test(value)) return "Wrong format, numbers only";
        return "";

      default:
        return "";
    }
  };

  const validateAllFields = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateForm(key, form[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((input) => ({
      ...input,
      [name]: value,
    }));

    const error = validateForm(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAllFields()) {
      setConfirmMessage(true);
    }
  };

  if (confirmMessage) {
    return (
      <div
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className="main h-screen "
      >
        {/* Mobile Success Message */}
        <div className="lg:hidden h-screen flex flex-col">
          <div
            className="h-70 flex items-center justify-center mb-10"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="z-10">
              <img
                src={front}
                alt="card-front"
                className="scale-120 relative left-25 top-25"
              />

              <div className="absolute top-40 left-6 text-white">
                <img
                  src={circle}
                  alt="card-logo"
                  className="scale-60 ml-16 mb-8"
                />
                <div className="text-xl tracking-widest ml-20 text-center ">
                  0000 0000 0000 0000
                </div>
                <div className="text-xs mt-5 tracking-widest flex justify-between pr-6 ml-20">
                  <span>APPLESEED JANE</span>
                  <span>09/00</span>
                </div>
              </div>
            </div>

            <div className="relative m-auto">
              <img
                src={back}
                alt="card-back"
                className="scale-120 relative right-17"
              />
              <div className="absolute right-21 top-14 text-sm italic text-white">
                000
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-6">
            <div className="flex flex-col text-center gap-5">
              <img src={complete} alt="Complete" className="w-12 h-12 m-auto" />
              <h1 className="text-2xl font-bold">Thank You!</h1>
              <p>We've added your card details.</p>
              <button
                type="submit"
                className="w-100 mt-5 text-white bg-[hsl(278,68%,11%)] rounded-sm p-2 hover:bg-[hsl(249,99%,64%)]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Success Message */}
        <div
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="hidden lg:flex h-screen"
        >
          <div
            className="w-1/4 h-full"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          <div className="absolute top-30 left-25">
            <img src={front} alt="card-front" className="scale-75" />

            <div className="absolute top-8 left-18 p-4 text-white">
              <div className="text-left">
                <img
                  src={circle}
                  alt="card-logo"
                  className="scale-60 ml-[-15px]"
                />
                <div className="text-xl tracking-widest mt-5">
                  0000 0000 0000 0000
                </div>
                <div className="text-xs mt-8 tracking-widest">
                  <span>APPLESEED JANE</span>
                  <span className="absolute left-58 tracking-wider">09/00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-83 left-45">
            <img src={back} alt="card-back" className="scale-75" />
            <div className="absolute top-28 right-25 text-lg text-white italic">
              000
            </div>
          </div>

          <div className="flex-1 h-full bg-white flex items-center justify-center">
            <div className="flex flex-col text-center gap-3">
              <img src={complete} alt="Complete" className="w-12 h-12 m-auto" />
              <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
              <p>We've added your card details.</p>
              <button
                type="submit"
                className="text-white bg-[hsl(278,68%,11%)] rounded-sm p-2 hover:bg-[hsl(249,99%,64%)]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      className="main h-screen"
    >
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen bg-white">
        {/* Mobile Card Section */}
        <div
          className="h-70 flex items-center justify-center "
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Front Card */}
          <div className="z-10">
            <img
              src={front}
              alt="card-front"
              className="scale-120 relative left-25 top-28"
            />
            <div className="absolute top-39 left-6 text-white">
              <img
                src={circle}
                alt="card-logo"
                className="scale-60 ml-16 mt-5"
              />
              <div className="text-xl tracking-widest ml-20 mt-5">
                {form.cardNumber || "9591 6481 6389 101E"}
              </div>
              <div className="text-xs mt-6 tracking-widest flex justify-between pr-6 ml-20">
                <span>{form.cardName || "VICTORIS LEIRE"}</span>
                <span className="">
                  {form.expiryMonth || "09"}/{form.expiryYear || "00"}
                </span>
              </div>
            </div>
          </div>

          {/* Back Card */}
          <div className="relative m-auto">
            <img
              src={back}
              alt="card-back"
              className="scale-120 relative right-17"
            />
            <div className="absolute right-21 top-14 text-sm italic text-white">
              {form.cardCvc || "000"}
            </div>
          </div>
        </div>

        {/* Mobile Form */}
        <div className="flex-1 content-center p-6 ">
          <button
            style={{ backgroundColor: "red", color: "white", margin: "10px" }}
            onClick={() => setConfirmMessage(!confirmMessage)}
          >
            {confirmMessage ? "Show Form" : "Show Message"} (DEV)
          </button>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-left w-full max-w-sm mx-auto"
          >
            <div className="flex flex-col">
              <label className="text-xs" htmlFor="name">
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                name="cardName"
                value={form.cardName}
                onChange={handleChange}
                className={`border rounded-sm p-2 focus:outline-none ${
                  errors.cardName
                    ? "border-[hsl(0,100%,66%)] focus:border-[hsl(0,100%,66%)]"
                    : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                }`}
                required
              />
              {errors.cardName && (
                <span className="text-red-500 text-xs">{errors.cardName}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-xs" htmlFor="num">
                CARD NUMBER
              </label>
              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                className={`border rounded-sm p-2 focus:outline-none ${
                  errors.cardNumber
                    ? "border-[hsl(0,100%,66%)] focus:border-[hsl(0,100%,66%)]"
                    : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                }`}
                required
              />
              {errors.cardNumber && (
                <span className="text-red-500 text-xs">
                  {errors.cardNumber}
                </span>
              )}
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col flex-1">
                <label className="text-xs" htmlFor="expiry">
                  EXP. DATE (MM/YY)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="expiryMonth"
                    value={form.expiryMonth || ""}
                    onChange={handleChange}
                    placeholder="MM"
                    maxLength="2"
                    className={`border rounded-sm p-2 flex-1 w-20 focus:outline-none ${
                      errors.cardExp
                        ? "border-[hsl(0,100%,66%)] focus:border-[hsl(0,100%,66%)]"
                        : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                    }`}
                  />
                  <input
                    type="text"
                    name="expiryYear"
                    value={form.expiryYear || ""}
                    onChange={handleChange}
                    placeholder="YY"
                    maxLength="2"
                    className={`border rounded-sm p-2 flex-1 w-20 focus:outline-none ${
                      errors.cardExp
                        ? "border-[hsl(0,100%,66%)] focus:border-[hsl(0,100%,66%)]"
                        : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                    }`}
                  />
                </div>
                {errors.cardExp && (
                  <span className="text-red-500 text-xs">{errors.cardExp}</span>
                )}
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-xs" htmlFor="cvc">
                  CVC
                </label>
                <input
                  type="text"
                  name="cardCvc"
                  value={form.cardCvc}
                  onChange={handleChange}
                  className={`border rounded-sm p-2 focus:outline-none ${
                    errors.cardCvc
                      ? "border-[hsl(0,100%,66%)] focus:border-[hsl(0,100%,66%)]"
                      : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                  }`}
                  required
                />
                {errors.cardCvc && (
                  <span className="text-red-500 text-xs">{errors.cardCvc}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-[hsl(278,68%,11%)] rounded-sm p-2 hover:bg-[hsl(249,99%,64%)]"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>

      {/* Desktop, omo */}

      <div className="hidden lg:flex h-full">
        <div
          className="w-1/4 h-full"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="absolute top-30 left-25">
          <img src={front} alt="card-front" className="scale-75" />
          <div className="absolute top-9 left-20 p-4 text-white">
            <img src={circle} alt="card-logo" className="scale-60 ml-[-15px]" />
            <div className="text-left">
              <div className="text-xl tracking-widest mt-5">
                {form.cardNumber || "9591 6481 6389 101E"}
              </div>
              <div className="text-xs mt-8">
                <span>VICTORIS LEIRE</span>
                <span className="absolute left-58">09/00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-83 left-45">
          <img src={back} alt="card-back" className="scale-75" />
          <div className="absolute top-28 right-25 text-lg text-white italic">
            {form.cardCvc || "000"}
          </div>
        </div>

        <div className="flex-1 h-full bg-white flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-left "
          >
            <div className="flex flex-col">
              <label className="text-xs" htmlFor="name">
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                name="cardName"
                value={form.cardName}
                onChange={handleChange}
                className={`border rounded-sm p-1 focus:outline-none ${
                  errors.cardName
                    ? "border-[hsl(0,100%,66%)] focus:[hsl(0,100%,66%)]"
                    : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                }`}
                required
              />
              {errors.cardName && (
                <span className="text-red-500 text-xs">{errors.cardName}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-xs" htmlFor="num">
                CARD NUMBER
              </label>
              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                className={`border rounded-sm p-1 focus:outline-none ${
                  errors.cardNumber
                    ? "border-[hsl(0,100%,66%)] focus:[hsl(0,100%,66%)]"
                    : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                }`}
                required
              />
              {errors.cardNumber && (
                <span className="text-red-500 text-xs">
                  {errors.cardNumber}
                </span>
              )}
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col flex-1">
                <label className="text-xs" htmlFor="expiry">
                  EXP. DATE (MM/YY){" "}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="expiryMonth"
                    value={form.expiryMonth || ""}
                    onChange={handleChange}
                    placeholder="MM"
                    maxLength="2"
                    className={`border rounded-sm p-1 w-16 focus:outline-none ${
                      errors.expiryMonth
                        ? "border-[hsl(0,100%,66%)] focus:[hsl(0,100%,66%)]"
                        : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                    }`}
                  />
                  {errors.expiryMonth && (
                    <span className="text-red-500 text-xs">
                      {errors.expiryMonth}
                    </span>
                  )}
                  <input
                    type="text"
                    name="expiryYear"
                    value={form.expiryYear || ""}
                    onChange={handleChange}
                    placeholder="YY"
                    maxLength="2"
                    className={`border rounded-sm p-1 w-16 focus:outline-none ${
                      errors.expiryYear
                        ? "border-[hsl(0,100%,66%)] focus:[hsl(0,100%,66%)]"
                        : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                    }`}
                  />
                </div>
                {errors.expiryYear && (
                  <span className="text-red-500 text-xs">
                    {errors.expiryYear}
                  </span>
                )}
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-xs" htmlFor="cvc">
                  CVC{" "}
                </label>
                <input
                  type="text"
                  name="cardCvc"
                  value={form.cardCvc}
                  onChange={handleChange}
                  className={`border rounded-sm p-1 focus:outline-none ${
                    errors.cardCvc
                      ? "border-[hsl(0,100%,66%)] focus:[hsl(0,100%,66%)]"
                      : "border-[hsl(249,99%,64%)] focus:border-[hsl(249,99%,64%)]"
                  }`}
                  required
                />
                {errors.cardCvc && (
                  <span className="text-red-500 text-xs">{errors.cardCvc}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-[hsl(278,68%,11%)] rounded-sm p-2 hover:bg-[hsl(249,99%,64%)]"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card;

// function Carddesign () {
//     return (
// //         <div>
// //             <div className='box-border rounded-sm w-75 h-40 bg-[hsl(0,100%,66%)] relative top-20'>
// //                 <div className='w-8 h-8 rounded-full bg-[hsl(0,100%,100%)] absolute top-4 left-8'></div>
// //                 <p className='text-[hsl(0,100%,100%)] text-left tracking-widest font-bold top-22 left-8 absolute'>9591 6481 6389 101E</p>
// //                 <div className='letter'>
// //                     <p className='text-[hsl(0,100%,100%)] text-left text-xs tracking-widest absolute top-32 left-8'>VICTORIS LEIRE</p>
// //                     <p className='text-[hsl(0,100%,100%)] text-left text-xs tracking-widest absolute top-32 left-53'>09 / 00</p>
// //                 </div>
// //             </div>
// //             <div className='box-border rounded-sm w-80 h-40 bg-zinc-200 absolute top-90 left-55'>
// //                 <div className='w-80 h-10 bg-zinc-700 mt-5'></div>
// //                 <div className='w-60 h-6 bg-[hsl(212,12%,71%)] m-auto mt-4 rounded-sm text-[hsl(0,100%,100%)] text-right italic'>000</div>
// //             </div>

//     )
// }
