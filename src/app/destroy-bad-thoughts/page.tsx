import { Metadata } from 'next';
import SEOPage from '@/components/SEOPage';

export const metadata: Metadata = {
  title: 'Destroy Bad Thoughts — Free Online Tool',
  description: 'A symbolic online tool to destroy bad thoughts. Type your negativity, shred it, burn it, or flush it away. Nothing is saved. Feel lighter instantly.',
  alternates: { canonical: '/destroy-bad-thoughts' },
};

export default function Page() {
  return (
    <SEOPage
      title="Destroy Bad Thoughts"
      intro="Bad thoughts have a way of sticking around longer than they should. They loop, they grow, they weigh you down. ThoughtShredder gives you a simple, satisfying way to symbolically destroy them — and move on."
      sections={[
        {
          heading: 'Why destroying thoughts feels so good',
          content: 'There\'s real psychology behind symbolic release. When you externalize a thought — writing it down, then watching it be destroyed — you create a cognitive separation between yourself and the thought. It\'s no longer part of you. It\'s just words on a screen, and then it\'s nothing at all.',
        },
        {
          heading: 'How it works',
          content: 'Type your bad thought into the text field. Or upload a document or photo that represents your frustration. Then choose your destruction method: shred it into confetti, burn it to ash, or flush it down the drain. Watch the animation play out. Feel the release. Start over if you need to.',
        },
        {
          heading: 'Your privacy matters',
          content: 'We don\'t store anything. Your text never leaves your browser. Uploaded files exist only momentarily in your device\'s memory and are discarded the instant destruction is complete. No accounts, no cookies tracking your content, no data mining. Just a clean digital ritual.',
        },
      ]}
      faqs={[
        { q: 'Does destroying a bad thought actually help?', a: 'Symbolic destruction has been used in therapy and cultural rituals for centuries. While it\'s not a replacement for professional help, many people find it genuinely relieving to externalize and release negative thoughts.' },
        { q: 'Is my bad thought sent to a server?', a: 'No. All processing happens in your browser. Nothing is uploaded, transmitted, or stored.' },
        { q: 'Can I destroy multiple thoughts?', a: 'Absolutely. Destroy as many as you need. There\'s no limit.' },
      ]}
    />
  );
}
