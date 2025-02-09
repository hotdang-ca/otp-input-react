import React, { useState } from "react";
import OTPInput from "./lib";

const OtpInputCard = ({ title, ...rest }) => {
  const [OTP, setOTP] = useState("");
  return (
    <div
      style={{
        padding: 12
      }}
    >
      <div style={{ marginBottom: 12 }}>{title}</div>
      <OTPInput value={OTP} onChange={setOTP} {...rest} />
    </div>
  );
};

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h2>OTP Input React</h2>
      <div>
        <OtpInputCard
          title="Secrate input with auto focus on mount"
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          secure
        />
        <OtpInputCard
          title="Number only input"
          // autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          // secure
        />
        <OtpInputCard
          title="Any character input"
          // autoFocus
          OTPLength={4}
          otpType="any"
          disabled={false}
          // secure
        />
        <OtpInputCard
          title="Disabled"
          // autoFocus
          OTPLength={4}
          otpType="any"
          disabled={true}
          // secure
        />
        <OtpInputCard
          title="6 length otp Inputs"
          // autoFocus
          OTPLength={6}
          otpType="any"
          disabled={false}
          // secure
        />
        <OtpInputCard
          title="Input styling with inputStyles prop"
          inputClassName="bottom__border"
          // autoFocus
          OTPLength={3}
          otpType="any"
          disabled={false}
          inputStyles={{
            border: 0,
            borderBottom: "1px solid #cbcbcb"
          }}
          // secure
        />
      </div>
    </div>
  );
}

export default App;
