import { Metadata } from 'next';
import SEOPage from '@/components/SEOPage';

export const metadata: Metadata = {
  title: 'Burn Negative Thoughts — Watch Them Turn to Ash',
  description: 'Burn your negative thoughts online. Type what\'s bothering you and watch it consumed by fire. A calming digital ritual. Nothing is stored.',
  alternates: { canonical: '/burn-negative-thoughts' },
};

export default function Page() {
  return (
    <SEOPage
      title="Burn Negative Thoughts"
      intro="Fire has been a symbol of transformation and release for as long as humans have gathered around it. Writing your worries on paper and burning them is a ritual practiced across cultures. Now you can do it digitally."
      sections={[
        { heading: 'The power of fire as metaphor', content: 'Fire transforms. It doesn\'t just hide or move something — it converts it into something entirely different. Smoke, ash, heat. When you watch your negative thought burn on screen, you\'re watching it transform from something heavy into nothing at all.' },
        { heading: 'How to burn a thought', content: 'Type your negative thought, frustration, or worry into the text field. You can also upload a document or photo. Then click "Burn It" and watch the fire animation consume your words. Feel the warmth of letting go.' },
        { heading: 'A modern ritual', content: 'In many traditions, burning is an act of offering or release. Think of this as a modern, private version of that ancient practice. No ceremony needed — just you, your thought, and the fire.' },
      ]}
      faqs={[
        { q: 'Why does watching something burn feel cathartic?', a: 'Fire represents irreversible transformation. Once something burns, it cannot return to its original form. This finality can feel deeply satisfying when applied to thoughts you want to release.' },
        { q: 'Can I burn a document or photo?', a: 'Yes. Upload any document or image and watch it burn. The file is never stored — it exists only temporarily in your browser\'s memory during the animation.' },
      ]}
    />
  );
}
