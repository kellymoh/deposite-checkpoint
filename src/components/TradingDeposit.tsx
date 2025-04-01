
import { useState } from "react";
import { Check, CreditCard, ArrowRight, DollarSign, BarChart4, Wallet, Clock, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";

const TradingDeposit = () => {
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  
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

  const marketData = [
    { pair: "BTC/USD", price: "66,432.80", change: "+2.14%" },
    { pair: "ETH/USD", price: "3,291.45", change: "+1.75%" },
    { pair: "SOL/USD", price: "147.89", change: "-0.32%" },
  ];
  
  return (
    <div className="py-16 px-4 bg-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Trading panel - Left side (3 columns on large screens) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Vertex Exchange</h2>
              <div className="flex items-center gap-2">
                <span className="text-white/60 text-sm">Network:</span>
                <span className="bg-accent/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Ethereum
                </span>
              </div>
            </div>
            
            {/* Market overview */}
            <Card className="glass-effect border-0">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white text-lg font-medium">Market Overview</h3>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    <BarChart4 className="w-4 h-4 mr-2" /> Charts
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {marketData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                          {item.pair.split('/')[0].charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-medium">{item.pair}</p>
                          <p className="text-white/60 text-xs">24h Volume: $1.2B</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">${item.price}</p>
                        <p className={item.change.startsWith('+') ? 'text-green-400 text-xs' : 'text-red-400 text-xs'}>
                          {item.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Recent transactions */}
            <Card className="glass-effect border-0">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-medium mb-4">Recent Activity</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                        <Wallet className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Deposit Completed</p>
                        <p className="text-white/60 text-xs">2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-white font-medium">+$5,000.00</p>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
                        <BarChart4 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-white font-medium">BTC/USD Trade</p>
                        <p className="text-white/60 text-xs">5 hours ago</p>
                      </div>
                    </div>
                    <p className="text-white font-medium">0.025 BTC</p>
                  </div>
                  
                  <div className="flex justify-between items-center p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-500">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Limit Order Placed</p>
                        <p className="text-white/60 text-xs">Yesterday</p>
                      </div>
                    </div>
                    <p className="text-white font-medium">ETH $3,450.00</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4 text-white border-white/20 hover:bg-white/10">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Deposit panel - Right side (2 columns on large screens) */}
          <div className="lg:col-span-2">
            <Card className="glass-effect border-0 sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Deposit Funds</h3>
                
                <div className="mb-8">
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
                    
                    <div className="bg-accent/10 p-4 rounded-lg flex items-center gap-3">
                      <CircleAlert className="text-accent w-5 h-5 flex-shrink-0" />
                      <p className="text-white/80 text-sm">Deposits are typically processed within 1-3 business days depending on your payment method.</p>
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
                
                {/* Step 2: Payment Method */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">Select Payment Method</h3>
                    
                    <div className="space-y-4">
                      <Sheet>
                        <SheetTrigger asChild>
                          <div 
                            className={`p-4 border ${paymentMethod === 'card' ? 'border-accent' : 'border-white/20'} rounded-lg flex items-center justify-between hover:bg-white/5 cursor-pointer transition-all`}
                            onClick={() => setPaymentMethod('card')}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <CreditCard className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-white font-medium">Credit Card</p>
                                <p className="text-white/60 text-sm">Visa ending in 4242</p>
                              </div>
                            </div>
                            {paymentMethod === 'card' && <Check className="w-5 h-5 text-accent" />}
                          </div>
                        </SheetTrigger>
                        <SheetContent className="bg-background border-white/20 text-white">
                          <div className="p-4">
                            <h4 className="text-xl font-semibold mb-4">Card Details</h4>
                            <p className="mb-6">Your card has been verified and is ready to use.</p>
                            <Button className="w-full">Manage Payment Methods</Button>
                          </div>
                        </SheetContent>
                      </Sheet>
                      
                      <div 
                        className={`p-4 border ${paymentMethod === 'bank' ? 'border-accent' : 'border-white/20'} rounded-lg flex items-center justify-between hover:bg-white/5 cursor-pointer transition-all`}
                        onClick={() => setPaymentMethod('bank')}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">Bank Transfer</p>
                            <p className="text-white/60 text-sm">ACH / Wire Transfer</p>
                          </div>
                        </div>
                        {paymentMethod === 'bank' && <Check className="w-5 h-5 text-accent" />}
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="p-4 border border-white/20 border-dashed rounded-lg flex items-center justify-center hover:bg-white/5 cursor-pointer h-16">
                            <p className="text-white/60">+ Add Payment Method</p>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="bg-background border-white/20 text-white">
                          <div className="p-4">
                            <h4 className="text-xl font-semibold mb-4">Add Payment Method</h4>
                            <p className="mb-6">Add a new payment method to your account.</p>
                            <Button className="w-full">Add Payment Method</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    
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
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-10 h-10 text-accent" />
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
                        <span className="text-white capitalize">{paymentMethod}</span>
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
                    
                    <div className="bg-accent/10 p-4 rounded-lg flex items-center gap-3">
                      <CircleAlert className="text-accent w-5 h-5 flex-shrink-0" />
                      <p className="text-white/80 text-sm">Your deposit will be available in your account once the payment has been processed. You will receive an email notification.</p>
                    </div>
                    
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingDeposit;
