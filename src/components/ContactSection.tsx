import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    {
      title: 'Email',
      value: 'soumya.mulubagula@email.com',
      icon: Mail,
    },
    {
      title: 'Phone',
      value: '+91 98765 43210',
      icon: Phone,
    },
    {
      title: 'Location',
      value: 'New Delhi, India',
      icon: MapPin,
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/soumya-mulubagula',
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-soft-gradient">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on educational initiatives or discuss innovative learning solutions?
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {contacts.map(({ title, value, icon: Icon }) => (
              <Card
                key={title}
                className="flex items-center space-x-4 shadow-lg rounded-lg p-6 min-w-[280px] max-w-[320px] flex-1 bg-white"
              >
                <div className="bg-primary text-primary-foreground p-3 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold">{title}</h4>
                  {/* removed truncate and set break-words for wrapping long text */}
                  <p className="text-muted-foreground break-words">{value}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
