import { Metadata } from 'next';
import SEOPage from '@/components/SEOPage';

export const metadata: Metadata = {
  title: 'How to Let Go of Negative Thoughts — A Practical Guide',
  description: 'Learn how to let go of negative thoughts with practical techniques including symbolic destruction, journaling, and digital release rituals.',
  alternates: { canonical: '/how-to-let-go' },
};

export default function Page() {
  return (
    <SEOPage
      title="How to Let Go of Negative Thoughts"
      intro="Letting go sounds simple. In practice, it's one of the hardest things humans do. Our brains are wired to hold onto negative experiences — it's a survival mechanism. But you can learn to work with that wiring, not against it."
      sections={[
        { heading: 'Name it to tame it', content: 'Research in neuroscience shows that simply labeling an emotion reduces its intensity. When you type your frustration into words, you\'re activating the prefrontal cortex and calming the amygdala. The act of writing is itself therapeutic — before you even destroy anything.' },
        { heading: 'Externalize the thought', content: 'A thought in your head feels like part of you. A thought on a screen is just text — external, separate, something you can look at from the outside. This distance is powerful. It turns "I am angry" into "there is anger, and I wrote it down."' },
        { heading: 'Symbolic destruction', content: 'Cultures worldwide have practiced symbolic release for thousands of years. Burning letters, releasing lanterns, throwing stones into the sea, burying objects. These rituals work because the brain responds to symbolic actions as if they were real. Watching your thought shredded, burned, or flushed activates the same neural pathways.' },
        { heading: 'Make it a practice', content: 'Letting go isn\'t a one-time event — it\'s a skill. Like meditation or exercise, it gets easier with practice. Consider making a daily habit of writing down one thing that\'s bothering you and destroying it. Over time, you\'ll find it easier to release thoughts without needing the ritual at all.' },
        { heading: 'When to seek more help', content: 'ThoughtShredder is a tool for everyday frustrations and negative thoughts. If you\'re experiencing persistent negative thoughts, anxiety, depression, or thoughts of self-harm, please reach out to a mental health professional. This tool is not therapy — it\'s a small act of digital self-care.' },
      ]}
      faqs={[
        { q: 'Is symbolic destruction scientifically backed?', a: 'Yes. A 2012 study published in Psychological Science found that people who wrote down negative thoughts and physically threw them away reported thinking about those thoughts less afterward. The physical act of disposal had a real cognitive effect.' },
        { q: 'How often should I use this?', a: 'As often as you need. Some people use it daily as a quick stress release. Others use it in moments of acute frustration. There\'s no right frequency.' },
        { q: 'Can this replace therapy?', a: 'No. ThoughtShredder is a symbolic tool for everyday frustrations. For persistent mental health concerns, professional help is important and effective.' },
      ]}
    />
  );
}
