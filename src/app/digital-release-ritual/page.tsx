import { Metadata } from 'next';
import SEOPage from '@/components/SEOPage';

export const metadata: Metadata = {
  title: 'Digital Release Ritual — Destroy Negative Energy Online',
  description: 'A modern digital ritual for releasing negative energy. Destroy bad thoughts, frustrations, and stress with a calming symbolic tool. Nothing is saved.',
  alternates: { canonical: '/digital-release-ritual' },
};

export default function Page() {
  return (
    <SEOPage
      title="A Digital Release Ritual"
      intro="Rituals of release are as old as humanity itself. Burning letters, casting stones into the sea, releasing lanterns into the night sky. ThoughtShredder is the digital evolution of that ancient human instinct."
      sections={[
        { heading: 'Ancient practice, modern form', content: 'In Japan, there\'s a tradition of writing your troubles on paper and dissolving them in water at a shrine. In many Western cultures, people write letters to the past and burn them. These aren\'t just symbolic gestures — they create real psychological shifts. ThoughtShredder brings this practice to your screen.' },
        { heading: 'Your personal ritual', content: 'There\'s no right way to use ThoughtShredder. Some people type long paragraphs. Others write a single word. Some upload photos of things that frustrate them. The important thing is the act itself: externalizing what\'s inside you, choosing how to destroy it, and watching it disappear.' },
        { heading: 'No audience required', content: 'Unlike posting on social media or venting to a friend, this ritual is entirely private. No one sees what you write. No one judges. No one responds. It\'s a conversation between you and the void — and the void doesn\'t talk back.' },
      ]}
      faqs={[
        { q: 'What makes this a "ritual"?', a: 'A ritual is any symbolic action performed with intention. When you consciously write down a negative thought and choose to destroy it, you\'re performing a small but meaningful ritual of release.' },
        { q: 'Can I do this daily?', a: 'Absolutely. Many users make it a daily practice — a quick "thought dump" to start or end the day with a cleaner mental slate.' },
        { q: 'Is this connected to any religion or spirituality?', a: 'No. ThoughtShredder is secular and universal. The concept of symbolic release exists across all cultures and belief systems. Use it in whatever way feels meaningful to you.' },
      ]}
    />
  );
}
