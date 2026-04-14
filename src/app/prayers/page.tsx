import { PageHeader } from "@/components/page-header";
import { FadeUp } from "@/components/fade-up";
import { BookOpen } from "lucide-react";

const prayers = [
  {
    category: "The Holy Rosary",
    items: [
      { title: "The Apostles' Creed", text: "I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord; Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into hell; the third day He arose again from the dead. He ascended into heaven, and sits at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen." },
      { title: "The Our Father", text: "Our Father, Who art in heaven, hallowed be Thy Name. Thy kingdom come. Thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us, and lead us not into temptation, but deliver us from evil. Amen." },
      { title: "The Hail Mary", text: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen." },
      { title: "The Glory Be", text: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen." },
      { title: "The Hail, Holy Queen", text: "Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen." },
    ],
  },
  {
    category: "Novenas",
    items: [
      { title: "Novena to Our Lady of Dodi", text: "O Blessed Virgin Mary, Our Lady of Dodi, we come before you with humble hearts, seeking your powerful intercession. You who are the Mother of God and our Mother, look upon us with compassion. Present our needs before your Son, Jesus Christ. Grant us the grace of faith, hope, and charity. Heal our bodies and souls. Protect our families and community. We trust in your maternal love and care. Our Lady of Dodi, pray for us. (Repeat for nine consecutive days)" },
      { title: "Novena to the Immaculate Conception", text: "O most Holy Virgin Mary, Queen of the most Holy Rosary, you were pleased to appear to the children at Fatima and reveal a glorious message. We implore you, inspire in our hearts a fervent love for the practice of the Rosary. By meditating on the mysteries of the redemption that are recalled therein, may we obtain the graces and virtues that we ask, through the merits of Jesus Christ, our Lord and Redeemer. Our Lady of the Immaculate Conception, pray for us. (Repeat for nine consecutive days)" },
    ],
  },
  {
    category: "Marian Prayers",
    items: [
      { title: "The Memorare", text: "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired with this confidence, I fly to thee, O Virgin of virgins, my Mother. To thee do I come; before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen." },
      { title: "The Angelus", text: "The Angel of the Lord declared unto Mary, and she conceived of the Holy Spirit. Hail Mary... Behold the handmaid of the Lord, be it done unto me according to thy word. Hail Mary... And the Word was made flesh, and dwelt among us. Hail Mary... Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we to whom the Incarnation of Christ Thy Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen." },
      { title: "Prayer to Our Lady of Dodi", text: "O gracious Mother Mary, Our Lady of Dodi, we entrust ourselves to your loving care. You are the refuge of sinners, the health of the sick, and the comforter of the afflicted. Through your intercession at the Grotto of Dodi, many have found healing, peace, and renewed faith. We ask you to present our humble petitions before your Divine Son. May your mantle of protection cover our families, our community, and all who make pilgrimage to this holy place. Our Lady of Dodi, Mother of Grace, pray for us now and always. Amen." },
      { title: "Act of Consecration to Our Lady", text: "O my Queen, O my Mother, I give myself entirely to thee. And to show my devotion to thee, I consecrate to thee this day my eyes, my ears, my mouth, my heart, my whole being without reserve. Wherefore, good Mother, as I am thine own, keep me, guard me, as thy property and possession. Amen." },
    ],
  },
];

export default function PrayersPage() {
  return (
    <>
      <PageHeader title="Catholic Prayers Library" subtitle="A collection of prayers for your spiritual journey" />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {prayers.map((section, si) => (
            <FadeUp key={section.category} delay={si * 100}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-[#1A4D8F]" />
                  <h2 className="text-2xl font-bold text-[#1A4D8F]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                    {section.category}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.items.map((prayer) => (
                    <details key={prayer.title} className="group border border-gray-200 rounded-xl overflow-hidden">
                      <summary className="px-6 py-4 cursor-pointer font-semibold text-[#333] hover:text-[#1A4D8F] transition-colors list-none flex items-center justify-between" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                        {prayer.title}
                        <span className="text-[#999] group-open:rotate-180 transition-transform">&#9660;</span>
                      </summary>
                      <div className="px-6 pb-4">
                        <p className="text-[#555] leading-relaxed text-sm italic">{prayer.text}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
