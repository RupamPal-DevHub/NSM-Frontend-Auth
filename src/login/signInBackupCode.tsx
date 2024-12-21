import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SignInBackupCode = () => {
  const Navigate = useNavigate();
  const secretCode = [
    { id: 1, code: 12345 },
    { id: 2, code: 67890 },
    { id: 3, code: 54321 },
    { id: 4, code: 98765 },
    { id: 5, code: 11111 },
    { id: 6, code: 22222 },
    { id: 7, code: 33333 },
    { id: 8, code: 44444 },
    { id: 9, code: 55555 },
    { id: 10, code: 66666 },
  ];

  const part1 = secretCode.slice(0, 5);
  const part2 = secretCode.slice(5);

  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const handlePrintClick = () => {
    reactToPrintFn();
  };

  return (
    <>
      <ArrowLeft
        className="m-5 lg:m-10 absolute cursor-pointer"
        onClick={() => Navigate("/signintwofa")}
      />
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center px-4 lg:px-0">
          {/* Heading */}
          <div className="text-center w-full mb-6">
            <h1 className="text-lg sm:text-2xl font-bold">
              Message has been sent to e-mail to login into account.
            </h1>
          </div>

          {/* Backup Codes Section */}

          <div className="w-full md:w-[80%] xl:w-[60%] bg-[#00D1FF12] p-6 rounded-2xl shadow">
            {/* Message */}
            <div ref={contentRef}>
              <div className="mb-4">
                <h3 className="text-sm sm:text-base font-bold">
                  These are the backup codes you can use if you forgot your
                  password and pin again.
                </h3>
              </div>

              {/* Backup Codes */}
              <div className="flex justify-between sm:justify-center gap-16 text-sm sm:text-base font-semibold">
                <ul className="space-y-2">
                  {part1.map(({ id, code }) => (
                    <li key={id}>
                      {id}. {code}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {part2.map(({ id, code }) => (
                    <li key={id}>
                      {id}.{code}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Message */}
              <div className="mt-6 text-sm sm:text-base font-bold">
                <p>
                  You can request a new set of codes if you are running low in
                  codes, but after requesting new codes, only the new ones will
                  work, and the previous set becomes invalid.
                </p>
              </div>
            </div>
            {/* Buttons */}
            <div className="mt-6 flex justify-center sm:justify-end gap-4">
              <div
                onClick={() => {
                  navigate("/signinsuccess");
                }}
                className="px-6 py-2 font-sm bg-gray-200 text-gray-800 rounded cursor-pointer font-bold"
              >
                Next
              </div>
              <div
                onClick={handlePrintClick}
                className="px-6 font-sm bg-maintheme text-white rounded cursor-pointer flex items-center font-bold"
              >
                Print
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInBackupCode;
