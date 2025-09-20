import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

// Place your NocodeAPI endpoint here:
const SHEET_API_URL = 'https://v1.nocodeapi.com/kamranblouch/google_sheets/flRHfJLsjlXHLgjq?tabId=Sheet1';

// EmailJS config
const EMAILJS_SERVICE_ID = 'service_s9pduia';
const EMAILJS_TEMPLATE_ID = 'template_k085ymk';
const EMAILJS_PUBLIC_KEY = 'ooHIlN8s24q27AdtA';

const featureOptions = [
  { label: "AI Comments", color: "bg-blue-100 text-blue-700" },
  { label: "Competitor Analyzer", color: "bg-green-100 text-green-700" },
  { label: "Post Alternatives", color: "bg-purple-100 text-purple-700" },
  { label: "AI Outreach", color: "bg-pink-100 text-pink-700" },
];
const timeOptions = [
  { label: "<10%", color: "bg-blue-100 text-blue-700" },
  { label: "10-30%", color: "bg-green-100 text-green-700" },
  { label: "30-50%", color: "bg-yellow-100 text-yellow-700" },
  { label: "50-70%", color: "bg-purple-100 text-purple-700" },
  { label: ">70%", color: "bg-pink-100 text-pink-700" },
];

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [feature, setFeature] = useState([]); // now an array
  const [featureDropdownOpen, setFeatureDropdownOpen] = useState(false);
  const featureDropdownRef = useRef(null);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const timeDropdownRef = useRef(null);
  const { toast } = useToast();

  // Close dropdown on outside click or ESC
  useEffect(() => {
    function handleClickOutside(event) {
      if (featureDropdownRef.current && !featureDropdownRef.current.contains(event.target)) {
        setFeatureDropdownOpen(false);
      }
    }
    function handleEsc(event) {
      if (event.key === "Escape") setFeatureDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Close time dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(event.target)) {
        setTimeDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "You're on the list!",
      description: "We'll keep you updated on Connectee's launch.",
    });
    // setEmail(""); // <-- Do NOT clear email here!
    setIsSubmitting(false);
    setShowModal(true);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (feature.length === 0) return toast({ title: "Please select at least one feature." });
    setIsSubmitting(true);
    // 1. Store in Google Sheets via NocodeAPI
    try {
      await fetch(SHEET_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([
          [email, feature.join(', '), linkedinUrl, timeSpent, new Date().toISOString()]
        ]),
      });
    } catch (err) {
      setIsSubmitting(false);
      toast({ title: 'Error', description: 'Failed to save to Google Sheets.' });
      return;
    }
    // 2. Send confirmation email via EmailJS
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: email, // matches your template's To Email field
        },
        EMAILJS_PUBLIC_KEY
      );
    } catch (err) {
      setIsSubmitting(false);
      toast({ title: 'Error', description: 'Failed to send confirmation email.' });
      return;
    }
    setShowModal(false);
    setIsSubmitting(false);
    toast({
      title: "Thank you!",
      description: "Confirmation email sent. Your preferences have been recorded.",
    });
    setFeature([]);
    setLinkedinUrl("");
    setTimeSpent("");
    setEmail(""); // <-- Clear email here, after everything is done
  };

  return (
    <section id="cta-section" className="relative py-24 bg-gradient-to-b from-background to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Join the Connectee Waitlist</h2>
          <p className="text-lg text-muted-foreground mb-8">Be the first to experience AI-powered LinkedIn engagement</p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-14 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="waitlist" 
                size="xl"
                disabled={isSubmitting}
                className="h-14 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    Joining...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              Free to join
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              No spam ever
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              Early access priority
            </div>
          </div>
        </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fade-in-up max-h-screen overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <form onSubmit={handleModalSubmit} className="space-y-6">
                <div>
                  <label className="block font-medium mb-2 text-gray-900">What Connectee feature do you want most?</label>
                  <div className="relative" ref={featureDropdownRef}>
                    <button
                      type="button"
                      className={`w-full border-2 ${featureDropdownOpen ? 'border-primary' : 'border-gray-300'} rounded-lg px-4 py-3 bg-gray-50 text-gray-900 flex items-center flex-wrap gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                      onClick={() => setFeatureDropdownOpen((v) => !v)}
                      aria-haspopup="listbox"
                      aria-expanded={featureDropdownOpen}
                    >
                      {feature.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {feature.map(f => (
                            <span key={f} className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${featureOptions.find(opt => opt.label === f)?.color} cursor-pointer group`} onClick={e => { e.stopPropagation(); setFeature(feature.filter(x => x !== f)); }}>
                              {f}
                              <svg className="ml-1 h-3 w-3 text-gray-400 group-hover:text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400">Select feature(s)</span>
                      )}
                      <svg className="ml-auto h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {featureDropdownOpen && (
                      <ul className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto animate-fade-in-up" role="listbox">
                        {featureOptions.map(opt => (
                          <li
                            key={opt.label}
                            className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 transition-colors ${feature.includes(opt.label) ? 'opacity-50' : ''}`}
                            onClick={() => {
                              if (!feature.includes(opt.label)) setFeature([...feature, opt.label]);
                            }}
                            role="option"
                            aria-selected={feature.includes(opt.label)}
                          >
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${opt.color}`}>{opt.label}</span>
                            {feature.includes(opt.label) && <svg className="h-4 w-4 text-primary ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-2 text-gray-900">LinkedIn Profile URL</label>
                  <Input
                    type="url"
                    placeholder="https://linkedin.com/in/your-profile"
                    value={linkedinUrl}
                    onChange={e => setLinkedinUrl(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2 text-gray-900">How much of your time do you spend on manual comments, manual analyzing, and manual outreach?</label>
                  <div className="relative" ref={timeDropdownRef}>
                    <button
                      type="button"
                      className={`w-full border-2 ${timeDropdownOpen ? 'border-primary' : 'border-gray-300'} rounded-lg px-4 py-3 bg-gray-50 text-gray-900 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                      onClick={() => setTimeDropdownOpen((v) => !v)}
                      aria-haspopup="listbox"
                      aria-expanded={timeDropdownOpen}
                    >
                      {timeSpent ? (
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${timeOptions.find(opt => opt.label === timeSpent)?.color}`}>{timeSpent}</span>
                      ) : (
                        <span className="text-gray-400">Select an option</span>
                      )}
                      <svg className="ml-2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {timeDropdownOpen && (
                      <ul className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto animate-fade-in-up" role="listbox">
                        {timeOptions.map(opt => (
                          <li
                            key={opt.label}
                            className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 transition-colors ${timeSpent === opt.label ? 'bg-gray-100' : ''}`}
                            onClick={() => { setTimeSpent(opt.label); setTimeDropdownOpen(false); }}
                            role="option"
                            aria-selected={timeSpent === opt.label}
                          >
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${opt.color}`}>{opt.label}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <Button type="submit" className="w-full h-12 bg-primary text-white rounded-lg text-lg font-semibold flex items-center justify-center gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CtaSection;