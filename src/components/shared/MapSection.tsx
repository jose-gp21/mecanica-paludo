export function MapSection() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 h-[350px] w-full max-w-4xl mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.027620547328!2d-52.3241265237957!3d-26.56697557749114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e40d9f3b4ed941%3A0x6b61618bbd1d9d2a!2sMec%C3%A2nica%20Paludo!5e0!3m2!1spt-BR!2sbr!4v1697462015019!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}
