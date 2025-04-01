
import { useState } from "react";
import { CreditCard, Check, CircleAlert, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DepositPage = () => {
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  
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
  
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(value);
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCardNumber(value);
  };
  
  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9/]/g, "");
    setCardExpiry(value);
  };
  
  const handleCardCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCardCvc(value);
  };
  
  const handleReset = () => {
    setStep(1);
    setAmount("");
    setPaymentMethod("");
    setPhoneNumber("");
    setCardNumber("");
    setCardExpiry("");
    setCardCvc("");
  };
  
  return (
    <div className="py-10 px-4 bg-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      
      <div className="max-w-md mx-auto relative z-10">
        <Card className="glass-effect border-0">
          <CardContent className="p-6">
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Vertex Trading FX</h2>
              <p className="text-white/60 text-center">Deposit funds to your trading account</p>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between mb-10 relative">
                <div className="absolute top-1/2 h-1 transform -translate-y-1/2 bg-accent/20 w-full -z-10"></div>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex flex-col items-center gap-2">
                    <div 
                      className={`w-10 h-10 rounded-full ${
                        step >= item ? "bg-[#F2FF44]" : "bg-accent/20"
                      } flex items-center justify-center`}
                    >
                      {step > item ? (
                        <Check className="w-5 h-5 text-black" />
                      ) : (
                        <span className={step >= item ? "text-black" : "text-white"}>{item}</span>
                      )}
                    </div>
                    <span className="text-white/60 text-sm">
                      {item === 1 
                        ? "Amount" 
                        : item === 2 
                        ? "Payment" 
                        : "Confirm"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Step 1: Amount */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="amount" className="text-white mb-2 block">Enter Deposit Amount</Label>
                  <div className="relative">
                    <Input
                      id="amount"
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="0.00"
                      className="text-white bg-background/50 border-white/20 pl-7 text-xl h-14"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60">$</span>
                  </div>
                </div>
                
                <div className="flex gap-2 justify-center">
                  {["$100", "$500", "$1,000"].map((quickAmount) => (
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
                
                <div className="bg-accent/10 p-4 rounded-lg flex items-center gap-3">
                  <CircleAlert className="text-accent w-5 h-5 flex-shrink-0" />
                  <p className="text-white/80 text-sm">Minimum deposit amount is $50. Funds will be processed based on the selected payment method.</p>
                </div>
                
                <Button 
                  onClick={handleNextStep} 
                  disabled={!amount || parseFloat(amount) < 50}
                  className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34] mt-4"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
            
            {/* Step 2: Payment Method */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Select Payment Method</h3>
                
                <div className="space-y-4">
                  <div 
                    className={`p-4 border ${paymentMethod === 'mpesa' ? 'border-[#F2FF44]' : 'border-white/20'} rounded-lg flex items-center justify-between hover:bg-white/5 cursor-pointer transition-all`}
                    onClick={() => setPaymentMethod('mpesa')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">M-Pesa</p>
                        <p className="text-white/60 text-sm">Mobile Money Transfer</p>
                      </div>
                    </div>
                    {paymentMethod === 'mpesa' && <Check className="w-5 h-5 text-[#F2FF44]" />}
                  </div>
                  
                  <div 
                    className={`p-4 border ${paymentMethod === 'airtel' ? 'border-[#F2FF44]' : 'border-white/20'} rounded-lg flex items-center justify-between hover:bg-white/5 cursor-pointer transition-all`}
                    onClick={() => setPaymentMethod('airtel')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Airtel Money</p>
                        <p className="text-white/60 text-sm">Mobile Money Transfer</p>
                      </div>
                    </div>
                    {paymentMethod === 'airtel' && <Check className="w-5 h-5 text-[#F2FF44]" />}
                  </div>
                  
                  <div 
                    className={`p-4 border ${paymentMethod === 'card' ? 'border-[#F2FF44]' : 'border-white/20'} rounded-lg flex items-center justify-between hover:bg-white/5 cursor-pointer transition-all`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Visa / Mastercard</p>
                        <p className="text-white/60 text-sm">Credit or Debit Card</p>
                      </div>
                    </div>
                    {paymentMethod === 'card' && <Check className="w-5 h-5 text-[#F2FF44]" />}
                  </div>
                </div>
                
                {/* Mobile Money Form Fields */}
                {(paymentMethod === 'mpesa' || paymentMethod === 'airtel') && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder={paymentMethod === 'mpesa' ? "254XXXXXXXXX" : "100XXXXXXX"}
                        className="text-white bg-background/50 border-white/20"
                      />
                    </div>
                  </div>
                )}
                
                {/* Card Form Fields */}
                {paymentMethod === 'card' && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-white mb-2 block">Card Number</Label>
                      <Input
                        id="cardNumber"
                        type="text"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="text-white bg-background/50 border-white/20"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-white mb-2 block">Expiry Date</Label>
                        <Input
                          id="expiry"
                          type="text"
                          value={cardExpiry}
                          onChange={handleCardExpiryChange}
                          placeholder="MM/YY"
                          className="text-white bg-background/50 border-white/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-white mb-2 block">CVC</Label>
                        <Input
                          id="cvc"
                          type="text"
                          value={cardCvc}
                          onChange={handleCardCvcChange}
                          placeholder="123"
                          className="text-white bg-background/50 border-white/20"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-3 mt-8">
                  <Button 
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleNextStep}
                    disabled={!paymentMethod || 
                      ((paymentMethod === 'mpesa' || paymentMethod === 'airtel') && !phoneNumber) ||
                      (paymentMethod === 'card' && (!cardNumber || !cardExpiry || !cardCvc))}
                    className="flex-1 bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                  >
                    Continue <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 bg-[#F2FF44]/20 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-10 h-10 text-[#F2FF44]" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Deposit Initiated!</h3>
                <p className="text-white/60">
                  Your deposit of <span className="text-white font-medium">${amount}</span> has been initiated and is being processed.
                </p>
                
                <div className="p-5 bg-white/5 rounded-lg text-left">
                  <div className="flex justify-between mb-3">
                    <span className="text-white/60">Amount:</span>
                    <span className="text-white">${amount}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-white/60">Payment Method:</span>
                    <span className="text-white capitalize">
                      {paymentMethod === 'mpesa' ? 'M-Pesa' : 
                       paymentMethod === 'airtel' ? 'Airtel Money' : 
                       'Visa/Mastercard'}
                    </span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-white/60">Transaction ID:</span>
                    <span className="text-white">VTX-{Math.floor(Math.random() * 1000000)}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-white/60">Status:</span>
                    <span className="text-yellow-400">Processing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Date:</span>
                    <span className="text-white">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
                
                {(paymentMethod === 'mpesa' || paymentMethod === 'airtel') && (
                  <div className="bg-accent/10 p-4 rounded-lg flex items-center gap-3">
                    <CircleAlert className="text-accent w-5 h-5 flex-shrink-0" />
                    <p className="text-white/80 text-sm">
                      {paymentMethod === 'mpesa' 
                        ? "Check your M-Pesa phone for a prompt to complete the transaction." 
                        : "Check your Airtel Money phone for a prompt to complete the transaction."}
                    </p>
                  </div>
                )}
                
                <div className="flex gap-3 mt-8">
                  <Button 
                    onClick={handleReset}
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    New Deposit
                  </Button>
                  <Button 
                    className="flex-1 bg-white/10 text-white hover:bg-white/20"
                    onClick={() => window.location.href = '/dashboard'}
                  >
                    View Dashboard
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Vertex Trading FX. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
