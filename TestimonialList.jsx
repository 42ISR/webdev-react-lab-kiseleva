import ReviewCard from "../ReviewCard/ReviewCard.jsx";
import "./TestimonialList.css";

const reviews = [
  {
    id: 1,
    name: "Анна К.",
    avatar: "https://placehold.co/64x64?text=A",
    text: "Курс по React дал мне уверенные знания, через 2 месяца после выпуска нашла работу.",
    course: "React с нуля",
  },
  {
    id: 2,
    name: "Дмитрий С.",
    avatar: "https://placehold.co/64x64?text=D",
    text: "Отличные менторы, всегда помогали с код-ревью. Рекомендую курс по Node.js.",
    course: "Node.js для бэкенда",
  },
  {
    id: 3,
    name: "Мария П.",
    avatar: "https://placehold.co/64x64?text=M",
    text: "Была без опыта в дизайне, а теперь собираю портфолио и беру первые заказы.",
    course: "UX/UI дизайн",
  },
];

export default function TestimonialList() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Отзывы студентов</h2>
        <div className="testimonials__grid">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
