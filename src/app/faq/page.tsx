import { Metadata } from 'next';
import SEOPage from '@/components/SEOPage';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: 'Everything you need to know about ThoughtShredder. How it works, privacy, data storage, and more.',
  alternates: { canonical: '/faq' },
};

export default function Page() {
  return (
    <SEOPage
      title="Frequently Asked Questions"
      intro="Got questions about ThoughtShredder? Here's everything you need to know about how it works, your privacy, and what happens (or doesn't happen) to your data."
      sections={[]}
      faqs={[
        { q: 'What is ThoughtShredder?', a: 'ThoughtShredder is a free online tool that lets you symbolically destroy bad thoughts, frustrations, and negative energy. Type your thought, upload a document or photo, then choose to shred it, burn it, or flush it away.' },
        { q: 'Is my data stored anywhere?', a: 'Absolutely not. Your text, documents, and photos are processed entirely in your browser. Nothing is ever sent to a server, saved, or logged. Once destroyed, it\'s truly gone.' },
        { q: 'What happens to uploaded files?', a: 'Files exist only temporarily in your browser\'s memory for the duration of the animation. They are never uploaded to any server and are discarded immediately after the destruction animation completes.' },
        { q: 'Is this a therapy or mental health tool?', a: 'No. ThoughtShredder is a symbolic, playful ritual for releasing everyday frustration. It is not a substitute for professional mental health support. If you\'re struggling with persistent negative thoughts, please reach out to a qualified professional.' },
        { q: 'How does the global counter work?', a: 'The counter tracks the total number of destructions across all visitors. It\'s completely anonymous — we only store the number, nothing about what was destroyed or who destroyed it.' },
        { q: 'Can I use this on my phone?', a: 'Yes. ThoughtShredder is fully responsive and works on phones, tablets, and desktops. No app download needed.' },
        { q: 'Is it free?', a: 'Yes, completely free. The site is supported by non-intrusive advertising.' },
        { q: 'Do you use cookies?', a: 'We use minimal cookies for advertising (Google AdSense) and basic analytics. We never use cookies to track your content or personal information.' },
        { q: 'Why does destroying thoughts feel good?', a: 'Symbolic acts of release have been used in rituals across cultures for thousands of years. Research shows that externalizing a thought and then physically or symbolically disposing of it can reduce its cognitive impact.' },
        { q: 'Can I suggest new destruction methods?', a: 'We\'d love to hear your ideas! Reach out via the contact link in the footer.' },
      ]}
    />
  );
}
