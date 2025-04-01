
import { Check, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const DepositCheckpoint = () => {
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(value);
  };
  
  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  
  const handleReset = () => {
    setStep(1);
    setAmount("");
  };
  
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Make Your Deposit
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Secure, fast, and hassle-free deposits with real-time verification
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between mb-10 relative">
            <div className="absolute top-1/2 h-1 transform -translate-y-1/2 bg-accent/20 w-full -z-10"></div>
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col items-center gap-2">
                <div 
                  className={`w-10 h-10 rounded-full ${
                    step >= item ? "bg-accent" : "bg-accent/20"
                  } flex items-center justify-center`}
                >
                  {step > item ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-white">{item}</span>
                  )}
                </div>
                <span className="text-white/60 text-sm">
                  {item === 1 
                    ? "Amount" 
                    : item === 2 
                    ? "Verification" 
                    : "Confirmation"}
                </span>
              </div>
            ))}
          </div>
          
          <Card className="p-8 glass-effect">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Enter Deposit Amount</h3>
                <div className="relative">
                  <Input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="0.00"
                    className="text-white bg-background/50 border-white/20 pl-7 text-xl h-14"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60">$</span>
                </div>
                <div className="flex gap-3 justify-center">
                  {["$100", "$500", "$1,000", "$5,000"].map((quickAmount) => (
                    <Button 
                      key={quickAmount}
                      onClick={() => setAmount(quickAmount.replace("$", "").replace(",", ""))}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      {quickAmount}
                    </Button>
                  ))}
                </div>
                <Button 
                  onClick={handleNextStep} 
                  disabled={!amount}
                  className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34] mt-4"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Verify Payment Method</h3>
                <div className="space-y-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="p-4 border border-white/20 rounded-lg flex items-center justify-between hover:bg-white/5 cursor-pointer transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">Credit Card</p>
                            <p className="text-white/60 text-sm">Visa ending in 4242</p>
                          </div>
                        </div>
                        <Check className="w-5 h-5 text-accent" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="bg-background border-white/20 text-white">
                      <div className="p-4">
                        <h4 className="text-xl font-semibold mb-4">Card Details</h4>
                        <p className="mb-6">Your card has been verified and is ready to use.</p>
                        <Button className="w-full">Manage Payment Methods</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <div className="p-4 border border-white/20 border-dashed rounded-lg flex items-center justify-center hover:bg-white/5 cursor-pointer h-20">
                    <p className="text-white/60">+ Add Payment Method</p>
                  </div>
                </div>
                <Button 
                  onClick={handleNextStep}
                  className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34] mt-4"
                >
                  Confirm Deposit <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Deposit Successful!</h3>
                <p className="text-white/60">
                  Your deposit of <span className="text-white font-medium">${amount}</span> has been successfully processed.
                </p>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">Amount:</span>
                    <span className="text-white">${amount}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">Transaction ID:</span>
                    <span className="text-white">TXN-{Math.floor(Math.random() * 1000000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Date:</span>
                    <span className="text-white">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
                <Button 
                  onClick={handleReset}
                  className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34] mt-4"
                >
                  Make Another Deposit
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DepositCheckpoint;
