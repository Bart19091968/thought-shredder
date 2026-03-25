import { Metadata } from 'next';
import SEOPage from '@/components/SEOPage';

export const metadata: Metadata = {
  title: 'Let Go of Frustration — Release It Online',
  description: 'Feeling frustrated? Type it out, then shred it, burn it, or flush it. A free digital tool for letting go of frustration. Nothing is saved.',
  alternates: { canonical: '/let-go-of-frustration' },
};

export default function Page() {
  return (
    <SEOPage
      title="Let Go of Frustration"
      intro="Frustration builds up. At work, at home, in traffic, in your own head. Sometimes you just need to put it somewhere — and then get rid of it. ThoughtShredder gives you that outlet."
      sections={[
        {
          heading: 'A safe place to vent',
          content: 'Unlike venting to a friend or posting on social media, ThoughtShredder doesn\'t judge, doesn\'t remember, and doesn\'t share. Write your frustration down in its rawest form. Nobody will ever see it — including us.',
        },
        {
          heading: 'Choose your release',
          content: 'Some frustrations deserve the shredder — methodical, thorough destruction. Others need fire — fast and final. And some? They just need to be flushed away. Pick the method that feels right for what you\'re feeling.',
        },
        {
          heading: 'Make it a habit',
          content: 'Many people find that a daily or weekly "frustration dump" helps them stay centered. Think of ThoughtShredder as a digital journal that destroys itself — you get the benefit of writing things down without the anxiety of anyone finding it.',
        },
      ]}
      faqs={[
        { q: 'Can I use this at work?', a: 'Yes. It works on any device with a browser. No installation needed. And since nothing is stored or transmitted, there\'s no trail.' },
        { q: 'Is this better than journaling?', a: 'It\'s different. Journaling preserves your thoughts for reflection. ThoughtShredder is for thoughts you don\'t want to keep — the ones you just need to get out and let go of.' },
      ]}
    />
  );
}
