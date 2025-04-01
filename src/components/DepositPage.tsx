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
    <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-background to-background/80 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-md mx-auto relative z-10">
        <Card className="border border-white/10 shadow-xl bg-black/30 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex flex-col items-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">Vertex Trading FX</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#F2FF44]/50 to-[#F2FF44] rounded-full mb-4"></div>
              <p className="text-white/60 text-center text-sm">Secure Deposit Portal</p>
            </div>
            
            <div className="mb-10">
              <div className="flex justify-between mb-10 relative">
                <div className="absolute top-1/2 h-[2px] transform -translate-y-1/2 bg-white/10 w-full -z-10"></div>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex flex-col items-center gap-2">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm ${
                        step >= item 
                          ? "bg-gradient-to-br from-[#F2FF44] to-[#E2EF34] text-black" 
                          : "bg-white/5 border border-white/10 text-white/60"
                      } transition-all duration-300 shadow-lg`}
                    >
                      {step > item ? (
                        <Check className="w-5 h-5 text-black" />
                      ) : (
                        <span className={`font-semibold ${step >= item ? "text-black" : "text-white/60"}`}>{item}</span>
                      )}
                    </div>
                    <span className={`text-sm ${step >= item ? "text-white" : "text-white/40"} font-medium`}>
                      {item === 1 
                        ? "Amount" 
                        : item === 2 
                        ? "Method" 
                        : "Confirm"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <Label htmlFor="amount" className="text-white font-medium mb-2 block">Deposit Amount</Label>
                  <div className="relative">
                    <Input
                      id="amount"
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder="0.00"
                      className="text-white bg-white/5 border-white/10 pl-10 text-xl h-14 rounded-xl focus-visible:ring-[#F2FF44]/50 transition-all"
                    />
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 font-medium">$</span>
                  </div>
                </div>
                
                <div className="flex gap-2 justify-between">
                  {["$100", "$500", "$1,000"].map((quickAmount) => (
                    <Button 
                      key={quickAmount}
                      onClick={() => setAmount(quickAmount.replace("$", "").replace(",", ""))}
                      variant="outline"
                      className="flex-1 border-white/10 text-white bg-white/5 hover:bg-white/10 rounded-xl hover:border-white/20 transition-all"
                    >
                      {quickAmount}
                    </Button>
                  ))}
                </div>
                
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <CircleAlert className="text-[#F2FF44] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm">Minimum deposit amount is $50. Funds will be processed instantly via your selected payment method.</p>
                </div>
                
                <Button 
                  onClick={handleNextStep} 
                  disabled={!amount || parseFloat(amount) < 50}
                  className="w-full bg-gradient-to-r from-[#F2FF44] to-[#E2EF34] text-black hover:from-[#E2EF34] hover:to-[#D2DF24] rounded-xl h-12 font-medium disabled:opacity-50 transition-all shadow-lg shadow-[#F2FF44]/10"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white text-center mb-6">Select Payment Method</h3>
                
                <div className="space-y-4">
                  <div 
                    className={`p-4 rounded-xl border ${
                      paymentMethod === 'mpesa' 
                        ? 'border-[#F2FF44]/70 bg-white/10' 
                        : 'border-white/10 bg-white/5'
                    } flex items-center justify-between hover:bg-white/10 cursor-pointer transition-all`}
                    onClick={() => setPaymentMethod('mpesa')}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        paymentMethod === 'mpesa' ? 'bg-[#F2FF44]/20' : 'bg-white/5'
                      }`}>
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg" 
                          alt="M-Pesa" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium">M-Pesa</p>
                        <p className="text-white/60 text-sm">Fast Mobile Transfer</p>
                      </div>
                    </div>
                    {paymentMethod === 'mpesa' && <Check className="w-5 h-5 text-[#F2FF44]" />}
                  </div>
                  
                  <div 
                    className={`p-4 rounded-xl border ${
                      paymentMethod === 'airtel' 
                        ? 'border-[#F2FF44]/70 bg-white/10' 
                        : 'border-white/10 bg-white/5'
                    } flex items-center justify-between hover:bg-white/10 cursor-pointer transition-all`}
                    onClick={() => setPaymentMethod('airtel')}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        paymentMethod === 'airtel' ? 'bg-[#F2FF44]/20' : 'bg-white/5'
                      }`}>
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/1/18/Airtel_logo.svg" 
                          alt="Airtel Money" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium">Airtel Money</p>
                        <p className="text-white/60 text-sm">Mobile Money Transfer</p>
                      </div>
                    </div>
                    {paymentMethod === 'airtel' && <Check className="w-5 h-5 text-[#F2FF44]" />}
                  </div>
                  
                  <div 
                    className={`p-4 rounded-xl border ${
                      paymentMethod === 'card' 
                        ? 'border-[#F2FF44]/70 bg-white/10' 
                        : 'border-white/10 bg-white/5'
                    } flex items-center justify-between hover:bg-white/10 cursor-pointer transition-all`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        paymentMethod === 'card' ? 'bg-[#F2FF44]/20' : 'bg-white/5'
                      }`}>
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                          alt="Visa / Mastercard" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium">Visa / Mastercard</p>
                        <p className="text-white/60 text-sm">Credit or Debit Card</p>
                      </div>
                    </div>
                    {paymentMethod === 'card' && <Check className="w-5 h-5 text-[#F2FF44]" />}
                  </div>
                </div>
                
                {(paymentMethod === 'mpesa' || paymentMethod === 'airtel') && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="phone" className="text-white font-medium mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder={paymentMethod === 'mpesa' ? "254XXXXXXXXX" : "100XXXXXXX"}
                        className="text-white bg-white/5 border-white/10 rounded-xl h-12 focus-visible:ring-[#F2FF44]/50"
                      />
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-white font-medium mb-2 block">Card Number</Label>
                      <Input
                        id="cardNumber"
                        type="text"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="text-white bg-white/5 border-white/10 rounded-xl h-12 focus-visible:ring-[#F2FF44]/50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-white font-medium mb-2 block">Expiry Date</Label>
                        <Input
                          id="expiry"
                          type="text"
                          value={cardExpiry}
                          onChange={handleCardExpiryChange}
                          placeholder="MM/YY"
                          className="text-white bg-white/5 border-white/10 rounded-xl h-12 focus-visible:ring-[#F2FF44]/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-white font-medium mb-2 block">CVC</Label>
                        <Input
                          id="cvc"
                          type="text"
                          value={cardCvc}
                          onChange={handleCardCvcChange}
                          placeholder="123"
                          className="text-white bg-white/5 border-white/10 rounded-xl h-12 focus-visible:ring-[#F2FF44]/50"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-3 mt-8">
                  <Button 
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="flex-1 border-white/10 text-white bg-white/5 hover:bg-white/10 rounded-xl"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleNextStep}
                    disabled={!paymentMethod || 
                      ((paymentMethod === 'mpesa' || paymentMethod === 'airtel') && !phoneNumber) ||
                      (paymentMethod === 'card' && (!cardNumber || !cardExpiry || !cardCvc))}
                    className="flex-1 bg-gradient-to-r from-[#F2FF44] to-[#E2EF34] text-black hover:from-[#E2EF34] hover:to-[#D2DF24] rounded-xl font-medium shadow-lg shadow-[#F2FF44]/10"
                  >
                    Continue <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F2FF44]/20 to-[#F2FF44]/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-[#F2FF44]/30">
                  <Check className="w-10 h-10 text-[#F2FF44]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Deposit Initiated</h3>
                <p className="text-white/70">
                  Your deposit of <span className="text-white font-medium">${amount}</span> has been initiated and is being processed.
                </p>
                
                <div className="p-6 bg-white/5 rounded-xl text-left border border-white/10">
                  <div className="flex justify-between mb-4">
                    <span className="text-white/60">Amount:</span>
                    <span className="text-white font-medium">${amount}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-white/60">Payment Method:</span>
                    <span className="text-white font-medium capitalize">
                      {paymentMethod === 'mpesa' ? 'M-Pesa' : 
                       paymentMethod === 'airtel' ? 'Airtel Money' : 
                       'Visa/Mastercard'}
                    </span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-white/60">Transaction ID:</span>
                    <span className="text-white font-medium">VTX-{Math.floor(Math.random() * 1000000)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-white/60">Status:</span>
                    <span className="text-[#F2FF44] font-medium">Processing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Date:</span>
                    <span className="text-white font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
                
                {(paymentMethod === 'mpesa' || paymentMethod === 'airtel') && (
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                    <CircleAlert className="text-[#F2FF44] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm text-left">
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
                    className="flex-1 border-white/10 text-white bg-white/5 hover:bg-white/10 rounded-xl"
                  >
                    New Deposit
                  </Button>
                  <Button 
                    className="flex-1 bg-white/10 text-white hover:bg-white/20 rounded-xl font-medium"
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
