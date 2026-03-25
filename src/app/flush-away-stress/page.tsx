import { Metadata } from 'next';
import SEOPage from '@/components/SEOPage';

export const metadata: Metadata = {
  title: 'Flush Away Stress — A Satisfying Digital Release',
  description: 'Flush your stress down the drain. Type what\'s stressing you out and watch it swirl away. Free, private, and oddly satisfying.',
  alternates: { canonical: '/flush-away-stress' },
};

export default function Page() {
  return (
    <SEOPage
      title="Flush Away Stress"
      intro="There's something deeply satisfying about flushing something away. It's gone. Irretrievably. Down the drain, out of sight, out of mind. That's exactly what ThoughtShredder's flush feature does to your stress."
      sections={[
        { heading: 'Why flushing works', content: 'The flush is the most playful destruction method — and sometimes that\'s exactly what stress needs. Not seriousness, not deep reflection, just a good old-fashioned flush. Watch your words spiral down and disappear. It\'s hard not to smile.' },
        { heading: 'Perfect for daily stress', content: 'Had a bad meeting? Flush it. Annoying email? Flush it. Someone cut you off in traffic? Type it out and flush it. The beauty of this tool is its speed — you can destroy a stressful thought in under 10 seconds and get back to your day.' },
        { heading: 'No trace left behind', content: 'Just like a real flush, once it\'s gone, it\'s gone. We don\'t store your text, we don\'t log your visits, and we don\'t track what you\'re flushing. Your stress is between you and the drain.' },
      ]}
      faqs={[
        { q: 'Is the flush animation realistic?', a: 'It\'s a stylized spiral animation — satisfying to watch without being gross. Think more "whirlpool" than "plumbing".' },
        { q: 'Can I flush multiple things at once?', a: 'One at a time for maximum satisfaction. But you can flush as many times as you want — there\'s no limit.' },
      ]}
    />
  );
}
