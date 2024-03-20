import React, { useRef } from "react";
import Card from "./Card";



const data = [
  {
    notes:
    "When you study, you're not just learning for today, you're building a better future for yourself. Imagine all the amazing things you can achieve with the knowledge you gain. Believe in yourself. Even if things get tough, remember that every challenge is an opportunity to grow and improve. Picture yourself achieving your goals. Whether it's graduating, landing your dream job, or simply feeling proud of what you've accomplished, keep that image in your mind as you study. It'll remind you why all your hard work is worth it.",
    color: 'bg-[lavender]',
    tag: "Study"
  },
  {
    notes:
    "Krishna teaches us that true happiness comes from within. By connecting with our inner selves through practices like meditation and self-reflection. Krishna teaches us that our ultimate goal is to realize our true nature as spiritual beings. By seeking self-realization through spiritual practices and inner exploration, we can experience a profound sense of liberation and oneness with the universe.",
    color: 'bg-[aquamarine]',
    tag: "Spirituality"
  },
  {
    notes:
    "When you take care of your health, you feel better overall. You have more energy, you sleep better, and you're able to do more things that you enjoy. Taking care of your health helps you stay strong physically. By eating well, exercising, and taking care of yourself, you can lower your risk of getting sick. Good health can lead to a happier life. When your body feels good, it's easier to stay positive and enjoy the things you love.",
    color: 'bg-[wheat]',
    tag: "Health"
  },
];

function Foreground() {

  const ref = useRef(null);

  return (
    <div ref={ref} className="h-screen absolute flex flex-wrap items-center justify-center gap-2 px-2 py-2 w-full">
      {
        data.map((data) => (
          <Card key={data.tag} data={data} reference={ref}/>
        ))
      }
    </div>
  );
}

export default Foreground;
