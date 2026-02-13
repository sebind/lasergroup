import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10 mx-auto w-full">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Connect with LASER</h1>
            <p className="text-[#9dabb9] text-base font-normal leading-normal max-w-2xl">
              Inquiries regarding computational materials science, collaborations, or student positions. We are always open to discussing new frontiers in optoelectronics.
            </p>
          </div>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 mt-4">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Contact Details List */}
            <div className="flex flex-col rounded-xl border border-border-color bg-surface-card overflow-hidden">
              <h3 className="text-white tracking-light text-[22px] font-bold leading-tight px-6 pt-6 pb-2">
                Contact Details
              </h3>
              
              <div className="flex items-center gap-4 px-6 py-4 border-b border-border-color/50 last:border-0">
                <div className="text-white flex items-center justify-center rounded-lg bg-primary shrink-0 size-10 md:size-12">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal">Lab Location</p>
                  <p className="text-[#9dabb9] text-sm font-normal leading-normal">
                    Nano Lab, PSG Institute of Advanced Studies, Coimbatore, TamilNadu
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 px-6 py-4 border-b border-border-color/50 last:border-0">
                <div className="text-white flex items-center justify-center rounded-lg bg-border-color shrink-0 size-10 md:size-12">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal">General Inquiries</p>
                  <a href="mailto:seb@psgias.ac.in" className="text-[#9dabb9] text-sm font-normal leading-normal truncate hover:text-primary transition-colors">
                    seb@psgias.ac.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 px-6 py-4">
                <div className="text-white flex items-center justify-center rounded-lg bg-border-color shrink-0 size-10 md:size-12">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal">Phone</p>
                  <p className="text-[#9dabb9] text-sm font-normal leading-normal">
                    0422 4344000  extn:4327 (off)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Card */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-border-color">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.329773667825!2d77.0018!3d11.024607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f09cdb78b%3A0x7332ad3b2c6c1118!2sPSG%20Institute%20of%20Advanced%20Studies!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="flex flex-col rounded-xl border border-border-color bg-surface-card p-6 md:p-8 h-full">
              <h2 className="text-white text-2xl font-bold mb-6">Send a Message</h2>
              <form 
                className="flex flex-col gap-5 flex-1" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                  const interest = (form.elements.namedItem('interest') as HTMLSelectElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                  
                  const subject = encodeURIComponent(`Inquiry from LASER Website: ${interest}`);
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`);

                  window.location.href = `mailto:seb@psgias.ac.in?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-sm font-medium" htmlFor="name">Full Name</label>
                    <input className="w-full rounded-lg border border-[#3e4a5b] bg-background-dark text-white px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#9ca3af]" id="name" name="name" placeholder="Jane Doe" type="text" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-sm font-medium" htmlFor="email">Email Address</label>
                    <input className="w-full rounded-lg border border-[#3e4a5b] bg-background-dark text-white px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#9ca3af]" id="email" name="email" placeholder="jane@university.edu" type="email" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-medium" htmlFor="interest">Area of Interest</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-[#3e4a5b] bg-background-dark text-white px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all pr-10" id="interest" name="interest" defaultValue="">
                      <option disabled value="">Select a topic...</option>
                      <option value="photovoltaics">Access to facilities</option>
                      <option value="nanomaterials">Computational Materials</option>
                      <option value="collaboration">Research Collaboration</option>
                      <option value="student">Research Positions/Internship</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#6b7280]">
                      <span className="material-symbols-outlined text-xl">expand_more</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 grow">
                  <label className="text-white text-sm font-medium" htmlFor="message">Message</label>
                  <textarea className="w-full grow resize-none rounded-lg border border-[#3e4a5b] bg-background-dark text-white px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#9ca3af]" id="message" name="message" placeholder="How can we help you?" rows={6} required></textarea>
                </div>
                <div className="pt-2">
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary hover:bg-blue-600 px-6 py-3 text-white font-bold transition-all active:scale-[0.98]">
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-lg">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
